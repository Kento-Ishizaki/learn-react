import React from "react";
import defaultDataset from "./data/dataset";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    };
  }
  render() {
    return <div>dfdf</div>;
  }
}
