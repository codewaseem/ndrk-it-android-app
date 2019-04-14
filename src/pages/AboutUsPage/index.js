import React from "react";
import Page from "../Page";
import { IonCard, IonCardHeader, IonCardContent, IonText, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import {  chairperson, mgv, founders1 } from "../../staticData";
import { withChangedTitle } from "../../context";

const AboutUsPage = () => {
    return (
        <Page>
            <IonCard>
                <img src={founders1} alt="Founder" />
                <IonCardHeader>
                    <IonCardTitle>
                        Introduction
                    </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonText>

                            N.D.R.K Institute of Technology, Hassan was established in the year 2009 under the YERT, Hassan, a sister concern of BCKES. BCKES was established during 1961 by visionaries late Smt. NarayaniKarigowda and late Sri. Karigowda. BCKES along with YERT is running many numbers of high schools, Para medical courses, science, commerce, arts and degree colleges, a hospital by name NDRK hospital and NDRK Institute of technology. The college is housed in a sprawling campus of 12 acres. The college is about 8 km from the KSRTC bus stand towards sakaleshpura and is located in NH-75, BM Road, Kandali, Hassan.

                        <br />
                        NDRKIT is affiliated to VTU, Recognized by AICTE, Approved by Government of Karnataka.
                    </IonText>
                </IonCardContent>
                <IonCardContent>
                    <IonText>
                    NDRKIT is being successfully running under the guidance of Technical Director Dr. M.G Venkateshmurthy, who is in the field of engineering, technical education for more than 47 years and Principal Dr. ThammaiahGowda, who is in the field of technical education for more than 30 years.
                    </IonText>
                </IonCardContent>
            </IonCard>

            <IonCard>
                <img src={chairperson} alt="Chairperson" />
                <IonCardHeader>
                    <IonCardTitle>
                    Smt. Manjula Prasad
                    </IonCardTitle>
                    <IonCardSubtitle>
                    Chairperson
                    </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonText>
                    The institution is running successfully by the inspiring leadership of Smt. Manjula Prasad as the chairperson and she is being ably supported by Sri. Vijaykumar K P as secretary of the institution.
                    </IonText>
                </IonCardContent>
            </IonCard>

            <IonCard>
                <img src={mgv} alt="Director" />
                <IonCardHeader>
                    <IonCardTitle>
                    Dr. M.G Venkateshmurthy
                    </IonCardTitle>
                    <IonCardSubtitle>
                    Professor/Director (Technical)
                    </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                    <IonText>
                    He has served in the field of technical education for nearly 5 decades. His field of specialization is computer science. He is the immediate past principal of Malnad College of Engineering, Hassan (Karnataka). He has been the Dean, Member executive committee and member Academic council of the VTU, the lone technological university in Karnataka. Also he has been the Dean as well as member Faculty of Engineering, University of Mysore. He has guided many research students leading to their doctoral and Postgraduate degrees. He has published two text books in the field of computer science apart from publishing many research papers in national/ International Journals.
                    </IonText>
                </IonCardContent>
            </IonCard>
        </Page>
    );
}

export default withChangedTitle("About Us")(AboutUsPage);