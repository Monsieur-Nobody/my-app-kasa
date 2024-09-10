import TitleLocation from "./TitleLocation";
import HostLocation from "./HostLocation";
import Tag from "./Tag";
import Rating from "./Rating";
import Collapse from "./Collapse";
import NotFoundPage from "../pages/NotFoundPage";

const ContentLocation = ({ accommodation }) => {
  if (!accommodation) {
    return <NotFoundPage />;
  }

  return (
    <div className="content-location">
      <div className="first_block_content">
        <div className="name_tags_content">
          <TitleLocation
            title={accommodation.title}
            location={accommodation.location}
          />
          <Tag tags={accommodation.tags} />
        </div>
        <div className="host_rate_content">
          <HostLocation host={accommodation.host} />
          <Rating rating={accommodation.rating} />
        </div>
      </div>

      <div className="second_block_content">
        <Collapse title="Description" content={accommodation.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              
               {accommodation.equipments.map((item,index) =><li>{item}</li>)} 
              
            </ul>
            
          }
        />
      </div>
    </div>
  );
};

export default ContentLocation;
