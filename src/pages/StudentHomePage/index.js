import React, {  Component } from "react";
import SectionedPage from "../SectionedPage";
import TilesGrid from "../../components/TilesGrid";
import { StudentHomeOptions, StudentHomeRoutes, GeneralOptionsForStudents } from "../../staticData";
import { Route, Switch, withRouter } from "react-router";
import FourNotFourPage from "../FourNotFourPage";
import { withChangedTitle, withUser, onlyStudent, withChat } from "../../context";
import ViewStudyMaterialsPage from "../ViewStudyMaterialsPage";
import ExamPage from "../ExamPage";
import ResultPage from "../ResultPage";
import ViewEventsPage from "../ViewEventsPage";
import ViewCircularsPage from "../ViewCircularsPage";
import ChatPage from "../ChatPage";
import ChatPageSelector from "../ChatPageSelector";
import { User_Types } from "../../server";



const StudentMenu =  withChangedTitle("Student Home")(withUser((props) => {
    const menu = (props) => (<TilesGrid tilesInfo={StudentHomeOptions} {...props} />);
    const generalMenu = (props) => (<TilesGrid tilesInfo={GeneralOptionsForStudents} {...props} />);
    return (<SectionedPage
        sectionsMap={[
            {
                name: `Welcome, ${props.user && props.user.name}`,
                component: null
            },
            {
                name: "Student's Menu",
                component: menu

            },
            {
                name: "General Info",
                component: generalMenu
            }
        ]}
        {...props}
    />);
}));

class StudentHomePage extends Component {

   
    componentDidMount() {
        console.log(this.props);
        let user = this.props.user;
        if (user && user.type === User_Types.Student) {
            let { branch, academicYear } = user;
            this.props.getClassroomMessages({ branch, academicYear });
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    
    
    render() {

        const { match } = this.props;
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={match.path} component={StudentMenu} />
                    <Route path={match.path + StudentHomeRoutes.EXAMS} component={ExamPage} />
                    <Route path={match.path + StudentHomeRoutes.RESULT} component={ResultPage} />

                    <Route path={match.path + StudentHomeRoutes.VIEW_EVENTS} component={ViewEventsPage} />
                    <Route path={match.path + StudentHomeRoutes.VIEW_CIRCULARS} component={ViewCircularsPage} />
                    <Route path={match.path + StudentHomeRoutes.VIEW_STUDY_MATERIALS} component={ViewStudyMaterialsPage} />
                    <Route exact path={match.path + StudentHomeRoutes.CHAT} component={ChatPageSelector} />
                    <Route  path={match.path + StudentHomeRoutes.CHAT + "/:branch/:academicYear"} component={ChatPage} />
                    <Route component={FourNotFourPage} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default withChangedTitle("Student Home")(withRouter(withChat(onlyStudent((StudentHomePage)))));