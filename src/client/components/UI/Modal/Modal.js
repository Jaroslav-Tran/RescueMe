import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import {
    Button, Header, Form, Image, Modal, Checkbox
} from 'semantic-ui-react';

class Modal extends Component {
  render() {
    return (
      <Aux>
        <Modal
          trigger={(
            <Button>
                Show Modal
            </Button>
                    )}
          centered={false}
        >
          <Modal.Header>
            {' '}
            Add Emergency Contact
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>
                    First Name
                </label>
                <input placeholder="First Name" onChange={e => (this.setState({ fname: e.target.value }))} />
              </Form.Field>
              <Form.Field>
                <label>
                    Last Name
                </label>
                <input placeholder="Last Name" onChange={e => (this.setState({ lname: e.target.value }))} />
              </Form.Field>
              <Form.Field>
                <label>
                    Contact
                </label>
                <input placeholder="Phone Number" onChange={e => (this.setState({ phone: e.target.value }))} />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button onClick={() => this.addEmergencyContact()}>
                  Create contact
              </Button>
              <Button onClick={() => this.closeAddModalContactHandler()}>
                  Cancel
              </Button>
            </Form>
            <Modal.Description />
          </Modal.Content>
        </Modal>
      </Aux>
    );
  }
}

export default Modal;