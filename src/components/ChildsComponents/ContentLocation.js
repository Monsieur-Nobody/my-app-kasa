import TitleLocation from "./TitleLocation";
import HostLocation from "./HostLocation";
import Tag from "./Tag";
import Rating from "./Rating";
import Collapse from "./Collapse";
import NotFoundPage from "../PageComponents/NotFoundPage";

const ContentLocation = ({ accommodation }) => {
  if (!accommodation) {
    return <NotFoundPage />;
  }

  return (
    <div className="content-location">
      <div className="first_block_content">
        <TitleLocation
          title={accommodation.title}
          location={accommodation.location}
        />
        <HostLocation host={accommodation.host} />
      </div>
      <div className="second_block_content">
        <Tag tags={accommodation.tags} />
        <Rating rating={accommodation.rating} />
      </div>
      <div className="third_block_content">
        <Collapse title="Description" content={accommodation.description} />
        <Collapse
          title="Équipements"
          content={accommodation.equipments.join(", ")}
        />
      </div>
    </div>
  );
};

export default ContentLocation;
