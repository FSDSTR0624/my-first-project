import "./Title.css";

function Title(props) {
  return (
    <h3 className="title" style={{ fontSize: "50px" }}>
      Hola {props.nombrePorProp} {props.apellidoPorProp}
    </h3>
  );
}

export default Title;
