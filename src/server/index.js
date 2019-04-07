import Parse, { User, Object as ParseObject, Query } from "parse";
import { PARSE_APP_ID, PARSE_SERVER_URL } from "../staticData";
import { isValidEmail, isValidUsn } from "../helpers";

Parse.initialize(PARSE_APP_ID);

Parse.serverURL = PARSE_SERVER_URL;

export const User_Types = {
    Student: "student",
    Faculty: "faculty",
    Admin: "admin"
}
export const Gender_Options = {
    male: "male",
    female: "female"
}

export const UserFields = [
    "name",
    "email",
    "gender",
    "branch",
    "type"
];


export const StudentFields = [
    ...UserFields,
    "usn",
    "academicYear"
]

export const Branches = {
    cs: "Computer Science",
    ec: "Electronics & Communications",
    cv: "Civil",
    me: "Mechanical"
}

export class UserInfo extends ParseObject {
    constructor() {
        super("UserInfo");
    }
}

ParseObject.registerSubclass("UserInfo", UserInfo);

export class CollegeEvent extends ParseObject {
    constructor(name, datetime, description) {
        super("CollegeEvent");
        this.set("name", name);
        this.set("datetime", datetime);
        this.set("description", description);
    }
}

ParseObject.registerSubclass("CollegeEvent", CollegeEvent);


export class Circular extends ParseObject {
    constructor(name, endDatetime, description) {
        super("Circular");
        this.set("name", name);
        this.set("endDatetime", endDatetime);
        this.set("description", description);
    }
}

ParseObject.registerSubclass("Circular", Circular);

export const UserManager = (function () {

    async function signUp({
        email,
        name,
        branch,
        gender,
        type,
        usn,
        academicYear,
        password
    }) {
        if (!email || !name || !gender || !type || !branch || !password) {
            throw new Error("Basic User info not provided");
        }

        if (type === User_Types.Student) {
            if (!usn || !academicYear) {
                throw new Error("Student information is not provided");
            }

            if (!isValidUsn(usn)) {
                throw new Error("Invalid USN");
            }

            if (academicYear <= 0 || academicYear > 4) {
                throw new Error("Invalid year");
            }
        }

        if (!isValidEmail(email)) {
            throw new Error("Invalid Email");
        }

        if (!Branches[branch]) {
            throw new Error("Invalid Branch");
        }

        if (!Gender_Options[gender]) {
            throw new Error("Invalid Gender");
        }

        if ((password + "".length) < 8) {
            throw new Error("Password length is too short!");
        }

        const newUser = new User();
        newUser.setEmail(email);
        newUser.setUsername(email);
        newUser.setPassword(password);

        let user = await newUser.signUp();
        if (!user) throw new Error("Sign up failed!");

        const newUserInfo = new UserInfo();
        let info = {
            email,
            name,
            gender,
            type,
            branch,
            verified: false,
            parent: user
        };
        if (type === User_Types.Student) {
            info = {
                ...info,
                usn,
                academicYear: Number(academicYear),
                graduated: false,
            }
        }
        let userInfo = await newUserInfo.save(info);
        if (!userInfo) throw new Error("Failed to save user info");

        User.logOut();

        return userInfo;
    }

    async function login({ email, password }) {
        if (!email || !password) {
            throw new Error("Email/Password not provided");
        }
        if (!isValidEmail(email)) {
            throw new Error("Email is invalid");
        }

        if ((password + "".length) < 8) {
            throw new Error("Password length is too short");
        }

        let user = await User.logIn(email, password);
        if (!user) throw new Error("Login failed");
        else {

            let userInfo = await _getUserInfoByEmail(email);
            if (!userInfo) throw new Error("Failed to fetch user details");
            else {
                return _handleUserLogin(user, userInfo);
            }

        }
    }

    function logout() {
        User.logOut();
    }

    async function checkLogin() {
        let user = User.current();
        if (!user) throw new Error("No user session available");
        else {
            let userInfo = await _getUserInfoByEmail(user.get("username"));
            if (!userInfo) throw new Error("Failed to fetch user details");
            return _handleUserLogin(user, userInfo);
        }

    }

    async function _getUserInfoByEmail(email) {
        let query = new Query(UserInfo);
        query.equalTo("email", email);
        let userInfo = await query.first();
        if (!userInfo) throw new Error("No such user found!");
        return userInfo;
    }

    async function _handleUserLogin(user, userInfo) {

        if (userInfo.get("verified") && !userInfo.get("graduated")) {
            let userData = {
                ...user.attributes,
                ...userInfo.attributes
            };
            return userData;
        }

        User.logOut();
        let errorMessage = "";
        if (!userInfo.get("verified")) {
            errorMessage = "Your account is not verified by admin yet. Please contact admin";
        }
        else if (userInfo.get("graduated")) {
            errorMessage = "Graduated students are not allowed to login";
        }
        throw new Error(errorMessage);
    }

    async function getUserDataByEmail(email) {
        let userInfo = await _getUserInfoByEmail(email);
        return userInfo.attributes;
    }

    async function getUnverifiedAccounts() {
        let query = new Query(UserInfo);
        query.equalTo("verified", false);
        const accounts = await query.find();
        if (!accounts) throw new Error("Something went wrong!");

        else {
            return accounts && accounts.map(account => account.attributes);
        }
    }

    async function setVerified(email) {

        let userInfo = await _getUserInfoByEmail(email);
        userInfo.set("verified", true);
        let saved = await userInfo.save();
        if (!saved) throw new Error("Couldn't update the user info.");

        return saved.attributes;
    }

    async function updateUserInfo(email, { name, gender, type, branch, usn, academicYear, graduated }) {

        if (!name || !gender || !type || !branch) {
            throw new Error("Basic User info not provided");
        }


        if (type === User_Types.Student) {
            if (!usn || !academicYear) {
                throw new Error("Student information is not provided");
            }
            if (!isValidUsn(usn)) {
                throw new Error("Invalid USN");
            }

            if (academicYear <= 0 || academicYear > 4) {
                throw new Error("Invalid year");
            }
        }

        if (!Branches[branch]) {
            throw new Error("Invalid Branch");
        }

        if (!Gender_Options[gender]) {
            throw new Error("Invalid Gender");
        }


        let userInfo = await _getUserInfoByEmail(email);
        if (!userInfo) throw new Error("Failed to fetch user!");
        let toUpdate = {
            name, gender, branch
        };

        if (type === User_Types.Student) {
            graduated = Boolean(graduated);
            toUpdate = { ...toUpdate, usn, academicYear, graduated }
        }
        let updatedData = await userInfo.save(toUpdate);

        if (!updatedData) throw new Error("Failed to update user data");

        return updatedData.attributes;

    }

    async function getStudents() {
        return getUsersDataByType(User_Types.Student);
    }

    async function getFaculty() {
        return getUsersDataByType(User_Types.Faculty);
    }

    async function getUsersDataByType(type = User_Types.Student) {
        let query = new Query(UserInfo);
        query.equalTo("type", type);

        let accounts = await query.find();
        if (!accounts) throw new Error("Failed to get accounts");

        return accounts.map(account => account.attributes);
    }

    return {
        signUp,
        login,
        logout,
        checkLogin,
        getUserByEmail: getUserDataByEmail,
        getUnverifiedAccounts,
        setVerified,
        updateUserInfo,
        getStudents,
        getFaculty
    }
})();

