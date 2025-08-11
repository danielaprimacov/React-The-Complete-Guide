import Todo from "../models/todos";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// React.FC is a type definition - make clear that this is a function (functional component)
const Todos: React.FC<{ items: Todo[]; deleteTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          deleteTodo={props.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
