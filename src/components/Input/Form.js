import { useState } from "react";
import style from "./Form.module.css";
import NumberInput from "./NumberInput";

export default function Form(props) {
  const [inputs, setInputs] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  });

  function handleChange(enteredInput) {
    const name = enteredInput.id;
    const value = enteredInput.value;
    setInputs((prevValue) => ({ ...prevValue, [name]: value }));
    console.log(inputs);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onCalculate(inputs);
  }

  function handleReset() {
    setInputs({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      'duration': "",
    });
    console.log(inputs);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit} onReset={handleReset}>
      <div className={style["input-group"]}>
        <NumberInput
          id="current-savings"
          text="Current Savings ($)"
          onChange={handleChange}
          value={inputs["current-savings"]}
        />
        <NumberInput
          id="yearly-contribution"
          text="Yearly Savings ($)"
          onChange={handleChange}
          value={inputs["yearly-contribution"]}
        />
      </div>
      <div className={style["input-group"]}>
        <NumberInput
          id="expected-return"
          text="Expected Interest (%, per year)"
          onChange={handleChange}
          value={inputs["expected-return"]}
        />
        <NumberInput
          id="duration"
          text="Investment Duration (years)"
          onChange={handleChange}
          value={inputs["duration"]}
        />
      </div>
      <p className={style.actions}>
        <button type="reset" className={style.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={style.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
