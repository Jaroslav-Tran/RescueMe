import React, { Component } from 'react';
import {
  Button, Header, Form, Image, Modal, Checkbox, Card
} from 'semantic-ui-react';
import Contact from './Contact/Contact';
import Aux from '../../hoc/Aux/Aux';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      phone: '',
      contactArr: []
    };
  }

  componentDidMount() {
    fetch('api/dashboard/contacts', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      method: 'GET',
      credentials: 'same-origin',
    })
      .then(res => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          contactArr: json
        });
      })
      .catch((err) => {
        throw (err);
      });
  }

  /* this.props.contacts.map(( contact, index) => {
    return <Contact

}) */
  /*
    let // noinspection JSAnnotator
    emergencyContacts = Object.keys( this.props.emergencyContacts )
        .map( igKey => {
            return [...Array( this.props.emergencyContacts[igKey] )].map( ( _, i ) => {
                return <Contact key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (emergencyContacts.length === 0) {
    transformedIngredients = <p>There are no emergency contacts tied to your account.</p>;
}
*/

  addEmergencyContact() {
    fetch('/api/dashboard/create', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        fname: this.state.fname,
        lname: this.state.lname,
        phone: this.state.phone,
        owner: this.state.owner,
        edit: new Date()
      })
    })
      .then((response) => {
        console.log('1', response);
        return response.json();
      })
      .then((responseJson) => {
        console.log('2', responseJson);
        return responseJson;
      })
      .catch((err) => {
        throw err;
      });
  }


  render() {
    return (
      <Aux>
        <div className="ui card">
          <div className="content">
            <a className="header">
    Emergency Contacts
            </a>
            <div className="meta">
              <span className="date">
    Last updated in:
                {' '}
              </span>
            </div>
          </div>
            emergencyContacts
        </div>
      </Aux>
    );
  }
}


export default ContactList;
