import "./main.scss";
import Navbar from "./components/Navbar/Navbar";
import AddItem from "./components/AddItem/AddItem";

const App = () => {
  return (
    <>
      <Navbar onReset={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <AddItem onAdd={function (): void {
        throw new Error("Function not implemented.");
      } } />
      {/* <List /> */}
    </>
  );
};

export default App;
