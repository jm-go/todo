import { PlusCircle } from "lucide-react";
import "./AddItem.scss";

type AddItemProps = {
  onAdd: () => void;
};

const AddItem = ({ onAdd }: AddItemProps) => {
  return (
    <div className="add">
      <input
        className="add__input"
        type="text"
        placeholder="Add your task here..."
      />
      <button className="add__button" onClick={onAdd}>
        <PlusCircle />
      </button>
    </div>
  );
};

export default AddItem;
