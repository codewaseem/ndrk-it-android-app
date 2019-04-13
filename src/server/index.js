import Parse, { User, Object as ParseObject, Query, File as ParseFile } from "parse";
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
    me: "Mechanical",
    no: "No"
}

export class UserInfo extends ParseObject {
    constructor() {
        super("UserInfo");
    }
}

ParseObject.registerSubclass("UserInfo", UserInfo);

export class CollegeEvent extends ParseObject {
    constructor() {
        super("CollegeEvent");
    }
}

ParseObject.registerSubclass("CollegeEvent", CollegeEvent);


export class Circular extends ParseObject {
    constructor() {
        super("Circular");
    }
}

ParseObject.registerSubclass("Circular", Circular);

export const UserManager = (function () {

    let loggedInUserData;

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
        loggedInUserData = null;
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
            loggedInUserData = userData;
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
        getFaculty,
        getCurrentUser: () => (loggedInUserData)
    }
})();

export const EventManager = (function () {

    async function add({ name, datetime, description }) {
        if (!name || !datetime || !description) {
            throw new Error("Please provide all the required details");
        }
        let currentUser = UserManager.getCurrentUser();
        let branch;
        let postedBy;

        if (currentUser.type === User_Types.Faculty) {
            branch = currentUser.branch;
            postedBy = User_Types.Faculty;
        } else if (currentUser.type === User_Types.Admin) {
            branch = "all";
            postedBy = User_Types.Admin
        } else {
            throw new Error("You are not allowed to post an event!");
        }

        let event = new CollegeEvent();
        let savedEvent = await event.save({
            name,
            datetime,
            description,
            branch,
            postedBy
        });

        if (!savedEvent) throw new Error("Failed to save the event");

        return savedEvent.attributes;
    }

    async function getCommonEvents() {
        let query = new Query(CollegeEvent);
        query.equalTo("branch", "all");
        let events = await query.find();
        if (!events) throw new Error("Failed to get events");
        return events.map(event => event.attributes).filter((e => e.datetime > Date.now()));
    }

    async function getBranchEvents() {
        let query = new Query(CollegeEvent);
        query.equalTo("branch", UserManager.getCurrentUser() ? UserManager.getCurrentUser().branch : "all");
        let events = await query.find();
        if (!events) throw new Error("Failed to get events");
        return events.map(event => event.attributes).filter((e => e.datetime > Date.now()));
    }

    return {
        add,
        getCommonEvents,
        getBranchEvents
    };
})();


export const CircularManager = (function () {

    async function add({ name, endDatetime, description }) {
        if (!name || !endDatetime || !description) {
            throw new Error("Please provide all the required details");
        }
        let currentUser = UserManager.getCurrentUser();
        let branch;
        let postedBy;

        if (currentUser.type === User_Types.Faculty) {
            branch = currentUser.branch;
            postedBy = User_Types.Faculty;
        } else if (currentUser.type === User_Types.Admin) {
            branch = "all";
            postedBy = User_Types.Admin
        } else {
            throw new Error("You are not allowed to post a circular!");
        }

        let circular = new Circular();
        let savedCircular = await circular.save({
            name,
            endDatetime,
            description,
            branch,
            postedBy
        });

        if (!savedCircular) throw new Error("Failed to save the event");

        return savedCircular.attributes;
    }

    async function getCommonCirculars() {
        let query = new Query(Circular);
        query.equalTo("branch", "all");
        let circulars = await query.find();
        if (!circulars) throw new Error("Failed to get circulars");
        return circulars.map(circular => circular.attributes).filter((c => c.endDatetime > Date.now()));
    }

    async function getBranchCirculars() {
        let query = new Query(Circular);
        query.equalTo("branch", UserManager.getCurrentUser() ? UserManager.getCurrentUser().branch : "all");
        let circulars = await query.find();
        if (!circulars) throw new Error("Failed to get circulars");
        return circulars.map(circular => circular.attributes).filter((c => c.endDatetime > Date.now()));
    }

    return {
        add,
        getCommonCirculars,
        getBranchCirculars
    };
})();

class FileInfo extends ParseObject {
    constructor() {
        super("FileInfo");
    }
}

ParseObject.registerSubclass("FileInfo", FileInfo);


