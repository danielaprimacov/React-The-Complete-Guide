import React from "react";

import "./ResultsTable.css";
import ResultsTableHead from "./ResultsTableHead/ResultsTableHead";
import ResultsTableBody from "./ResultsTableBody/ResultsTableBody";

const ResultsTable = () => {
  return (
    <table className="result">
      <ResultsTableHead />
      <ResultsTableBody />
    </table>
  );
};

export default ResultsTable;
