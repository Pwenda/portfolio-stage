import React from "react";
import ReportPage from "./ReportPage";
import qgsSolutionReport from "../data/qgsSolutionReport";

export default function RapportQGS() {
    return <ReportPage report={qgsSolutionReport} />;
}