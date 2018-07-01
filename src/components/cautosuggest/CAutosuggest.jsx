import React, { Component } from 'react';

import Autosuggest from 'react-autosuggest';

import './theme.css';


class CAutosuggest extends Component {
    render() {
        return <Autosuggest {...this.props} />
    }
}

export default CAutosuggest;