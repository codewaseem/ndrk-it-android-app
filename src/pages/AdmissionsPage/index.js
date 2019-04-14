import React from "react";
import Page from "../Page";
import { IonCard, IonCardTitle, IonCardContent, IonCardHeader } from "@ionic/react";
import "./style.css";
import { withChangedTitle } from "../../context";


const AdmissionsPage = () => {
    return (
       <Page>
           <IonCard>
                <IonCardHeader color="dark">
                    <IonCardTitle>Joining N.D.R.K</IonCardTitle>
               </IonCardHeader>
               <IonCardContent style={{paddingTop:"10px"}}>
                   <p>
               N.D.R.K I.T’s one-of-a-kind undergraduate courses prepares students to become innovators and leaders. 
               All of our undergraduate degree programs are tech-focused and idea-driven, which means you’ll learn to speak the language of innovation 
               whether you’re studying computer science, electronics and communications, civil engineering, and mechanical engineering.
               </p>
               <br />
               <p>
               Apply for admission at  N.D.R.K I.T. 
               Our application is free, and we’re currently accepting applicants for our upcomming academic year 2019-2020.
               So what are you waiting for? <strong>Apply today</strong>. 
               </p>
               </IonCardContent>
           </IonCard>

           <IonCard>
                <IonCardHeader color="dark"> <IonCardTitle>Courses Offered</IonCardTitle></IonCardHeader>
               <IonCardContent style={{paddingTop:"10px"}}>
                   <ul>
                       <li>Computer Science & Engineering</li>
                       <li>Electronics and Communications</li>
                       <li>Civil Engineering</li>
                       <li>Mechanical Engineering</li>
                   </ul>
               </IonCardContent>
           </IonCard>
           <IonCard>
                <IonCardHeader color="dark"> <IonCardTitle>Eligibility Criteria</IonCardTitle></IonCardHeader>
               <IonCardContent style={{paddingTop:"10px"}}>
                   <p>
                       Students who have completed 2nd P.U.C/Class 12 with English 
                       as one of the language of study and Physics and Mathematics along 
                       with Chemistry/Bio-Technology/Biology/Computer Science/Electronics 
                       as additional subjects of study and who have scored minimum 
                       aggregate of 45% for general-merit students and 40% for reserved categories students.   
                        
                   </p>
               <br />

                   <p>
                       Students who have completed 3-years of diploma in engineering can directly join for
                       2nd year as a lateral entry, who have scored a minimum of 45% (and 40% for reserved categories students) 
                       in the third year of their diploma studies.
                   </p>
               </IonCardContent>
           </IonCard>
           <IonCard>
                <IonCardHeader color="dark"> <IonCardTitle>Tuition and Fees</IonCardTitle></IonCardHeader>
               <IonCardContent style={{paddingTop:"10px"}}>
                   <p>
                   We understand that the price of a private education can be intimidating, so we work with you to help make education affordable. 
                   We offer scholarship opportunities to students. 
                   Get in touch with our admission counselor to discuss your need and determine your best pathway to an affordable education at N.D.R.K I.T!   
                        
                   </p>
               <br />
                   
                   <p>
                        Our fees are as per the government norms with no additional management fees for C.E.T/N.E.E.T students.
                    </p>
               </IonCardContent>
           </IonCard>
           <IonCard>
                <IonCardHeader color="dark"> <IonCardTitle>Need more info? <br /> Get in touch with us!</IonCardTitle></IonCardHeader>
               <IonCardContent style={{paddingTop:"10px"}}>
                   <ul>
                    <li>
                        Email: admissions@ndrk.it
                    </li>
                    <li>
                        Phone: +91-9008341412/+91-9449922651
                    </li>
                    </ul>
               </IonCardContent>
            </IonCard>
       </Page>
            
    )
}

export default withChangedTitle("Admissions")(AdmissionsPage);