import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Input/Form";
import Table from "./components/Result Output/Table";

function App() {
  const [input, setInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [returns, setReturns] = useState([]);

  function fetchSubmit(value) {
    console.log(value["current-savings"]);
    setInput(value["current-savings"]);
    setIsSubmitted(true);
    setReturns(calculateHandler(value));
  }

  function calculateHandler(userInput) {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }

    // do something with yearlyData ...
    return yearlyData;
  }

  return (
    <div>
      <Header />
      <Form onCalculate={fetchSubmit} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {isSubmitted ? (
        <Table data={returns} investment={input} />
      ) : ("")}
    </div>
  );
}

export default App;
