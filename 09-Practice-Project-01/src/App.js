import React, {useState} from "react";

import Header from "./components/Header/Header";
import UserInput from "./components/UseInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";

function App() {
  const [results, setResults] = useState(null);
  
  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"]; 
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
    setResults(yearlyData);
  };

  return (
    <div>
     <Header />
      <UserInput onCalculate={calculateHandler} />
      <ResultsTable />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
