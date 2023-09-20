import './HomePage.css';
import HomePageSection from '../components/HomePageSection.js';

function HomePage() {
  return (
    <div className="HomePage">
        <header className="HomePage-header">
            <HomePageSection name="Team" content=""/>
            <HomePageSection name="Project" content="..."/>
            <HomePageSection name="Sponsor" content="..."/>
            <HomePageSection name="Coach" content="..."/>
            <HomePageSection name="Team Members" content="..."/>
            <HomePageSection name="Synopsis" content="..."/>
        </header>
    </div>
  );
}


export default HomePage;
