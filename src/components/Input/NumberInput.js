import style from "./NumberInput.module.css";

export default function NumberInput(props) {

  function handleChange(event){
    const input = event.target
    props.onChange(input);
  }

  return (
    <p>
      <label className={style.inputLabel} htmlFor={props.id}>
        {props.text}
      </label>
      <input className={style.input} type="number" id={props.id} onChange={handleChange} value={props.value}/>
    </p>
  );
}
