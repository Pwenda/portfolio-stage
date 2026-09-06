import React from "react";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import RapportQGS from "./components/RapportQGS";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/rapport-qgs-solution" element={<RapportQGS />} />
        </Routes>
    );
}