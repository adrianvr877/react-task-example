import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-white text-5xl font-bold text-center mb-4">CRUD de tareas</h1>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Captura una nueva tarea</h1>
        <input
          placeholder="ingresa tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          value={title}
          autoFocus
        />
        <textarea
          placeholder="ingresa la descrpcion de la tarea"
          className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-green-700 text-white px-3 py-1">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
