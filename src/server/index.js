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

    function login() {

    }

    function logout() {

    }

    function getAllUsers() {

    }

    return {
        signUp,
        login,
        logout,
        getAllUsers
    }
})();

export async function getUserInfoById(userId) {
    let query = new Query(UserInfo);
    const user = await query.get("4pJVN3xedG")
    console.log(user.get("name"));
    return user ? user.attributes : undefined;
}

export class Student extends User {
    constructor(email, password) {
        super("Student");
        if (isValidEmail(email)) {
            this.setEmail(email);
            this.setUsername(email);
            this.setPassword(password);
            // this.set("name", name);
            // this.set("usn", usn.toLowerCase());
            // this.set("year", Number(year));
            // this.set("branch", getBranchCodeFromUSN(usn));
            // this.set("type", User_Types.Student);
            // this.set("gender", gender);
            // this.set("verified", false);
            // this.set("graduated", false);

        } else {
            throw new Error("Invalid Email/USN.");
        }
    }
}

ParseObject.registerSubclass("Student", Student);

export class Faculty extends User {
    constructor(name, email, password, branch, gender) {
        super("Faculty");
        if (isValidEmail(email)) {
            this.setEmail(email);
            this.setUsername(email);
            this.setPassword(password);
            this.set("name", name);
            this.set("branch", branch);
            this.set("gender", gender);
            this.set("type", User_Types.Faculty);
            this.set("verified", false);
        } else {
            throw new Error("Invalid Email.");
        }
    }
}

ParseObject.registerSubclass("Faculty", Faculty);

export async function newStudent({ email, password, name, usn, year, gender }) {
    try {
        let newStudent = new Student(email, password);
        let registeredStudent = await newStudent.signUp();
        let studentInfo = new UserInfo({
            name,
            email,
            usn,
            year,
            gender,
            userID: registeredStudent.id,
            graduated: false,
            verified: false
        });
        let savedInfo = await studentInfo.save();
        return {
            attributes: {
                ...registeredStudent.attributes,
                ...savedInfo.attributes
            }
        };
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export async function newFaculty({ email, password, name, branch, gender }) {
    try {
        let newFaculty = new Faculty(name, email, password, branch, gender);
        let registeredFaculty = await newFaculty.signUp();
        return registeredFaculty;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}


export async function findUserByEmail(email, userType = User) {
    let query = new Query(userType);
    query.equalTo("email", email);
    const user = await query.first();
    return user ? user.attributes : undefined;
}

export async function findFacultyByEmail(email) {
    return findUserByEmail(email, Student);
}

export async function findStudentByEmail(email) {
    return findUserByEmail(email, Faculty);
}

export async function getUnverifiedAccounts() {
    let query = new Query(User);
    query.equalTo("verified", false);
    const accounts = await query.find();
    return (accounts && accounts.length) ? accounts.map(acc => acc.attributes) : undefined;
}

export async function getAllUsers() {
    let query = new Query(User);
    query.notEqualTo("type", User_Types.Admin);
    const users = await query.find();
    return users;
}


//REMOVE LATER
// window.newStudent = newStudent;
// window.UserInfo = UserInfo;
// window.getUserInfoById = getUserInfoById;
// window.User = User;
// window.findFacultyByEmail = findFacultyByEmail;
// window.findStudentByEmail = findStudentByEmail;
// window.findUserByEmail = findUserByEmail;
// window.getAllUsers = getAllUsers;

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