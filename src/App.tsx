import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Details } from "./pages/details/Details";
import { Home } from "./pages/home/Home";
import { NotFound } from "./pages/notFound/NotFound";
import { GlobalStateProvider } from "./context/context";

function App() {
  return (
    <React.Fragment>
      <GlobalStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalStateProvider>
    </React.Fragment>
  );
}

export default App;
