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



const AdminMenu = (props) => {
    const adminMenu = (props) => (<TilesGrid tilesInfo={AdminHomeOptions} {...props} />);
    const searchForm = QuickSearchForm;
    return (<SectionedPage
        sectionsMap={[
            {
                name: "Welcome Mr. Waseem Ahmed",
                component: null
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
}

class AdminHomePage extends Component {

    render() {

        const { match } = this.props;
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={match.path} component={AdminMenu} />
                    <Route path={match.path + AdminHomeRoutes.VERIFY_ACCOUNTS} component={VerifyAccountsPage} />
                    <Route path={match.path + AdminHomeRoutes.VIEW_STUDENTS} component={() => { }} />
                    <Route path={match.path + AdminHomeRoutes.VIEW_FACULTY} component={() => { }} />
                    <Route path={match.path + AdminHomeRoutes.ADD_EVENT} component={AddEventPage} />
                    <Route path={match.path + AdminHomeRoutes.ADD_CIRCULAR} component={AddCircularPage} />
                    <Route path={match.path + AdminHomeRoutes.UPDATE_PROFILE+"/:email"} component={UpdateProfilePage} /> 
                    <Route component={FourNotFourPage} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default AdminHomePage;