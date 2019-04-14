
import * as imageStore from "./images";

export { departmentsInfo } from "./departmentsPageInfo";


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
    ADMISSIONS: "/admissions",
    ABOUT: "/about",
    DEPARTMENTS: "/departments",
    FACILITIES: "/facilities",
    GALLERY: "/gallery",
    LOCATE: "/locate",
    CONTACT: "/contact",
    EVENTS: "/common-events",
    CIRCULAR: "/common-circulars"
};

export const AdminHomeRoutes = {
    VERIFY_ACCOUNTS: "/verify-accounts",
    VIEW_STUDENTS: "/view-students",
    VIEW_FACULTY: "/view-faculty",
    ADD_EVENT: "/add-event",
    ADD_CIRCULAR: "/add-circular",
    UPDATE_PROFILE: "/update-profile"
}

export const PARSE_SERVER_URL = "https://ndrk-backend.herokuapp.com/parse"
export const PARSE_APP_ID = "APPLICATION_ID";

export const STUDENT_SIGNUP_URL = PARSE_SERVER_URL + "/student-signup"

export const homePageSliderImagesData = [
    { src: imageStore.slide0, alt: "Slide 0" },
    { src: imageStore.slide1, alt: "Slide 1" },
    { src: imageStore.slide2, alt: "Slide 2" },
    { src: imageStore.slide3, alt: "Slide 3" },
    { src: imageStore.slide4, alt: "Slide 4" },
    { src: imageStore.slide5, alt: "Slide 5" },
    { src: imageStore.slide6, alt: "Slide 6" },
    { src: imageStore.slide7, alt: "Slide 7" }
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
        imgSrc: imageStore.admission,
        url: RoutesURL.ADMISSIONS
    },
    {
        name: "Departments",
        imgSrc: imageStore.department,
        url: RoutesURL.DEPARTMENTS
    },
    {
        name: "Facilities",
        imgSrc: imageStore.facility,
        url: RoutesURL.FACILITIES
    },
    {
        name: "Events",
        imgSrc: imageStore.event,
        url: RoutesURL.EVENTS
    },
    {
        name: "Gallery",
        imgSrc: imageStore.gallery,
        url: RoutesURL.GALLERY
    },
    {
        name: "Notification",
        imgSrc: imageStore.notification,
        url: RoutesURL.CIRCULAR
    },
    {
        name: "About",
        imgSrc: imageStore.about,
        url: RoutesURL.ABOUT
    },
    {
        name: "Locate",
        imgSrc: imageStore.locate,
        url: RoutesURL.LOCATE
    },
    {
        name: "Contact",
        imgSrc: imageStore.contact,
        url: RoutesURL.CONTACT
    }
];

export const IfAdminOptions = [
    {
        name: "Admin Home",
        imgSrc: imageStore.verify,
        url: "/admin"
    }
];

export const IfFacultyOptions = [
    {
        name: "Faculty Home",
        imgSrc: imageStore.faculty,
        url: "/faculty"
    }
];

export const IfStudentOptions = [
    {
        name: "Student Home",
        imgSrc: imageStore.student,
        url: "/student"
    }
]

export const loginOrLogoutOptionsData = {
    loggedIn: [{
        name: "Logout",
        imgSrc: imageStore.logout,
        url: RoutesURL.LOGOUT
    }],
    loggedOut: [
        {
            name: "Sign Up",
            imgSrc: imageStore.signup,
            url: RoutesURL.STUDENT_SIGNUP
        },
        {
            name: "Login",
            imgSrc: imageStore.login,
            url: RoutesURL.LOGIN
        }
    ]
}


export const AdminHomeOptions = [
    {
        name: "Verify Accounts",
        imgSrc: imageStore.verify,
        url: RoutesURL.ADMIN_HOME + AdminHomeRoutes.VERIFY_ACCOUNTS
    },
    {
        name: "View Students",
        imgSrc: imageStore.student,
        url: RoutesURL.ADMIN_HOME + AdminHomeRoutes.VIEW_STUDENTS
    },
    {
        name: "View Faculty",
        imgSrc: imageStore.faculty,
        url: RoutesURL.ADMIN_HOME + AdminHomeRoutes.VIEW_FACULTY
    },
    {
        name: "Add Event",
        imgSrc: imageStore.event,
        url: RoutesURL.ADMIN_HOME + AdminHomeRoutes.ADD_EVENT
    },
    {
        name: "Add Circular",
        imgSrc: imageStore.notification,
        url: RoutesURL.ADMIN_HOME + AdminHomeRoutes.ADD_CIRCULAR
    },
    ...loginOrLogoutOptionsData.loggedIn
];