export const EventManager = (function () {

    async function add({ name, datetime, description }) {
        if(!name || !datetime || !description) {
            throw new Error("Please provide all the required details");
        }
        let event = new CollegeEvent(name, datetime, description);
        let savedEvent = await event.save();

        if (!savedEvent) throw new Error("Failed to save the event");

        return savedEvent.attributes;
    }

    async function getUpcomingEvents() {
        let query = new Query(CollegeEvent);
        let events = await query.find();
        if (!events) throw new Error("Failed to get events");

        return events.map(event => event.attributes).filter((ev => ev.datetime > Date.now()));
    }

    return {
        add,
        getUpcomingEvents
    };
})();


export const CircularManager = (function () {

    async function add({ name, endDatetime, description }) {
        if(!name || !endDatetime || !description) {
            throw new Error("Please provide all the required details");
        }
        let circular = new Circular(name, endDatetime, description);
        let savedCircular = await circular.save();

        if (!savedCircular) throw new Error("Failed to save the event");

        return savedCircular.attributes;
    }

    async function getCirculars() {
        let query = new Query(Circular);
        let circulars = await query.find();
        if (!circulars) throw new Error("Failed to get circulars");
        return circulars.map(circular => circular.attributes).filter((c => c.endDatetime > Date.now()));
    }

    return {
        add,
        getCirculars
    };
})();

window.UserManager = UserManager;
window.EventManager = EventManager;
window.CircularManager = CircularManager;

window.testUserData = {
    name: "Waseem Ahmed",
    email: "email@mail.com",
    branch: "cs",
    gender: "male",
    password: "1234567",
    type: "student",
    usn: "4yg13cs022",
    academicYear: 4
}