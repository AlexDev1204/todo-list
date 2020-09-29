import React, { useState, useRef, useEffect } from "react";
import moment from "moment";

import {
  Card,
  CardHead,
  Description,
  Time,
  Button,
  ButtonsBlock,
  CheckBox,
} from "../styled";
import { ReactComponent as Remove } from "../../assets/remove.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";

export const Task = ({ task, _onEdit, _onRemove, _onDone }) => {
  const { name, description, date, done } = task;
  const [open, setOpen] = useState(true);
  const [height, setHeight] = useState(0);
  const [isDone, setDone] = useState(done);
  const blockRef = useRef(null);

  const initHeight = () => {
    if (blockRef && blockRef.current) {
      setHeight(
        blockRef.current.offsetHeight > 42 ? blockRef.current.offsetHeight : 42
      );
      onOpen();
    }
  };

  useEffect(initHeight, []);

  const onOpen = () => {
    setOpen(!open);
  };

  const onEdit = () => _onEdit(task);
  const onRemove = () => _onRemove(task);
  const onDone = () => {
    _onDone(task);
    setDone(!isDone);
  };

  return (
    <Card done={isDone}>
      <CardHead done={isDone}>
        <CheckBox
          type="checkbox"
          name="done"
          onChange={onDone}
          checked={isDone}
        />{" "}
        {name}
      </CardHead>
      <Description ref={blockRef} height={height} open={open}>
        {description}
      </Description>
      <Button m="0 0 12px" onClick={onOpen}>
        {open ? "Hide" : "Full"}
      </Button>
      <Time>{moment(date).format("DD.MM.YYYY hh:mm A")}</Time>

      <ButtonsBlock>
        <Button onClick={onEdit}>
          <Edit />
        </Button>
        <Button onClick={onRemove}>
          <Remove />
        </Button>
      </ButtonsBlock>
    </Card>
  );
};
