// ------------- Components -------------//
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Main } from "../../components/main/Main";

function Home() {
  return (
    <>
      <Header page="home" />
      <Main />
      <Footer />
    </>
  );
}

export { Home };
