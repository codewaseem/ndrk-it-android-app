const usnRegex = /[1-4]YG[0-9]{2}(CS|EC|CV|ME)[0-9]{3}/i;
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

export const getBranchCodeFromUSN = (usn) => {
    let result = usnRegex.exec(usn);
    if (result && result[1]) {
        return result[1].toLowerCase();
    }
}