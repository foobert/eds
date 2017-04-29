import React from 'react';
import { connect } from 'react-redux'

import component from './components/file-upload';
import * as actions from './actions';

function mapStateToProps(state) {
    return {
    }
}

function mapActionsToProps(actions) {
    return {
        onFileUpload: actions.processFileUpload,
    };
}

export default connect(mapStateToProps, mapActionsToProps(actions))(component);
