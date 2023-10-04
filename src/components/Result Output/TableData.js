import style from "./TableData.module.css";

export default function TableRow(props) {
  return (
    <tbody className={style.tbody}>
      <tr>
        <td>{2023 + props.year}2023</td>
        <td>{props.savings}5000</td>
        <td>{props.intrest}12</td>
        <td>{props.totalIntrest}2500</td>
        <td>{props.totalCapital}10000</td>
      </tr>
    </tbody>
  );
}
