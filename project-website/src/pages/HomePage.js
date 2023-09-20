import './HomePage.css';
import HomePageSection from '../components/HomePageSection.js';
import TeamCardGroup from '../components/TeamCardGroup';
import TimeTrackingTable from '../components/TimeTrackingTable';

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
            <HomePageSection name="Team Members" >
              <TeamCardGroup/>
            </HomePageSection>
            
            {/* Synopsis */}
            <HomePageSection name="Synopsis" content="The goal of this project is to create a ''single pane of glass'' to function as a monitoring system for the multiple cloud platforms used by LenelS2’s Elements, OnGuard Cloud, and Brokerbay programs."/>

            {/* Time Tracking */}
            <HomePageSection name="Time Tracking" content="">
              <TimeTrackingTable/>
            </HomePageSection>

            {/* Future Deliverables */}
            <HomePageSection name="Future Deliverables" content="..."/>
            
        </header>
    </div>
  );
}


export default HomePage;
