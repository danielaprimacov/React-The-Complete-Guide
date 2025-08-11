import { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
    
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo text</label>
      <input type="text" id="todo" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
