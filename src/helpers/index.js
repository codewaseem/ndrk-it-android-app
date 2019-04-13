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

export const getPostfixedYear = (year) => {
    let postFix = "";
    switch (Number(year)) {
        case 1: postFix = "st"; break;
        case 2: postFix = "nd"; break;
        case 3: postFix = "rd"; break;
        case 4: postFix = "th"; break;
        default: break;
    }
    return `${year}${postFix}`;
}

class Sound {

    constructor(context) {
        this.context = context;
    }

    setup() {
        this.oscillator = this.context.createOscillator();
        this.gainNode = this.context.createGain();

        this.oscillator.connect(this.gainNode);
        this.gainNode.connect(this.context.destination);
        this.oscillator.type = 'sine';
    }

    play(value) {
        this.setup();

        this.oscillator.frequency.value = value;
        this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
        this.gainNode.gain.linearRampToValueAtTime(1, this.context.currentTime + 0.01);

        this.oscillator.start(this.context.currentTime);
        this.stop(this.context.currentTime);
    }

    stop() {
        this.gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + 1);
        this.oscillator.stop(this.context.currentTime + 1);
    }

}


export function playSound(frequency = 786) {
    let context = new (window.AudioContext || window.webkitAudioContext)();
    let sound = new Sound(context);
    sound.play(frequency);
    sound.stop();
}

window.playSound = playSound;
