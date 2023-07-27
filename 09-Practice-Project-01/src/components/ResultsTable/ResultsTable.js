import React from "react";

import "./ResultsTable.css";
import ResultsTableHead from "./ResultsTableHead/ResultsTableHead";
import ResultsTableBody from "./ResultsTableBody/ResultsTableBody";

const ResultsTable = (props) => {
  const data = props.data;
  const initialInvestment = props.initialInvestment;
  
  return (
    <table className="result">
      <ResultsTableHead />
      <ResultsTableBody data={data} initialInvestment={initialInvestment} />
    </table>
  );
};

export default ResultsTable;
