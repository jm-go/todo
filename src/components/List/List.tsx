import Item from "../Item/Item";
import "./List.scss";

type ListProps = {
  tasks: { id: number; name: string }[];
  onDelete: (id: number) => void;
};

const List = ({ tasks, onDelete }: ListProps) => {
  return (
    <div className="list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Item
            key={task.id}
            task={task.name}
            onDelete={() => onDelete(task.id)}
          />
        ))
      ) : (
        <p className="list__empty-message">
          Nothing to see here yet... Add a task in the field above!
        </p>
      )}
    </div>
  );
};

export default List;
