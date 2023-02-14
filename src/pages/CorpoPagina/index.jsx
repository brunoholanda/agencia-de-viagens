import Banner from "components/Banner";
import { Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";

export default function CorpoPagina() {
    return (
        <main>
            <Cabecalho />
            <Banner />
            <Outlet />
        </main>
    )
}