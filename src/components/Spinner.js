import React from 'react';

export const Spinner = (props) => {
    return (
        <i className={`fas fa-spinner fa-spin spinner-${props.size} `}></i>
    )
}

Spinner.defaultProps = {
    size: 'md'
}
export default Spinner;