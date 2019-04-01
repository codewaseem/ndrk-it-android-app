import slide0 from "../images/0.jpg";
import slide1 from "../images/1.jpg";
import slide2 from "../images/2.jpg";
import slide3 from "../images/3.jpg";
import slide4 from "../images/4.jpg";
import slide5 from "../images/5.jpg";
import slide6 from "../images/6.jpg";
import slide7 from "../images/7.jpg";

import imgAbout from "../images/about.svg";
import imgAdmission from "../images/admission.svg";
import imgDepartment from "../images/department.svg";
import imgFacility from "../images/facility.svg";
import imgEvent from "../images/event.svg";
import imgGallery from "../images/gallery.svg";
import imgMap from "../images/locate.svg";
import imgContact from "../images/contact.svg";
import imgNotification from "../images/notification.svg";
import imgLogin from "../images/login.svg";
import imgSignup from "../images/signup.svg";

export const RoutesURL = {
    HOME: "/",
    STUDENT_SIGNUP: "/signup/student",
    FACULTY_SIGNUP: "/signup/faculty",
    SIGNUP: "/signup",
    LOGIN: "/login",
    PASSWORD_RESET: "/password-reset"
};

export const PARSE_SERVER_URL = "http://localhost:1337/parse"
export const PARSE_APP_ID = "APPLICATION_ID";

export const homePageSliderImagesData = [
    { src: slide0, alt: "Slide 0" },
    { src: slide1, alt: "Slide 1" },
    { src: slide2, alt: "Slide 2" },
    { src: slide3, alt: "Slide 3" },
    { src: slide4, alt: "Slide 4" },
    { src: slide5, alt: "Slide 5" },
    { src: slide6, alt: "Slide 6" },
    { src: slide7, alt: "Slide 7" }
];


export const defaultImageSliderOptions = {
    effect: 'flip',
    init: true,
    loop: true,
    autoplay: true,
};



export const homePageOptions = [
    {
        name: "Admissions",
        imgSrc: imgAdmission,
        url: "/admissions"
    },
    {
        name: "Departments",
        imgSrc: imgDepartment,
        url: "/departments"
    },
    {
        name: "Facilities",
        imgSrc: imgFacility,
        url: "/facilities"
    },
    {
        name: "Events",
        imgSrc: imgEvent,
        url: "/events"
    },
    {
        name: "Gallery",
        imgSrc: imgGallery,
        url: "/gallery"
    },
    {
        name: "Notification",
        imgSrc: imgNotification,
        url: "/notifications"
    },
    {
        name: "About",
        imgSrc: imgAbout,
        url: "/about"
    },
    {
        name: "Locate",
        imgSrc: imgMap,
        url: "/locate"
    },
    {
        name: "Contact",
        imgSrc: imgContact,
        url: "/contact"
    },
    {
        name: "Sign Up",
        imgSrc: imgSignup,
        url: RoutesURL.STUDENT_SIGNUP
    },
    {
        name: "Login",
        imgSrc: imgLogin,
        url: RoutesURL.LOGIN
    }
];