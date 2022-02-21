import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextInput from "./TextInput";

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      desc: "",
    };
    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDesc = this.inputDesc.bind(this);
  }

  inputName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  inputEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  inputDesc = (event) => {
    this.setState({
      desc: event.target.value,
    });
  };

  submit = () => {
    const name = this.state.name;
    const email = this.state.email;
    const desc = this.state.desc;

    const payload = {
      text:
        "お問い合わせがありました\n" +
        "お名前: " +
        name +
        "\n" +
        "メールアドレス: " +
        email +
        "\n" +
        "内容:\n" +
        desc,
    };

    const url = process.env.REACT_APP_SLACK_WEBHOOK_URL;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(() => {
      alert("送信が完了しました");
      this.resetState();
      return this.handleClose;
    });
  };

  resetState = () => {
    this.setState({
      name: "",
      email: "",
      desc: "",
    });
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
        <DialogContent>
          <TextInput
            label={"お名前(必須)"}
            multiline={false}
            rows={1}
            value={this.state.name}
            type={"text"}
            onChange={this.inputName}
          />
          <TextInput
            label={"メールアドレス(必須)"}
            multiline={false}
            rows={1}
            value={this.state.email}
            type={"email"}
            onChange={this.inputEmail}
          />
          <TextInput
            label={"内容(必須)"}
            multiline={true}
            rows={5}
            value={this.state.desc}
            type={"text"}
            onChange={this.inputDesc}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={this.submit} color="primary" autoFocus>
            送信
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
