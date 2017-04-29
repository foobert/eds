import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

export default function FileUpload(props) {
    const handleDrop = (files, rejected) => {
        if (props.onFileUpload) {
            props.onFileUpload(files);
        }
    };

    return (
        <div>
            <Dropzone onDrop={handleDrop}/>
        </div>
    );
}

FileUpload.propTypes = {
    onFileUpload: PropTypes.func,
}
