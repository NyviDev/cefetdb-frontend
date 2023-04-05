import React from "react";
import {Route, Routes} from "react-router-dom";

const Paths = () => {
    return (
        <Routes>
            <Route path="/" /> {/* Primeiro Periodo */}
            <Route path="/segundo-periodo" />
            <Route path="/terceiro-periodo" />
            <Route path="/quarto-periodo" />
            <Route path="/quinto-periodo" />
            <Route path="/sexto-periodo" />
            <Route path="/setimo-periodo" />
            <Route path="/oitavo-periodo" />
            <Route path="/optativas" />
            <Route path="/materias" />
            <Route path="/*" /> {/* Nao encontrado */}
        </Routes>
    )
}

export default Paths;