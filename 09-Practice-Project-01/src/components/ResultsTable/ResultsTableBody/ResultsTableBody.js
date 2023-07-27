import React from "react";

import "./ResultsTableBody.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const ResultsTableBody = (props) => {
  return (
    <tbody>
      {props.data.map((yearData) => (
        <tr key={yearData.year}>
          <td>{yearData.year}</td>
          <td>{formatter.format(yearData.savingsEndOfYear)}</td>
          <td>{formatter.format(yearData.yearlyInterest)}</td>
          <td>
            {formatter.format(
              yearData.savingsEndOfYear -
                props.initialInvestment -
                yearData.yearlyContribution * yearData.year
            )}
          </td>
          <td>
            {formatter.format(
              props.initialInvestment +
                yearData.yearlyContribution * yearData.year
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ResultsTableBody;
