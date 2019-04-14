import slide0 from "../images/0.jpg";
import slide1 from "../images/1.jpg";
import slide2 from "../images/2.jpg";
import slide3 from "../images/3.jpg";
import slide4 from "../images/4.jpg";
import slide5 from "../images/5.jpg";
import slide6 from "../images/6.jpg";
import slide7 from "../images/7.jpg";

import one from "../images/one.svg"
import two from "../images/two.svg"
import three from "../images/three.svg"
import four from "../images/four.svg"


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
import imgLogout from "../images/logout.svg";
import imgVerify from "../images/verify.svg";
import imgStudent from "../images/student_signup.svg";
import imgFaculty from "../images/lecturer.svg";
import imgHome from "../images/home.svg";
import imgExam from "../images/exam.svg";
import imgResult from "../images/result.svg";
import imgStudyMaterial from "../images/study_material.svg";
import imgAsk from "../images/ask.svg";
import imgBook from "../images/notebook.svg";
// import imgMyProfile from "../images/myprofile.svg";



export const RoutesURL = {
    HOME: "/",
    STUDENT_SIGNUP: "/signup/student",
    FACULTY_SIGNUP: "/signup/faculty",
    SIGNUP: "/signup",
    LOGIN: "/login",
    FACULTY_HOME: "/faculty",
    STUDENT_HOME: "/student",
    ADMIN_HOME: "/admin",
    PASSWORD_RESET: "/password-reset",
    LOGOUT: "/logout",
    VIEW_EVENTS: "/common-events",
    VIEW_CIRCULARS: "/common-circulars",
    ADMISSIONS: "/admissions",
    ABOUT: "/about",
    DEPARTMENTS: "/departments",
    FACILITIES: "/facilities",
    GALLERY : "/gallery",
    LOCATE:"/locate",
    CONTACT: "/contact",
    EVENTS: "/events",
    CIRCULAR: "/circulars"
};

export const AdminHomeRoutes = {
    VERIFY_ACCOUNTS : "/verify-accounts",
    VIEW_STUDENTS : "/view-students",
    VIEW_FACULTY : "/view-faculty",
    ADD_EVENT: "/add-event",
    ADD_CIRCULAR: "/add-circular",
    UPDATE_PROFILE: "/update-profile"
}

export const PARSE_SERVER_URL = "https://ndrk-backend.herokuapp.com/parse"
export const PARSE_APP_ID = "APPLICATION_ID";

export const STUDENT_SIGNUP_URL = PARSE_SERVER_URL + "/student-signup"

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
        url: RoutesURL.ADMISSIONS
    },
    {
        name: "Departments",
        imgSrc: imgDepartment,
        url: RoutesURL.DEPARTMENTS
    },
    {
        name: "Facilities",
        imgSrc: imgFacility,
        url: RoutesURL.FACILITIES
    },
    {
        name: "Events",
        imgSrc: imgEvent,
        url: RoutesURL.EVENTS
    },
    {
        name: "Gallery",
        imgSrc: imgGallery,
        url: RoutesURL.GALLERY
    },
    {
        name: "Notification",
        imgSrc: imgNotification,
        url: RoutesURL.CIRCULAR
    },
    {
        name: "About",
        imgSrc: imgAbout,
        url: RoutesURL.ABOUT
    },
    {
        name: "Locate",
        imgSrc: imgMap,
        url: RoutesURL.LOCATE
    },
    {
        name: "Contact",
        imgSrc: imgContact,
        url: RoutesURL.CONTACT
    }
];

export const IfAdminOptions = [
    {
        name: "Admin Home",
        imgSrc: imgVerify,
        url: "/admin"
    }
];

export const IfFacultyOptions = [
    {
        name: "Faculty Home",
        imgSrc: imgFaculty,
        url : "/faculty"
    }
];

export const IfStudentOptions = [
    {
        name: "Student Home",
        imgSrc: imgStudent,
        url : "/student"
    }
]

export const loginOrLogoutOptionsData = {
    loggedIn: [{
        name: "Logout",
        imgSrc: imgLogout,
        url: RoutesURL.LOGOUT
    }],
    loggedOut: [
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
    ]
}


export const AdminHomeOptions = [
    {
        name: "Verify Accounts",
        imgSrc : imgVerify,
        url : RoutesURL.ADMIN_HOME + AdminHomeRoutes.VERIFY_ACCOUNTS
    },
    {
        name: "View Students",
        imgSrc: imgStudent,
        url: RoutesURL.ADMIN_HOME + AdminHomeRoutes.VIEW_STUDENTS
    },
    {
        name: "View Faculty",
        imgSrc: imgFaculty,
        url: RoutesURL.ADMIN_HOME + AdminHomeRoutes.VIEW_FACULTY
    },
    {
        name:"Add Event",
        imgSrc: imgEvent,
        url: RoutesURL.ADMIN_HOME + AdminHomeRoutes.ADD_EVENT
    },
    {
        name:"Add Circular",
        imgSrc: imgNotification,
        url:RoutesURL.ADMIN_HOME + AdminHomeRoutes.ADD_CIRCULAR
    },
    ...loginOrLogoutOptionsData.loggedIn
];

