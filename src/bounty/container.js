import React from 'react';
import { connect } from 'react-redux'

import component from './components';

const actions = {};

function mapStateToProps(state) {
    return {
        bounty: state.bounty,
    }
}

function mapActionsToProps(actions) {
    return {
    };
}

export default connect(mapStateToProps, mapActionsToProps(actions))(component);
