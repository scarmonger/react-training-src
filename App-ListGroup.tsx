import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  let items = ["Jakarta", "Tangerang", "Ciputat"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading={"wew"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