export const FacultyHomeRoutes = {
    ADD_EVENT : "/add-event",
    ADD_CIRCULAR: "/add-circular",
    ADD_STUDY_MATERIALS : "/add-study-material",
    VIEW_STUDY_MATERIALS : "/view-study-material",
    CHAT : "/chat",
}

export const FacultyHomeOptions = [
    {
        name: "Home",
        imgSrc : imgHome,
        url : RoutesURL.HOME
    },
    {
        name: "Add Event",
        imgSrc: imgEvent,
        url: RoutesURL.FACULTY_HOME + FacultyHomeRoutes.ADD_EVENT
    },
    {
        name: "Add Circular",
        imgSrc: imgNotification,
        url: RoutesURL.FACULTY_HOME + FacultyHomeRoutes.ADD_CIRCULAR
    },
    {
        name: "Add Study Materials",
        imgSrc: imgBook,
        url: RoutesURL.FACULTY_HOME + FacultyHomeRoutes.ADD_STUDY_MATERIALS
    },
    {
        name : "View Study Materials",
        imgSrc: imgStudyMaterial,
        url : RoutesURL.FACULTY_HOME + FacultyHomeRoutes.VIEW_STUDY_MATERIALS
    },
    {
        name: "Chat (Q&A)",
        imgSrc: imgAsk,
        url: RoutesURL.FACULTY_HOME + FacultyHomeRoutes.CHAT
    },
    ...loginOrLogoutOptionsData.loggedIn
]


export const StudentHomeRoutes = {
    VIEW_EVENTS : "/branch-events",
    VIEW_CIRCULARS: "/branch-circulars",
    VIEW_STUDY_MATERIALS : "/view-study-material",
    CHAT : "/chat",
    EXAMS: "/exams",
    RESULT: "/results",
}

export const StudentHomeOptions = [
    {
        name: "Home",
        imgSrc : imgHome,
        url : RoutesURL.HOME
    },
    {
        name: "Exams",
        imgSrc : imgExam,
        url : RoutesURL.STUDENT_HOME + StudentHomeRoutes.EXAMS
    },
    {
        name: "Results",
        imgSrc : imgResult,
        url : RoutesURL.STUDENT_HOME + StudentHomeRoutes.RESULT
    },
    {
        name: "View Study Materials",
        imgSrc: imgStudyMaterial,
        url: RoutesURL.STUDENT_HOME + StudentHomeRoutes.VIEW_STUDY_MATERIALS
    },
    {
        name: "Branch Events",
        imgSrc: imgEvent,
        url: RoutesURL.STUDENT_HOME + StudentHomeRoutes.VIEW_EVENTS
    },
    {
        name: "Branch Circulars",
        imgSrc: imgNotification,
        url: RoutesURL.STUDENT_HOME + StudentHomeRoutes.VIEW_CIRCULARS
    },
    {
        name: "Chat (Q&A)",
        imgSrc: imgAsk,
        url: RoutesURL.STUDENT_HOME + StudentHomeRoutes.CHAT
    },
    ...loginOrLogoutOptionsData.loggedIn
];

export const GeneralOptionsForStudents = [
    {
        name: "Common Events",
        imgSrc: imgEvent,
        url: RoutesURL.VIEW_EVENTS
    },
    {
        name: "Common Circulars",
        imgSrc: imgNotification,
        url: RoutesURL.VIEW_CIRCULARS
    },
    {
        name: "Facilities",
        imgSrc: imgFacility,
        url: RoutesURL.FACILITIES
    },
    {
        name: "Gallery",
        imgSrc: imgGallery,
        url: RoutesURL.GALLERY
    },
    {
        name: "Locate",
        imgSrc: imgMap,
        url: RoutesURL.LOCATE
    },
    {
        name: "Contact",
        imgSrc: imgContact,
        url: RoutesURL.CONTACT
    }
];

export const getClassroomOptions = (branch) => [
    {
        name: "1st Year",
        imgSrc: one,
        url: "/faculty" + FacultyHomeRoutes.CHAT + "/" + branch + "/1",
    },
    {
        name: "2nd Year",
        imgSrc: two,
        url:  "/faculty" + FacultyHomeRoutes.CHAT + "/" + branch + "/2",
    },{
        name: "3rd Year",
        imgSrc: three,
        url:  "/faculty" + FacultyHomeRoutes.CHAT + "/" + branch + "/3",
    },{
        name: "4th Year",
        imgSrc: four,
        url:  "/faculty" + FacultyHomeRoutes.CHAT + "/" + branch +"/4",
    },

];
