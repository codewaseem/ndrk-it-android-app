import React, { Component } from "react";
import SectionedPage from "../SectionedPage";
import TilesGrid from "../../components/TilesGrid";
import { StudentHomeOptions, StudentHomeRoutes, GeneralOptionsForStudents } from "../../staticData";
import { Route, Switch } from "react-router";
import FourNotFourPage from "../FourNotFourPage";
import { withChangedTitle, withUser } from "../../context";
import ViewStudyMaterialsPage from "../ViewStudyMaterialsPage";
import ExamPage from "../ExamPage";
import ResultPage from "../ResultPage";



const StudentMenu = withUser((props) => {
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
});

class StudentHomePage extends Component {

    render() {

        const { match } = this.props;
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={match.path} component={StudentMenu} />
                    <Route path={match.path + StudentHomeRoutes.EXAMS} component={ExamPage} />
                    <Route path={match.path + StudentHomeRoutes.RESULT} component={ResultPage} />

                    {/* <Route path={match.path + StudentHomeRoutes.VIEW_EVENT} component={() => {}} /> */}
                    {/* <Route path={match.path + StudentHomeRoutes.VIEW_CIRCULAR} component={() => {}} /> */}
                    <Route path={match.path + StudentHomeRoutes.VIEW_STUDY_MATERIALS} component={ViewStudyMaterialsPage} />
                    <Route component={FourNotFourPage} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default withChangedTitle("Student Home")(StudentHomePage);