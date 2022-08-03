import { useEffect } from "react";
import { useParams } from "react-router-dom";

// ------------- Components -------------//
import { CarType } from "../../model/carModel";
import { getCarById } from "../../service/egoapi";
import { Header } from "../../components/header/Header";
import { MainDetails } from "../../components/mainDetails/MainDetails";
import { DetailsFeatures } from "../../components/detailsFeatures/DetailsFeatures";
import { Footer } from "../../components/footer/Footer";

// ------------- Custom Hook -------------//
import { useGlobatState } from "../../context/context";

function Details() {
  const { id } = useParams();
  const [state, dispatch] = useGlobatState();

  useEffect(() => {
    (async () => {
      const data: CarType | null = await getCarById(id);
      dispatch({ car: data ?? [] });
    })();
  }, []);

  return (
    <>
      <Header page="details" />
      <MainDetails
        modo="normal"
        carImg={state.car?.photo}
        carName={state.car?.name}
        carTitle={state.car?.title}
        carDescription={state.car?.description}
      />
      <DetailsFeatures
        firstFeature={state.car?.model_features?.[0]}
        secondFeature={state.car?.model_features?.[1]}
      />
      <MainDetails
        modo="highlights"
        carImg={state.car?.model_highlights?.[0]?.image}
        carTitle={state.car?.model_highlights?.[0]?.title}
        carDescription={state.car?.model_highlights?.[0]?.content}
      />
      <MainDetails
        modo="highlights"
        carImg={state.car?.model_highlights?.[1]?.image}
        carTitle={state.car?.model_highlights?.[1]?.title}
        carDescription={state.car?.model_highlights?.[1]?.content}
      />
      <Footer />
    </>
  );
}

export { Details };
