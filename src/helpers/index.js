import { User_Types } from "../server";
import { RoutesURL } from "../staticData";

const usnRegex = /^[1-4]YG[0-9]{2}(CS|EC|CV|ME)[0-9]{3}$/i;
// eslint-disable-next-line
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const vibrate = (ms = 50) => {
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(ms);
    }
}

export const isValidUsn = (usn) => {
    return usnRegex.test(usn);
}

export const isValidEmail = (email) => {
    return emailRegex.test(email);
}

export const isValidBranch = (branch) => {
    return (/(cs|ec|cv|me)/i).test(branch);
}

export const getBranchCodeFromUSN = (usn) => {
    let result = usnRegex.exec(usn);
    if (result && result[1]) {
        return result[1].toLowerCase();
    }
}

export const greetUser = (user) => {
    let { name, type } = user;
    return `Hello, ${name} ${type === User_Types.Student ? "" : "Sir"}`;
}

export const getUserHomeUrl = (user) => {
    if (user)
        switch (user.type) {
            case User_Types.Student: return RoutesURL.STUDENT_HOME;
            case User_Types.Faculty: return RoutesURL.FACULTY_HOME;
            case User_Types.Admin: return RoutesURL.ADMIN_HOME;
            default: return RoutesURL.HOME;
        }
    else return RoutesURL.HOME;
}