import './HomePageSection.css';

function HomePageSection(props) {
  return (
    <div className="HomePageSection">
        <div className="Section">
            <p className="Section-Header"> {props.name} </p>  
            <p className="Section-Content"> {props.content} </p>      
        </div>  
    </div>
    
  );
}


export default HomePageSection;
