import ScrollToTop from "components/ScrollToTop";
import CorpoPagina from "pages/CorpoPagina";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
        <ScrollToTop />
            <Routes>
                <Route path="/" element={<CorpoPagina />}>
                    <Route index element={<Inicio />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;