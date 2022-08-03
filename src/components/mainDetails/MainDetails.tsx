// ------------- Styles -------------//
import "./mainDetails.css";

// ------------- InterfacePros -------------//
interface CarDetailsProps {
  modo: string;
  carImg: string;
  carName?: string;
  carTitle: string;
  carDescription: string | undefined;
}

function MainDetails({
  modo,
  carImg,
  carName,
  carTitle,
  carDescription,
}: CarDetailsProps) {
  const fixedStr = (str: string | undefined) => {
    if (str?.length) {
      const s = str?.split(">");
      const newStr = s[1];
      const finalStr = newStr?.split("<");
      const fixedString = finalStr[0];
      return fixedString;
    }
  };

  const detailsStyles = [
    "maindetails-container",
    "maindetails-content__img",
    "maindetails-content__info",
  ];

  const highlightsStyles = [
    "highlights-container",
    "highlights-content__img",
    "highlights-content__info",
  ];

  const style = modo === "normal" ? detailsStyles : highlightsStyles;

  return (
    <div className={style[0]}>
      <div className={style[1]}>
        <img src={carImg} alt={carName} />
      </div>
      <div className={style[2]}>
        <h4>{carName}</h4>
        <h3>{carTitle}</h3>
        <p>{fixedStr(carDescription)}</p>
      </div>
    </div>
  );
}

export { MainDetails };
