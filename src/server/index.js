import Parse, { User, Object as ParseObject, Query } from "parse";
import { PARSE_APP_ID, PARSE_SERVER_URL } from "../staticData";
import { isValidEmail, isValidUsn, getBranchCodeFromUSN } from "../helpers";

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

        if (password + "".length < 8) {
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

        if (password + "".length < 8) {
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

    function getAllUsers() {

    }

    return {
        signUp,
        login,
        logout,
        getAllUsers,
        checkLogin
    }
})();

export async function getUserInfoById(userId) {
    let query = new Query(UserInfo);
    const user = await query.get("4pJVN3xedG")
    console.log(user.get("name"));
    return user;
}

export async function findUserByEmail(email, userType = User) {
    let query = new Query(userType);
    query.equalTo("email", email);
    const user = await query.first();
    return user;
}

export async function findFacultyByEmail(email) {
    return findUserByEmail(email, User);
}

export async function findStudentByEmail(email) {
    return findUserByEmail(email, User);
}

export async function getUnverifiedAccounts() {
    let query = new Query(User);
    query.equalTo("verified", false);
    const accounts = await query.find();
    return (accounts && accounts.length) ? accounts : undefined;
}

export async function getAllUsers() {
    let query = new Query(User);
    query.notEqualTo("type", User_Types.Admin);
    const users = await query.find();
    return users;
}

window.UserManager = UserManager;

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