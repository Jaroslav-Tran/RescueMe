import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Navigation from '../Navigation/Navigation';

const homepage = (props) => (
    <Aux>
        <div className="ui container">
            <button className="fluid ui button">Floods</button>
            <button className="fluid ui button">Fire</button>
            <button className="fluid ui button">Tornado</button>
            <button className="fluid ui button">Earthquake</button>
            <button className="fluid ui button">Hurricane</button>
        </div>
        <Navigation />
    </Aux>
)

export default homepage;