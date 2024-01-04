import Item from "../Item/Item";
import "./List.scss";

type ListProps = {
  tasks: { id: number; content: string }[];
  // Function to call to delete a task.
  onDelete: (id: number) => void;
};

/** List component renders a list of Item components,
 * or a message if the list is empty.
 */
const List = ({ tasks, onDelete }: ListProps) => {
  return (
    <div className="list">
      {tasks.length > 0 ? (
        // Mapping through each task in the tasks array to create an Item
        tasks.map((task) => (
          <Item
            key={task.id}
            task={task.content}
            onDelete={() => onDelete(task.id)}
          />
        ))
      ) : (
        // Display a message if there are no tasks.
        <p className="list__empty-message">
          Nothing to see here yet... Add a task in the field above!
        </p>
      )}
    </div>
  );
};

export default List;
