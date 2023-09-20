import './HomePage.css';
import HomePageSection from '../components/HomePageSection.js';
import TeamCardGroup from '../components/TeamCardGroup';

function HomePage() {
  return (
    <div className="HomePage">
        <header className="HomePage-header">
            <HomePageSection name="Team" content="Spooky Frogs"/>
            <HomePageSection name="Project" content="Multi-Cloud Monitoring Dashboard"/>
            <HomePageSection name="Sponsor" content="LenelS2"/>
            <HomePageSection name="Coach" content="..."/>
            <HomePageSection name="Team Members" >
              <TeamCardGroup/>
            </HomePageSection>
            <HomePageSection name="Synopsis" content="..."/>
        </header>
    </div>
  );
}


export default HomePage;
