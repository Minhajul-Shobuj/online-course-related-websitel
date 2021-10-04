import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    let history = useHistory();
    function handleClick() {
        history.push("/home");
    }
    return (
        <div>
            <div>
                <h1>Sorry,This page you are looking for is not Found</h1>
            </div>
            <button variant="primary" className="btn" type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
    );
};

export default NotFound;