// @flow
import { Component, Fragment } from "react";
import Head from "next/head";
import Header from "../components/header";
import Modal from "../components/modal";
import ConstructionMessage from "../components/construction_message";

type Props = {
  isUnderConstruction: boolean
};

type State = {
  modalIsOpen: boolean
};

class index extends Component<Props, State> {
  state = {
    modalIsOpen: false
  };

  static defaultProps = {
    isUnderConstruction: true
  };

  handleClickContact = () => {
    this.setState({
      modalIsOpen: true,
      toastIsOpen: false
    });
  };

  render() {
    console.error(this.props.isUnderConstruction);
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Kelly Bondanza</title>
        </Head>
        {this.props.isUnderConstruction ? (
          <ConstructionMessage />
        ) : (
          <Fragment>
            <Header onClickContact={this.handleClickContact} />
            <Modal isOpen={this.state.modalIsOpen} />
          </Fragment>
        )}
      </div>
    );
  }
}

export default index;
