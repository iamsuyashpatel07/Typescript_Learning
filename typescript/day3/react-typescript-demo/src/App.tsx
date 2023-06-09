import "./App.css";
import { Button } from "./components/Props/Button";
import { Container } from "./components/Props/Container";
import { Greet } from "./components/Props/Greet";
import { Heading } from "./components/Props/Heading";
import { Input } from "./components/Props/Input";
import { Oscar } from "./components/Props/Oscar";
import { Person } from "./components/Props/Person";
import { PersonList } from "./components/Props/PersonList";
import { Status } from "./components/Props/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      {/* Props like 1)Array 2)Object 3)string,number,boolean */}
      {/* <Greet name={"Suyash patel"} messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}

      {/* Advanced Props : Passing ReactNode/Html to component */}
      {/* <Status status="loading" /> */}
      {/* Children Props sending */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar> */}
      {/* Giving Default value to props
      <Greet name="jk" isLoggedIn={true} /> */}

      {/* Passing props as Events */}

      {/* Mouse Event/Button Element */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      /> */}

      {/* <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      /> */}

      {/* Passing Styles as Props */}
      {/* <Container
        styles={{
          border: "5px solid green",
          padding: "1rem",
          textDecoration: "underline",
        }}
      /> */}
    </div>
  );
}

export default App;
