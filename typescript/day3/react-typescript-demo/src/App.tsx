import "./App.css";
import { Counter } from "./components/class/Counter";
import { User } from "./components/context/User";
import { Button } from "./components/Props/Button";
import { Container } from "./components/Props/Container";
import { Greet } from "./components/Props/Greet";
import { Heading } from "./components/Props/Heading";
import { Input } from "./components/Props/Input";
import { Oscar } from "./components/Props/Oscar";
import { Person } from "./components/Props/Person";
import { PersonList } from "./components/Props/PersonList";
import { Status } from "./components/Props/Status";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { DomRef } from "./components/Hooks/ref/DomRef";
import { MutableRef } from "./components/Hooks/ref/MutableRef";

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

      {/* Hooks */}
      {/* useState */}
      {/* <User /> */}
      {/* useReducer */}
      {/*  <Counter /> */}

      {/* Context Api */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* UseRef */}

      {/* <DomRef /> */}
      {/* <MutableRef /> */}

      {/* Class */}

      <Counter message="The Count value is" />
    </div>
  );
}

export default App;
