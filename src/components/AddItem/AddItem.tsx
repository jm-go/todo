import { PlusCircle } from "lucide-react";
import "./AddItem.scss";
import { ChangeEvent, useState } from "react";

type AddItemProps = {
  onAdd: (task: string) => void;
};

// This component allows users to input and add new tasks
const AddItem = ({ onAdd }: AddItemProps) => {
  const [userInput, setUserInput] = useState<string>("");

  // Updates userInput state on input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  // Adds the task and clears input field if the input is not empty
  const handleAdd = () => {
    if (userInput.trim() !== "") {
      onAdd(userInput);
      setUserInput("");
    } else {
      alert("Please enter a todo!"); // Alert if input is empty
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
