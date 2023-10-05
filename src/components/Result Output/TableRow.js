import styles from "./TableRow.module.css";

export default function TableRow(props) {
    function round(number){
        return (Math.round(number, 1));
    }

  return (
    <tr key={props.year}>
      <td>{2023 + props.year}</td>
      <td>{round(props.savings)}</td>
      <td>{round(props.intrest)}</td>
      <td>{round(props.totalIntrest)}</td>
      <td>{round(props.totalCapital)}</td>
    </tr>
  );
}