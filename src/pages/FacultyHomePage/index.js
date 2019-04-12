import React, { Component } from "react";
import SectionedPage from "../SectionedPage";
// import { greetUser } from "../../helpers";
import TilesGrid from "../../components/TilesGrid";
import { FacultyHomeOptions, FacultyHomeRoutes } from "../../staticData";
import { Route, Switch } from "react-router";
import FourNotFourPage from "../FourNotFourPage";
import AddEventPage from "../AddEventPage";
import AddCircularPage from "../AddCircularPage";
import { withChangedTitle, withUser, onlyFaculty } from "../../context";
import AddStudyMaterialPage from "../AddStudyMaterialPage";
import ViewStudyMaterialsPage from "../ViewStudyMaterialsPage";
import ChatPage from "../ChatPage";



const FacultyMenu = withChangedTitle("Faculty Home")(withUser((props) => {
    const adminMenu = (props) => (<TilesGrid tilesInfo={FacultyHomeOptions} {...props} />);

    return (<SectionedPage
        sectionsMap={[
            {
                name: `Welcome, ${props.user && props.user.name}`,
                component: null
            },
            {
                name: "Faculty Menu",
                component: adminMenu

            }
        ]}
        {...props}
    />);
}));

class FacultyHomePage extends Component {

    render() {

        const { match } = this.props;
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={match.path} component={FacultyMenu} />
                    <Route path={match.path + FacultyHomeRoutes.ADD_EVENT} component={AddEventPage} />
                    <Route path={match.path + FacultyHomeRoutes.ADD_CIRCULAR} component={AddCircularPage} />
                    <Route path={match.path + FacultyHomeRoutes.ADD_STUDY_MATERIALS} component={AddStudyMaterialPage} />
                    <Route path={match.path + FacultyHomeRoutes.VIEW_STUDY_MATERIALS} component={ViewStudyMaterialsPage} />
                    <Route path={match.path + FacultyHomeRoutes.CHAT} component={ChatPage} />
                    <Route component={FourNotFourPage} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default onlyFaculty(withChangedTitle("Faculty Home")(FacultyHomePage));