import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return <>
    <Input id="name" label="Your name" type="text" disabled />
    <Input id="age" label="Your age" type="number" />
    <main>
      <p>
        <Button>A Button</Button>
      </p>
      <p>
        <Button href="#"> A Link
        </Button>
      </p>
    </main>
  </>;
}

export default App;
