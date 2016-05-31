import React, {PropTypes} from 'react';

const DateLabel = ({date}) => {
    return (
        <p>{ i18n`Date: ${date}:t(D)` }</p>
    );
};

DateLabel.propTypes = {
    date: PropTypes.object.isRequired
};

export default DateLabel;