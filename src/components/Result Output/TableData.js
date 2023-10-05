import style from "./TableData.module.css";
import TableRow from "./TableRow";

export default function TableData(props) {
  const list = props.calculation;
  const investment = +props.contribution;
  return (
    <tbody className={style.tbody}>
      {list.map((entry) => (
        <TableRow
          key={list.indexOf(entry)}
          year={entry.year}
          savings={entry.savingsEndOfYear}
          intrest={entry.yearlyInterest}
          totalIntrest={
            entry.savingsEndOfYear -
            investment -
            (entry.yearlyContribution * entry.year)
          }
          totalCapital={
            investment + (entry.yearlyContribution * entry.year)
          }
        />
      ))}
    </tbody>
  );
}
