// ------------- Styles -------------//
import "./detailsFeatures.css";

// ------------- InterfaceProps -------------//
interface DetailsFeaturesProps {
  firstFeature: {
    description: string;
    image: string;
    name: string;
  };
  secondFeature: {
    description: string;
    image: string;
    name: string;
  };
}

function DetailsFeatures({
  firstFeature,
  secondFeature,
}: DetailsFeaturesProps) {
  return (
    <div className="detailsfeatures-container">
      <div className="detailsfeatures-content">
        <div className="detailsfeatures-content__img">
          <img src={firstFeature?.image} alt="" />
        </div>
        <div className="detailsfeatures-content__info">
          <h4>{firstFeature?.name}</h4>
          <p>{firstFeature?.description}</p>
        </div>
      </div>
      <div className="detailsfeatures-content">
        <div className="detailsfeatures-content__img">
          <img src={secondFeature?.image} alt="" />
        </div>
        <div className="detailsfeatures-content__info">
          <h4>{secondFeature?.name}</h4>
          <p>{secondFeature?.description}</p>
        </div>
      </div>
    </div>
  );
}

export { DetailsFeatures };
