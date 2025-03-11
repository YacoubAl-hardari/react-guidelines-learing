export default function ToDoList({ tasks, addTask, removeTask }) {
  return (
    <div className="todo-container">
      <h2 className="todo-title">Task List</h2>

      <div className="todo-input-container">
        <input type="text" className="todo-input" placeholder="Add a new task..." />
        <button className="todo-add-btn">Add</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li className="todo-item" key={task.id}>
            <span>{task.title}</span>
            <button className="todo-delete-btn">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
