import logo from "../assets/investment-calculator-logo.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className= {styles["header"]}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
