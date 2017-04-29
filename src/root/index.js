import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

export default function Root(props) {
    return (
        <Provider store={props.store}>
            <div>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
}
