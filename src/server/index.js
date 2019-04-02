import Parse, { User, Object } from "parse";
import { PARSE_APP_ID, PARSE_SERVER_URL } from "../staticData";
import { isValidEmail, isValidUsn, getBranchCodeFromUSN } from "../helpers";

Parse.initialize(PARSE_APP_ID);

Parse.serverURL = PARSE_SERVER_URL;

export const User_Types = {
    Student: "student",
    Faculty: "faculty",
    Admin: "admin"
}

export class Student extends User {
    constructor(name, email, password, usn, year) {
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
        } else {
            throw new Error("Invalid Email/USN.");
        }
    }
}

Object.registerSubclass("Student", Student);

export class Faculty extends User {
    constructor(name, email, password, branch) {
        super("Faculty");
        if (isValidEmail(email)) {
            this.setEmail(email);
            this.setUsername(email);
            this.setPassword(password);
            this.set("name", name);
            this.set("branch", branch);
            this.set("type", User_Types.Faculty);
        } else {
            throw new Error("Invalid Email.");
        }
    }
}

Object.registerSubclass("Faculty", Faculty);

export async function newStudent({ email, password, name, usn, year }) {
    try {
        let newStudent = new Student(name, email, password, usn, year);
        let registeredStudent = await newStudent.signUp();
        return registeredStudent
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

export async function newFaculty({ email, password, name, branch }) {
    try {
        let newFaculty = new Faculty(name, email, password, branch);
        let registeredFaculty = await newFaculty.signUp();
        return registeredFaculty;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}


//REMOVE LATER
window.User = User;
window.newFaculty = newFaculty;