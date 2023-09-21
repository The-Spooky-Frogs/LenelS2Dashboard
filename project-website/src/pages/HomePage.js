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
            <HomePageSection name="Synopsis" content="The goal of this project is to create a ''single pane of glass'' dashboard. It will interface with the multiple cloud platforms used by LenelS2’s Elements, OnGuard Cloud, and Brokerbay programs. It will serve as a tool with an intuitive UI that is easy to maintain and easy to understand. This dashboard will be used by digital teams, so it will help provide insight into information. In the web application, there will be multiple different pages for different types of analytics such as performance data. There will be charts that show trends and information as well."/>

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
