import React from "react";
import Page from "../Page";
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle } from "@ionic/react";
import { slide0 } from "../../staticData";
import { withChangedTitle } from "../../context";

const ContactPage = () => {
    return (
        <Page>
            <IonCard>
                <img src={slide0} alt="College" />
                <IonCardHeader>
                    <IonCardTitle>
                        Address
                    </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    KIADB, Thimmanahally Industrial Area, Kandali, NH - 75, Hassan, Karnataka 573217
                </IonCardContent>
                <IonCardHeader>
                    <IonCardTitle>
                        General Contact
                    </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <ul style={{listStyle:"none", padding:"0px"}}>
                    <li>Landline : 08172-279370, 08172-250750</li>
                    <li>Mobile   : 9449922651/9481450750</li>
                    <li>Email    : principal@ndrkit.ac.in</li>
                    <li>Fax      : 08172-279371</li>
                 </ul>
                </IonCardContent>
            </IonCard>
        </Page>
    );
}

export default withChangedTitle("Contact")(ContactPage);