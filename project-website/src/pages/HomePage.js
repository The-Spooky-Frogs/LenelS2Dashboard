import './HomePage.css';
import HomePageSection from '../components/HomePageSection.js';

function HomePage() {
  return (
    <div className="HomePage">
        <header className="HomePage-header">
            {/* Over view */}
            <HomePageSection name="Team" content="Spooky Frogs"/>
            <HomePageSection name="Project" content="LenelS2 - Multi-Cloud Monitoring Dashboard"/>
            <HomePageSection name="Sponsor" content="LenelS2"/>
            <HomePageSection name="Coach" content="Warren Tessier"/>

            {/* Team Members */}
            <HomePageSection name="Team Members" content="Andreas Leonard-Calcano --- Tech Lead, DevOps, System Architect"/>
            <HomePageSection name="" content="Dominique Smith-Rodrique --- Design Specialist (Ui/UX)"/>
            <HomePageSection name="" content="Ethan Hower --- Documentation Master"/>
            <HomePageSection name="" content="Peter Cesmegi --- Frontend Lead, Database Master"/>
            <HomePageSection name="" content="Skyler Herman --- Sponsor Communication Lead, Scribe, Scrum Master/Project Manager"/>
            
            {/* Synopsis */}
            <HomePageSection name="Synopsis" content="The goal of this project is to create a ''single pane of glass'' to function as a monitoring system for the multiple cloud platforms used by LenelS2’s Elements, OnGuard Cloud, and Brokerbay programs."/>

            {/* Time Tracking */}
            <HomePageSection name="Time Tracking" content=""/>
            <img filepath="week3/PeterCesmegi-Week-Time.pdf" alt="Week Time Tracking (Peter Cesmegi)" />

            {/* Future Deliverables */}
            <HomePageSection name="Future Deliverables" content="..."/>
            

        </header>
    </div>
  );
}


export default HomePage;
