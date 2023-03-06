import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NewsLetter from "./Components/Newsletter";
import Sobre from "./Pages/Sobre";
import Contato from "./Pages/Contato";
import Entrega from "./Pages/Entrega";
import TrocaDevolucao from "./Pages/TrocaDevolucao";
import FormaDePagamento from "./Pages/FormaDePagamento";
import SegurancaPrivacidade from "./Pages/SegurancaPrivacidade";

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/sobre" />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/formaDePagamento" element={<FormaDePagamento />} />
        <Route
          path="/segurancaPrivacidade"
          element={<SegurancaPrivacidade />}
        />
        <Route path="/entrega" element={<Entrega />} />
        <Route path="/trocaDevolucao" element={<TrocaDevolucao />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </>
  );
}
