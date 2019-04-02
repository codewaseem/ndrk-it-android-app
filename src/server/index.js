import Parse, { User, Object } from "parse";
import { PARSE_APP_ID, PARSE_SERVER_URL } from "../staticData";
import { isValidEmail, isValidUsn, getBranchCodeFromUSN } from "../helpers";

Parse.initialize(PARSE_APP_ID);

Parse.serverURL = PARSE_SERVER_URL;

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
            this.set("type", "student");
        } else {
            throw new Error("Invalid Email/USN.");
        }
    }
}

Object.registerSubclass("Student", Student);

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

window.User = User;