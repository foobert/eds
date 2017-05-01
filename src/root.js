import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { Component as FileUpload } from 'file-upload';
import { Component as Bounty } from 'bounty';
import { Component as Docking } from 'docking';
import { Component as Header } from 'header';

import styles from './styles.css';

export default function Root(props) {
    return (
        <Provider store={props.store}>
            <div className={styles.root}>
                <Header/>
                <FileUpload/>
                <Bounty/>
                <Docking/>
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
}
