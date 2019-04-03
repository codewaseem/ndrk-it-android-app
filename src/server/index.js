import Parse, { User, Object, Query } from "parse";
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
    Male: "male",
    Female: "female"
}

export class Student extends User {
    constructor(name, email, password, usn, year, gender) {
        console.log(email, usn);
        super("Student");
        if (isValidEmail(email) && isValidUsn(usn)) {
            this.setEmail(email);
            this.setUsername(email);
            this.setPassword(password);
            this.set("name", name);
            this.set("usn", usn.toLowerCase());
            this.set("year", Number(year));
            this.set("branch", getBranchCodeFromUSN(usn));
            this.set("type", User_Types.Student);
            this.set("gender", gender);
            this.set("verified", true);
            this.set("graduated", false);
        } else {
            throw new Error("Invalid Email/USN.");
        }
    }
}

Object.registerSubclass("Student", Student);

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
            this.set("verified", true);
        } else {
            throw new Error("Invalid Email.");
        }
    }
}

Object.registerSubclass("Faculty", Faculty);

export async function newStudent({ email, password, name, usn, year, gender }) {
    try {
        let newStudent = new Student(name, email, password, usn, year, gender);
        let registeredStudent = await newStudent.signUp();
        return registeredStudent
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

export async function getAllUsers() {
    let query = new Query(User);
    query.notEqualTo("type", User_Types.Admin);
    const users = await query.find();
    return users;
}


//REMOVE LATER
// window.User = User;
// window.findFacultyByEmail = findFacultyByEmail;
// window.findStudentByEmail = findStudentByEmail;
// window.findUserByEmail = findUserByEmail;
// window.getAllUsers = getAllUsers;
