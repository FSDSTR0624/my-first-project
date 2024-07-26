import Card from "./Card";

function CardWithEdit(props) {
  return (
    <Card>
      <button onClick={() => props.onGallina()}>Edit</button>
      {props.children}
    </Card>
  );
}

export default CardWithEdit;
