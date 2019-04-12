import React, { Component } from "react";
import SectionedPage from "../SectionedPage";
// import { greetUser } from "../../helpers";
import TilesGrid from "../../components/TilesGrid";
import { AdminHomeOptions, AdminHomeRoutes } from "../../staticData";
import QuickSearchForm from "../../components/QuickSearchForm";
import { Route, Switch } from "react-router";
import FourNotFourPage from "../FourNotFourPage";
import AddEventPage from "../AddEventPage";
import AddCircularPage from "../AddCircularPage";
import VerifyAccountsPage from "../VerifyAccountsPage";
import UpdateProfilePage from "../UpdateProfilePage";
import ViewStudentsPage from "../ViewStudentsPage";
import ViewFacultyPage from "../ViewFacultyPage";
import { withChangedTitle, onlyAdmin, withUser } from "../../context";



const AdminMenu = withChangedTitle("Admin Home")(withUser((props) => {
    const adminMenu = (props) => (<TilesGrid tilesInfo={AdminHomeOptions} {...props} />);
    const searchForm = QuickSearchForm;
    return (<SectionedPage
        sectionsMap={[
            {
                name: `Welcome, ${props.user && props.user.name}`,
                component:null
            },
            {
                name: "Admin Menu",
                component: adminMenu

            },
            {
                name: "Quick Find",
                component: searchForm
            }
        ]}
        {...props}
    />);
}));

class AdminHomePage extends Component {

    render() {

        const { match } = this.props;
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={match.path} component={AdminMenu} />
                    <Route path={match.path + AdminHomeRoutes.VERIFY_ACCOUNTS} component={VerifyAccountsPage} />
                    <Route path={match.path + AdminHomeRoutes.VIEW_STUDENTS} component={ViewStudentsPage} />
                    <Route path={match.path + AdminHomeRoutes.VIEW_FACULTY} component={ViewFacultyPage} />
                    <Route path={match.path + AdminHomeRoutes.ADD_EVENT} component={AddEventPage} />
                    <Route path={match.path + AdminHomeRoutes.ADD_CIRCULAR} component={AddCircularPage} />
                    <Route path={match.path + AdminHomeRoutes.UPDATE_PROFILE + "/:email"} component={UpdateProfilePage} />
                    <Route component={FourNotFourPage} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default onlyAdmin(withChangedTitle("Admin Home")(AdminHomePage));