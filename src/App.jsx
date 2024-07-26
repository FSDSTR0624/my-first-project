import { useEffect, useState } from "react";
import users from "./assets/usersDatabase";
import ButtonCounter from "./components/atoms/ButtonCounter";
import CardWithEdit from "./components/atoms/CardWithEdit";
import Title from "./components/atoms/Title";

function App() {
  const [empleados, setEmpleados] = useState([]);

  const [numero, setNumero] = useState(0);

  useEffect(() => {
    //console.log("El estado del componente ha cambiado");
  });

  useEffect(() => {
    //console.log("Primer render");
  }, []);

  useEffect(() => {
    //console.log("Numero ha cambiado", numero);
  }, [numero]);

  useEffect(() => {
    //Get users from database
    const empleadosFromDatabase = users;
    setEmpleados(empleadosFromDatabase);
  }, []);

  useEffect(() => {
    console.log("Empleados ha cambiado");
  }, [empleados]);

  function editUser(id) {
    const empleadoAEditar = empleados.find((empleado) => {
      return empleado.id === id;
    });
    alert(`Editando ${empleadoAEditar.nombre} ${empleadoAEditar.apellido}`);
  }

  function addEmpleado() {
    setEmpleados(
      empleados.concat([{ id: "f", nombre: "Nuevo", apellido: "Muy Nuevo" }])
    );
  }

  return (
    <div>
      {empleados.map((empleado) => {
        return (
          <CardWithEdit
            key={empleado.id}
            onGallina={() => editUser(empleado.id)}
          >
            <Title
              nombrePorProp={empleado.nombre}
              apellidoPorProp={empleado.apellido}
            />
          </CardWithEdit>
        );
      })}
      <ButtonCounter />
      <button onClick={() => addEmpleado()}>Change estate</button>
    </div>
  );
}

export default App;
