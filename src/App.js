import React, { useState, useEffect } from "react";

import {
  Wrapper,
  Heading,
  All,
  Done,
  Active,
  Create,
} from "./components/styled";

import { Task } from "./components/task";
import { Modal } from "./components/modal";

function App() {
  const list = localStorage.getItem("tasks") || "[]";
  const [tasks, setTasks] = useState(JSON.parse(list));
  const [modalOpen, setModalOpen] = useState(false);
  const [edited, setEdited] = useState(null);
  const [filter, setFilter] = useState("all");

  const initTasks = () => {
    if (!list) {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  };

  useEffect(initTasks, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const renderTasks = () => {
    return tasks
      .filter((e) => {
        if (filter === "active") return !e.done;
        else if (filter === "done") return e.done;
        else return e;
      })
      .map((t) => (
        <Task
          key={t.date}
          task={t}
          _onEdit={onSetEdited}
          _onRemove={onRemoveTask}
          _onDone={onChangeTaskStatus}
        />
      ));
  };

  const onChangeModal = () => {
    if (edited) setEdited(null);
    setModalOpen(!modalOpen);
  };

  const onSetEdited = (task) => {
    setEdited(task);
    onChangeModal();
  };

  const onRemoveTask = (task) => {
    const index = tasks.findIndex((el) => el.date === task.date);
    const newList = [...tasks];
    newList.splice(index, 1);
    setTasks(newList);
  };

  const onAddTask = (task) => {
    const index = tasks.findIndex((el) => el.date === task.date);
    const newList = [...tasks];
    if (index !== -1) {
      newList[index] = task;
    } else {
      newList.push(task);
    }
    setTasks(newList);
    console.log(newList);
  };

  const onChangeTaskStatus = (task) => {
    const index = tasks.findIndex((el) => el.date === task.date);
    const newList = [...tasks];
    newList[index].done = !newList[index].done;
    setTasks(newList);
  };

  const onChangeFilter = (name) => () => setFilter(name);

  return (
    <Wrapper>
      <Heading>Tasks list</Heading>
      <Create onClick={onChangeModal}>Create</Create>
      <All active={filter === "all"} onClick={onChangeFilter("all")}>
        All
      </All>
      <Active active={filter === "active"} onClick={onChangeFilter("active")}>
        Active
      </Active>
      <Done active={filter === "done"} onClick={onChangeFilter("done")}>
        Done
      </Done>

      {renderTasks()}

      {modalOpen ? (
        <Modal onClose={onChangeModal} _onSubmit={onAddTask} _task={edited} />
      ) : null}
    </Wrapper>
  );
}

export default App;
