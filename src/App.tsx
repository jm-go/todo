import "./main.scss";
import Navbar from "./components/Navbar/Navbar";
import AddItem from "./components/AddItem/AddItem";
import List from "./components/List/List";

const App = () => {
  return (
    <>
      <Navbar onReset={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <AddItem onAdd={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <List tasks={[]} onDelete={function (id: string): void {
        throw new Error("Function not implemented.");
      } } />
    </>
  );
};

export default App;
