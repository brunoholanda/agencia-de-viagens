import Banner from "components/Banner";
import Contato from "components/Contato";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";

export default function CorpoPagina() {
    return (
        <main>
            <Cabecalho />
            <Banner />
            <Outlet />
            <Contato />
            <Rodape />
        </main>
    )
}