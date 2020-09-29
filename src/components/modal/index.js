import React, { useState } from "react";

import { ReactComponent as CloseIcon } from "../../assets/x-circle.svg";
import {
  Background,
  WrapperModal,
  Header,
  HeadingModal,
  Content,
  Input,
  TextArea,
  Button,
} from "../styled";

export const Modal = ({ _task = null, _onSubmit, onClose }) => {
  const emptyTask = {
    name: "",
    description: "",
    date: "",
    done: false,
  };
  const [task, setTask] = useState({ ...(_task || emptyTask) });
  const onChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const onSubmit = () => {
    const t = { ...task };
    if (!_task) {
      t.date = Date.now();
    }
    _onSubmit(t);
    onClose();
  };

  const { name, description } = task;

  return (
    <Background onClick={onClose}>
      <WrapperModal onClick={(e) => e.stopPropagation()}>
        <Header>
          <HeadingModal>{_task ? "Edit" : "Create"} task</HeadingModal>
          <CloseIcon onClick={onClose} />
        </Header>
        <Content>
          <Input
            placeholder="Task name"
            name="name"
            value={name}
            onChange={onChange}
          />
          <TextArea
            placeholder="Description"
            name="description"
            value={description}
            onChange={onChange}
          />
          <Button
            disabled={!name || !description}
            onClick={onSubmit}
            m="0 0 0 auto"
          >
            {_task ? "Save changes" : "Add task"}
          </Button>
        </Content>
      </WrapperModal>
    </Background>
  );
};
