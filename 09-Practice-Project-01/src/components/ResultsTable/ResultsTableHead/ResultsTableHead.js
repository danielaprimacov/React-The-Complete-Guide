import React from "react";

import "./ResultsTableHead.css";

const ResultsTableHead = () => {
  return (
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
  );
};

export default ResultsTableHead;
