import { Input } from "antd";
import { Modal } from "antd";

import React from "react";

import * as emailjs from "emailjs-com";

import "../style/mailform.scss"

const { TextArea } = Input;

interface MailFormProps {
  showContactModal: boolean;
  setShowContactModal: Function;
}

interface MailFormState {
  yourName: string;
  subject: string;
  yourAddress: string;
  content: string;
}

type State = {
  yourName: string;
  subject: string;
  yourAddress: string;
  content: string;
};

export default class MailForm extends React.Component<
  MailFormProps,
  MailFormState
> {
  constructor(props: MailFormProps) {
    super(props);
    this.state = {
      yourName: "",
      subject: "",
      yourAddress: "",
      content: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.mailSubmit = this.mailSubmit.bind(this);
  }

  handleChange(e: string, where: keyof State) {
    let state: State = Object.assign({}, this.state);
    state[where] = e;
    this.setState(state);
  }

  async mailSubmit() {
    const template_params = {
      reply_to: this.state.yourAddress,
      subject: this.state.subject,
      from_name: this.state.yourName,
      message_html: this.state.content,
      url: location.href
    };
    var service_id = "default_service";
    var template_id = "template_vmKwN61k";
    var user_id = "user_lxYZJTHqNDAhtluEIHAmV";
    await emailjs.send(service_id, template_id, template_params, user_id);
    return this.props.setShowContactModal();
  }

  render() {
    return (
      <Modal
        title="Contact Me"
        visible={this.props.showContactModal}
        onCancel={() => this.props.setShowContactModal()}
        onOk={this.mailSubmit}
        className="mailform--modal"
        width={300}
      >
        <div className="mailform--name">
          <span className="mailform--name__text">名前：</span>
          <Input
            type="text"
            className="mailform--name__form"
            value={this.state.yourName}
            placeholder="Your Name"
            name="yourName"
            onChange={(event) => this.handleChange(event.target.value, "yourName")}
          />
        </div>
        <div className="mailform--subject">
          <span className="mailform--subject__text">件名：</span>
          <Input
            type="text"
            value={this.state.subject}
            placeholder="Subject"
            name="subject"
            onChange={(event) => this.handleChange(event.target.value, "subject")}
            className="mailform--subject__form"
          />
        </div>
        <div className="mailform--mailaddress">
          <span className="text">メールアドレス：</span>
          <Input
            type="email"
            value={this.state.yourAddress}
            placeholder="Your Email Address"
            name="yourAddress"
            onChange={(event) => this.handleChange(event.target.value, "yourAddress")}
            className="mailform--mailaddress_form"
          />
        </div>
        <TextArea
          value={this.state.content}
          placeholder="Content"
          name="content"
          onChange={(event) => this.handleChange(event.target.value, "content")}
          autosize={{ minRows: 5 }}
        />
      </Modal>
    );
  }
}
