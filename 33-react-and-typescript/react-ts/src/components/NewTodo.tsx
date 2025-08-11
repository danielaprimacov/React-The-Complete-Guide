const NewTodo = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo text</label>
      <input type="text" id="todo" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
