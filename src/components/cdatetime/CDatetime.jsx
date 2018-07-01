import React, { Component } from 'react';

import Datetime from 'react-datetime';

import './theme.css';


class CDatetime extends Component {
    render() {
        return <Datetime {...this.props} />
    }
}

export default CDatetime;