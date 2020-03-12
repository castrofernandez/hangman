import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TranslationContext from '../context/translations';

const FinishedBar = ({ finished, success, onClick }) => {
    const translations = useContext(TranslationContext);

    const finishedTitle = () => success ? translations.youWin : translations.youLose;

    return finished ? <h2 onClick={onClick}>{ finishedTitle() }</h2> : <React.Fragment />;
};

FinishedBar.propTypes = {
    finished: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FinishedBar;
