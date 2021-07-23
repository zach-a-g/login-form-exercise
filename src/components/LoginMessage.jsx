import React from 'react';

function LoginMessage(props) {
    const { message, isValid } = props;
    
    if (message) {
        return (
            <h3 className={isValid ? 'success' : 'error'}>{message}</h3>
        );
    } else {
        return null;
    }
}

export default LoginMessage;