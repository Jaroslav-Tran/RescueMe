import React, { Component } from 'react';
import ReactModal from 'react-modal';
import {
  Button, Header, Form, Image, Modal, Checkbox
} from 'semantic-ui-react';
import MedicalCard from '../../components/MedicalCard/MedicalCard';
import ContactList from '../../components/ContactList/ContactList';
import Aux from '../../hoc/Aux/Aux';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userArr: [],
      medicalInformation: []
    };
  }

  componentDidMount() {
    fetch('/api/dashboard', {
      method: 'GET',
      credentials: 'same-origin',
    }).then(res => res.json())
      .then((json) => {
        console.log('This should throw json: ', json);
        this.setState({
          userArr: json,
          medicalInformation: json.medicalInformation,
        });
      })
      .catch((err) => {
        throw err;
      });
  }


  render() {
    return (
      <Aux>
        <MedicalCard medicalInfo={this.state.medicalInformation} />
        <ContactList />
      </Aux>
    );
  }
}


export default Dashboard;
