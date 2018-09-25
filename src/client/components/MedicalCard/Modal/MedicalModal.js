import React, { Component } from 'react';
import {
  Button, Header, Form, Image, Modal, Checkbox
} from 'semantic-ui-react';
import Aux from '../../../hoc/Aux/Aux';

class MedicalModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArr: null,
      blood: '',
      allergies: '',
      medicalConditions: '',
    };
  }

  updateMedicalInformation() {
    fetch('/api/dashboard/updateMedicalInformation', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        blood: this.state.blood,
        allergies: this.state.allergies,
        medicalConditions: this.state.medicalConditions
      })
    })
      .then((response) => {
        console.log('1', response);
        return response.json();
      })
      .then((responseJson) => {
        console.log('2', responseJson);
        this.setState({
          userArr: [responseJson]
        });
        return responseJson;
      })
      .catch((err) => {
        throw err;
      });
  }


  render() {
    return (
      <Aux>
        <Modal
          trigger={(
            <Button>
                            Update Medical Information
            </Button>
                    )}
          centered={false}
        >
          <Modal.Header>
            {' '}
                        Update Medical Information
          </Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>
                                    Blood Type
                </label>
                <input placeholder="Blood Type" onChange={e => (this.setState({ blood: e.target.value }))} />
              </Form.Field>
              <Form.Field>
                <label>
                                    Medical and Other Allergies
                </label>
                <input placeholder="Medical and Other Allergies" onChange={e => (this.setState({ allergies: e.target.value }))} />
              </Form.Field>
              <Form.Field>
                <label>
                                    Special Medical Conditions
                </label>
                <input placeholder="Special Medical Conditions" onChange={e => (this.setState({ medicalConditions: e.target.value }))} />
              </Form.Field>
              <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button onClick={() => this.updateMedicalInformation()}>
                                Update Information
              </Button>
            </Form>
            <Modal.Description />
          </Modal.Content>
        </Modal>
      </Aux>
    );
  }
}

export default MedicalModal;
