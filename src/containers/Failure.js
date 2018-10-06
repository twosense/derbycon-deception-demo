import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Modal from 'react-modal';
import { withAlert } from "react-alert";

class Failure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transferFundsModalOpen: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('On Submit');
    this.openModal();
  }

  handleTransfer = event => {
    this.closeModal();
  }

  openModal = () => {
    this.setState({transferFundsModalOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  closeModal = () => {
    this.setState({transferFundsModalOpen: false});
  }

  render() {
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
    const pageStyle = {
      marginTop: '50px',
      textAlign: 'left',
      width: '100%'
    };
    const accountsDetailStyle = {
      marginTop: '70px',
    };
    return (
      <div className="accountPage" style={pageStyle}>
        <Modal
          isOpen={this.state.transferFundsModalOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <form onSubmit={this.handleTransfer}>
            <FormGroup controlId="routing" bsSize="large">
              <ControlLabel>Routing #</ControlLabel>
              <FormControl
                defaultValue={''}
              />
            </FormGroup>
            <FormGroup controlId="account" bsSize="large">
              <ControlLabel>Account #</ControlLabel>
              <FormControl
                defaultValue={''}
              />
            </FormGroup>
            <FormGroup controlId="ammount" bsSize="large">
              <ControlLabel>Ammount ($)</ControlLabel>
              <FormControl
                defaultValue={''}
              />
            </FormGroup>
            <Button
              onClick={() => {
                this.props.alert.error("Something's not right...     contact customer service!");
              }}
              block
              bsSize="large"
              type="submit">
              Transfer
            </Button>
          </form>
        </Modal>
        <h2 style={{textDecoration: 'underline'}}>Account Summary:</h2>
        <div className="accountsDetail" style={accountsDetailStyle}>
          <h3>Checking (...3242):</h3>
          <h4>$10.500.00</h4>
          <hr/>
          <h3>Savings (...2314):</h3>
          <h4>$300.000.00</h4>
        </div>
        <hr/>
        <form style={{width: '200px', marginTop:'50px'}} onSubmit={this.handleSubmit}>
          <Button
            block
            bsSize="large"
            type="submit">
            Transfer Funds
          </Button>
        </form>
      </div>
    )
  }
}

export default withAlert(Failure);