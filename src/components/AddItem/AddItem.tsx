import { PlusCircle } from "lucide-react";
import "./AddItem.scss";
import { ChangeEvent, useState } from "react";

type AddItemProps = {
  onAdd: (task: string) => void;
};

const AddItem = ({ onAdd }: AddItemProps) => {
  const [userInput, setUserInput] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleAdd = () => {
    if (userInput.trim() !== "") {
      onAdd(userInput);
      setUserInput("");
    }
  };

  return (
    <div className="add">
      <input
        className="add__input"
        type="text"
        placeholder="Add your task here..."
        value={userInput}
        onChange={handleInputChange}
      />
      <button className="add__button" onClick={handleAdd}>
        <PlusCircle className="add__button--icon" />
      </button>
    </div>
  );
};

export default AddItem;
