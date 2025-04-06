"use client"
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.length > 0 && desc.length > 0) {
      setMainTask([...mainTask, { title, desc }]);
    }
    setTitle("");
    setDesc("");
  };

  const deleteTodo = (id) => {
    let filteredTasks = mainTask.filter((_, index) => index !== id);
    setMainTask(filteredTasks);
  };

  let renderTask = <h2>No task available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, id) => {
      return (
        <li key={id}>
          <div className="flex justify-between mb-5 text-black p-8 w-2/3">
            <h5 className="font-semibold text-xl">{t.title}</h5>
            <h6 className="font-semibold">{t.desc}</h6>
            <button
              onClick={() => deleteTodo(id)}
              className="bg-black text-white p-2 text-xxl font-bold rounded"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-xl font-bold text-center">
        Dhairya, Todo's List!
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Write your title"
          className="border-zinc-800 border-2 m-5 px-4 py-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Write description"
          className="border-zinc-800 border-2 m-5 px-4 py-2"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-2 m-5 text-xxl font-bold rounded">
          Add task
        </button>
      </form>
      <hr />
      <div className="p-8">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
