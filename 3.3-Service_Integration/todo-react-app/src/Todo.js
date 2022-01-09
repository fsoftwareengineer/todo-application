import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const Todo = (props) => {
  const [state, setState] = useState({ item: props.item, readOnly: true });
  const deleteItem = props.deleteItem;
  const update = props.update;

  const deleteEventHandler = () => {
    deleteItem(state.item);
  };

  const offReadOnlyMode = () => {
    console.log("Event!", state.readOnly);
    setState({ readOnly: false }, () => {
      console.log("ReadOnly? ", state.readOnly);
    });
  };

  const enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      setState({ readOnly: true });
      update(state.item);
    }
  };

  const editEventHandler = (e) => {
    const thisItem = state.item;
    thisItem.title = e.target.value;
    setState({ item: thisItem });
  };

  const checkboxEventHandler = (e) => {
    const thisItem = state.item;
    thisItem.done = !thisItem.done;
    setState({ item: thisItem });
    update(state.item);
  };

  const item = state.item;
  return (
    <ListItem>
      <Checkbox checked={item.done} onChange={checkboxEventHandler} />
      <ListItemText>
        <InputBase
          inputProps={{
            "aria-label": "naked",
            readOnly: state.readOnly,
          }}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          fullWidth={true}
          onClick={offReadOnlyMode}
          onChange={editEventHandler}
          onKeyPress={enterKeyEventHandler}
        />
      </ListItemText>

      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
