import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import { Panel } from 'react-bootstrap';

import styles from './styles.css';

export default function FileUpload(props) {
    const handleDrop = (files, rejected) => {
        if (props.onFileUpload) {
            props.onFileUpload(files);
        }
    };

    return (
        <div>
            <Dropzone onDrop={handleDrop} className={styles.drop}>
                <Panel className={styles.dropPanel}>Drop files here</Panel>
            </Dropzone>
            { props.fileUpload.processing ? ('processing ' + props.fileUpload.todo + ' files') : 'idle' }
        </div>
    );
}

FileUpload.propTypes = {
    onFileUpload: PropTypes.func,
}
