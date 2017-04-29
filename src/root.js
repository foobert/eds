import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { Component as FileUpload } from 'file-upload';
import { Component as Bounty } from 'bounty';

export default function Root(props) {
    return (
        <Provider store={props.store}>
            <div>
                <FileUpload/>
                <Bounty/>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
}
