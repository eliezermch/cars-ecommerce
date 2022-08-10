import { Splide, SplideSlide } from "@splidejs/react-splide";

// ------------- Styles -------------//
import "./detailsFeatures.css";
import "@splidejs/react-splide/css";

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
    <Splide
      options={{
        rewind: true,
        fixedWidth: "17rem",
        gap: "1rem",
      }}
      className="detailsfeatures-container"
    >
      <SplideSlide>
        <div className="detailsfeatures-content">
          <div className="detailsfeatures-content__img">
            <img src={firstFeature?.image} alt="" />
          </div>
          <div className="detailsfeatures-content__info">
            <h4>{firstFeature?.name}</h4>
            <p>{firstFeature?.description}</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="detailsfeatures-content">
          <div className="detailsfeatures-content__img">
            <img src={secondFeature?.image} alt="" />
          </div>
          <div className="detailsfeatures-content__info">
            <h4>{secondFeature?.name}</h4>
            <p>{secondFeature?.description}</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="detailsfeatures-content">
          <div className="detailsfeatures-content__img">
            <img src={secondFeature?.image} alt="" />
          </div>
          <div className="detailsfeatures-content__info">
            <h4>{secondFeature?.name}</h4>
            <p>{secondFeature?.description}</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="detailsfeatures-content">
          <div className="detailsfeatures-content__img">
            <img src={firstFeature?.image} alt="" />
          </div>
          <div className="detailsfeatures-content__info">
            <h4>{firstFeature?.name}</h4>
            <p>{firstFeature?.description}</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="detailsfeatures-content">
          <div className="detailsfeatures-content__img">
            <img src={secondFeature?.image} alt="" />
          </div>
          <div className="detailsfeatures-content__info">
            <h4>{secondFeature?.name}</h4>
            <p>{secondFeature?.description}</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="detailsfeatures-content">
          <div className="detailsfeatures-content__img">
            <img src={firstFeature?.image} alt="" />
          </div>
          <div className="detailsfeatures-content__info">
            <h4>{firstFeature?.name}</h4>
            <p>{firstFeature?.description}</p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
}

export { DetailsFeatures };
