import React, { Component } from "react";
import SectionedPage from "../SectionedPage";
// import { greetUser } from "../../helpers";
import TilesGrid from "../../components/TilesGrid";
import { AdminHomeOptions } from "../../staticData";
import { QuickSearchForm } from "../../components/QuickSearchForm";

class AdminHomePage extends Component {

    render() {
        const adminMenu = (props) => (<TilesGrid tilesInfo={AdminHomeOptions} {...props} />);
        const searchForm = QuickSearchForm;
        return (
            <SectionedPage
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
            />
        );
    }
}

export default AdminHomePage;