export const StudyMaterialManager = (function () {

    async function uploadStudyMaterial({ title, fileData, forYear }) {
        if (!title || !fileData || !forYear) {
            throw new Error("Please provide all the file data");
        }
        let file = new ParseFile(title.split(" ").join("_"), fileData);
        let { size } = fileData;
        let currentUser = UserManager.getCurrentUser();
        let branch;
        let postedBy;

        if (currentUser.type === User_Types.Faculty) {
            branch = currentUser.branch;
            postedBy = currentUser.email;
        } else {
            throw new Error("You cannot upload a file");
        }
        let savedFile = await file.save();
        let fileInfo = new FileInfo();


        let savedFileInfo = await fileInfo.save({
            title,
            branch,
            postedBy,
            size,
            file_url: savedFile.url(),
            forYear: Number(forYear)
        });

        if (!savedFileInfo) throw new Error("Failed to upload the file");

        return savedFileInfo.attributes;

    }

    async function getStudyMaterials() {
        let currentUser = UserManager.getCurrentUser();

        if (!currentUser) throw new Error("Try again!");

        if (currentUser.type !== User_Types.Student && currentUser.type !== User_Types.Faculty) {
            throw new Error("Only students and faculty members can view study materials");
        }

        let { branch } = currentUser;

        let query = new Query(FileInfo);
        query.equalTo("branch", branch);
        let filesInfo = await query.find();

        if (!filesInfo) throw new Error("Failed to fetch documents");

        return filesInfo.map(fileInfo => fileInfo.attributes);

    }

    return {
        uploadStudyMaterial,
        getStudyMaterials
    }
})();


class Message extends ParseObject {
    constructor() {
        super("Message");
    }

    setFields(message, branch, academicYear, fromName, fromEmail) {
        if (!message || !branch || !academicYear || !fromName || !fromEmail) {
            throw new Error("Required details not provided! [Message]");
        } else {
            this.set("message", message);
            this.set("branch", branch);
            this.set("academicYear", academicYear);
            this.set("fromName", fromName);
            this.set("fromEmail", fromEmail);
        }
    }
}

ParseObject.registerSubclass("Message", Message);

export const Messenger = (function () {

    let messageSubscription = undefined;

    function postMessage(message, branch, academicYear) {
        academicYear = +academicYear;
        if (!message || !branch || !academicYear) {
            throw new Error("Please provide all the details");
        }
        let currentUser = UserManager.getCurrentUser();
        if (!currentUser) {
            throw new Error("Please login first");
        } else {
            if (currentUser.type === User_Types.Faculty) {
                return _handleFacultyPostMessage(message, branch, academicYear);
            } else {
                return _handleStudentPostMessage(message, branch, academicYear);
            }
        }
    }

    async function _handleFacultyPostMessage(message, givenBranch, academicYear) {
        let { name, email, branch } = UserManager.getCurrentUser();
        if (branch !== givenBranch) {
            throw new Error("You are not allowed to post message in this branch");
        }

        return _saveMessage(message, branch, academicYear, name, email);
    }

    async function _handleStudentPostMessage(message, givenBranch, givenYear) {
        let { name, email, branch, academicYear } = UserManager.getCurrentUser();
        if (givenBranch !== branch || givenYear !== academicYear) {
            throw new Error("You are not allowed to post message here");
        }

        return _saveMessage(message, branch, academicYear, name, email);
    }

    async function _saveMessage(message, branch, academicYear, name, email) {
        let newMessage = new Message();
        newMessage.setFields(message, branch, academicYear, name, email);
        let postedMessage = await newMessage.save();

        return postedMessage.attributes;
    }

    async function getClassroomMessages(branch, academicYear) {
        academicYear = +academicYear;
        let query = new Query(Message);
        query.equalTo("branch", branch);
        query.equalTo("academicYear", academicYear);

        let messages = await query.find();
        return messages.map(message => message.attributes);
    }

    async function subscribeToClassroom(branch, academicYear, onMessageReceived = () => {}) {

        if (!messageSubscription) {
            academicYear = +academicYear;
            let query = new Query(Message);
            query.equalTo("branch", branch);
            query.equalTo("academicYear", academicYear);
            query.notEqualTo("fromEmail", UserManager.getCurrentUser().email);

            messageSubscription = await query.subscribe();
            messageSubscription.on("create", (messageObj) => {
               if(typeof onMessageReceived === "function"){
                   onMessageReceived(messageObj.attributes);
               }
            });

        }
        return messageSubscription;
    }

    async function unsubscribeFromClassroom( ){
        messageSubscription = await messageSubscription.unsubscribe();
    }


    return {
        postMessage,
        getClassroomMessages,
        subscribeToClassroom,
        unsubscribeFromClassroom
    }
})();

window.UserManager = UserManager;
window.EventManager = EventManager;
window.CircularManager = CircularManager;
window.StudyMaterialManager = StudyMaterialManager;
window.Messenger = Messenger;

window.testUserData = {
    name: "Admin",
    email: "admin@ndrk.com",
    gender: "male",
    password: "12345678",
    type: "admin",
    branch: "no"
}