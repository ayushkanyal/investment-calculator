import style from "./Table.module.css";
import TableHeadings from "./TableHeadings";
import TableData from "./TableData";

export default function Table(props) {
  return (
    <table className={style.result}>
      <TableHeadings />
      <TableData calculation={props.data} contribution={props.investment}/>
    </table>
  );
}
