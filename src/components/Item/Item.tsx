import { useState } from "react";
import { Trash2 } from "lucide-react";
import "./Item.scss";

type ItemProps = {
  // The task text to be displayed.
  task: string;
  // Function to call when the delete button is clicked.
  onDelete: () => void;
};

/** Item component represents a single todo item.
 *  It has a checkbox and delete option.
 */
const Item = ({ task, onDelete }: ItemProps) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Toggle the isCompleted state when the checkbox is clicked.
  const handleCheckboxChange = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        className="item__checkbox"
        checked={isCompleted}
        onChange={handleCheckboxChange}
      />
      <span
        className={`item__text ${isCompleted ? "item__text--completed" : ""}`}
      >
        {task}
      </span>
      <button className="item__delete" onClick={onDelete}>
        <Trash2 className="item__delete--icon" />
      </button>
    </div>
  );
};

export default Item;
