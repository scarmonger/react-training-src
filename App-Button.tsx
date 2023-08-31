import Button from "./components/Button/Button";

function App() {
  const handleOnClick = () => {
    console.log("wew");
  };
  return <Button onClick={handleOnClick}>Button</Button>;
}

export default App;
