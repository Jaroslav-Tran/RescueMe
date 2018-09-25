import React from 'react';
import Aux from '../../../hoc/Aux/Aux';

const contact = (props) => (
  <Aux>
      <Card>
          <Card.Content>
              <Image floated="right" size="mini" src="https://react.semantic-ui.com/images/avatar/large/steve.jpg" />
              <Card.Header>
                  Steve Sanders
              </Card.Header>
              <Card.Meta>
                  Phone: XXX XXX XXX
              </Card.Meta>
              <Card.Meta>
                  Relationship: Husband
              </Card.Meta>
          </Card.Content>

          <Card.Content extra>
              <div className="ui two buttons">
                  <Button basic color="green">
                      Update
                  </Button>
                  <Button basic color="red">
                      Delete
                  </Button>
              </div>
          </Card.Content>
      </Card>

      <Modal className="ui bottom attached button"
             trigger={(
                 <Button>
                     <i className="add icon" />
                     Add Contact
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
              </Form>
              <Modal.Description />
          </Modal.Content>
      </Modal>
  </Aux>
);

export default contact;
