import { Component } from "react";
import Head from "next/head";
import Header from "../components/header";
import Modal from "../components/modal";

class index extends Component {
  state = {
    modalIsOpen: false
  };

  handleClickContact = () => {
    this.setState({
      modalIsOpen: true,
      toastIsOpen: false
    });
  };

  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <style jsx global>
          {`
            body {
              margin: 0;
            }
            button {
              cursor: pointer;
            }
          `}
        </style>
        <Header onClickContact={this.handleClickContact} />
        <Modal isOpen={this.state.modalIsOpen} />
        hello
      </div>
    );
  }
}

export default index;
