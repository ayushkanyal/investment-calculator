import style from "./TableHeadings.module.css";

export default function TableHeadings() {
  return (
    <thead className={style.thead}>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
  );
}