export const FacultyHomeRoutes = {
    ADD_EVENT: "/add-event",
    ADD_CIRCULAR: "/add-circular",
    ADD_STUDY_MATERIALS: "/add-study-material",
    VIEW_STUDY_MATERIALS: "/view-study-material",
    CHAT: "/chat",
}

export const FacultyHomeOptions = [
    {
        name: "Home",
        imgSrc: imageStore.home,
        url: RoutesURL.HOME
    },
    {
        name: "Add Event",
        imgSrc: imageStore.event,
        url: RoutesURL.FACULTY_HOME + FacultyHomeRoutes.ADD_EVENT
    },
    {
        name: "Add Circular",
        imgSrc: imageStore.notification,
        url: RoutesURL.FACULTY_HOME + FacultyHomeRoutes.ADD_CIRCULAR
    },
    {
        name: "Add Study Materials",
        imgSrc: imageStore.book,
        url: RoutesURL.FACULTY_HOME + FacultyHomeRoutes.ADD_STUDY_MATERIALS
    },
    {
        name: "View Study Materials",
        imgSrc: imageStore.studyMaterial,
        url: RoutesURL.FACULTY_HOME + FacultyHomeRoutes.VIEW_STUDY_MATERIALS
    },
    {
        name: "Chat (Q&A)",
        imgSrc: imageStore.ask,
        url: RoutesURL.FACULTY_HOME + FacultyHomeRoutes.CHAT
    },
    ...loginOrLogoutOptionsData.loggedIn
]


export const StudentHomeRoutes = {
    BRANCH_EVENTS: "/branch-events",
    BRANCH_CIRCULARS: "/branch-circulars",
    VIEW_STUDY_MATERIALS: "/view-study-material",
    CHAT: "/chat",
    EXAMS: "/exams",
    RESULT: "/results",
}

export const StudentHomeOptions = [
    {
        name: "Home",
        imgSrc: imageStore.home,
        url: RoutesURL.HOME
    },
    {
        name: "Exams",
        imgSrc: imageStore.exam,
        url: RoutesURL.STUDENT_HOME + StudentHomeRoutes.EXAMS
    },
    {
        name: "Results",
        imgSrc: imageStore.result,
        url: RoutesURL.STUDENT_HOME + StudentHomeRoutes.RESULT
    },
    {
        name: "View Study Materials",
        imgSrc: imageStore.studyMaterial,
        url: RoutesURL.STUDENT_HOME + StudentHomeRoutes.VIEW_STUDY_MATERIALS
    },
    {
        name: "Branch Events",
        imgSrc: imageStore.event,
        url: RoutesURL.STUDENT_HOME + StudentHomeRoutes.BRANCH_EVENTS
    },
    {
        name: "Branch Circulars",
        imgSrc: imageStore.notification,
        url: RoutesURL.STUDENT_HOME + StudentHomeRoutes.BRANCH_CIRCULARS
    },
    {
        name: "Chat (Q&A)",
        imgSrc: imageStore.ask,
        url: RoutesURL.STUDENT_HOME + StudentHomeRoutes.CHAT
    },
    ...loginOrLogoutOptionsData.loggedIn
];

export const GeneralOptionsForStudents = [
    {
        name: "Common Events",
        imgSrc: imageStore.event,
        url: RoutesURL.EVENTS
    },
    {
        name: "Common Circulars",
        imgSrc: imageStore.notification,
        url: RoutesURL.CIRCULAR
    },
    {
        name: "Facilities",
        imgSrc: imageStore.facility,
        url: RoutesURL.FACILITIES
    },
    {
        name: "Gallery",
        imgSrc: imageStore.gallery,
        url: RoutesURL.GALLERY
    },
    {
        name: "Locate",
        imgSrc: imageStore.locate,
        url: RoutesURL.LOCATE
    },
    {
        name: "Contact",
        imgSrc: imageStore.contact,
        url: RoutesURL.CONTACT
    }
];

export const getClassroomOptions = (branch) => [
    {
        name: "1st Year",
        imgSrc: imageStore.one,
        url: "/faculty" + FacultyHomeRoutes.CHAT + "/" + branch + "/1",
    },
    {
        name: "2nd Year",
        imgSrc: imageStore.two,
        url: "/faculty" + FacultyHomeRoutes.CHAT + "/" + branch + "/2",
    }, {
        name: "3rd Year",
        imgSrc: imageStore.three,
        url: "/faculty" + FacultyHomeRoutes.CHAT + "/" + branch + "/3",
    }, {
        name: "4th Year",
        imgSrc: imageStore.four,
        url: "/faculty" + FacultyHomeRoutes.CHAT + "/" + branch + "/4",
    },

];
