import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <>
            <button class="btn btn-outline btn-secondary my-2 w-max mx-auto">{children}</button>
        </>
    );
};

export default PrimaryButton;