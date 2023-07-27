import React from "react";

import classes from "./ResultsTableHead.module.css";

const ResultsTableHead = () => {
  return (
    <thead className={classes.table_head}>
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
