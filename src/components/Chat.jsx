import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Moai from "../assets/images/moai.png";
import Shuttle from "../assets/images/shuttle.png";

const Chat = (props) => {
  const isQuestion = props.type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";
  console.log(props.text);

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Moai} />
        ) : (
          <Avatar alt="icon" src={Shuttle} />
        )}
      </ListItemAvatar>
      <div className="p-chat__bubble">{props.text}</div>
    </ListItem>
  );
};

export default Chat;
