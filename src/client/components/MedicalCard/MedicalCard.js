import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import MedicalModal from './Modal/MedicalModal';

const medicalCard = (props) => (
    <Aux>
        <div className="ui card">
            <div className="content">
                <a className="header">Medical Information</a>
                <div className="meta">
                    <span className="date">Last updated in: {props.medicalInfo[0]} </span>
                </div>
                <div className="description">Blood Type: {props.medicalInfo[1]} </div>
                <div className="description">Medical and other Allergies: {props.medicalInfo[2]} </div>
                <div className="description">Special Medical Conditions: {props.medicalInfo[3]} </div>
            </div>
            <div onClick={() => props.updateMedicalInformation} className="ui bottom attached button">
                <i className="add icon"></i>
                <MedicalModal updateMedical={props.updateMedicalInfo} />
            </div>
        </div>
    </Aux>
)


export default medicalCard;