import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TranslationContext from '../context/translations';
import styled from 'styled-components';
import STYLES from '../utils/styles';
import Loader from './loader';

const Bar = styled.h2`
    width: 100%;
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    font-size: 90px;
    color: ${STYLES.colours.selected};
    transform: translate(-50%, -50%) rotate(-10deg);
    text-align: center;
    cursor: pointer;
`;

const FinishedBar = ({ finished, success, onClick }) => {
    const translations = useContext(TranslationContext);

    const finishedTitle = () => success ? translations.youWin : translations.youLose;

    return finished ? <Bar onClick={onClick}>{ finishedTitle() }<Loader /></Bar> : <React.Fragment />;
};

FinishedBar.propTypes = {
    finished: PropTypes.bool.isRequired,
    success: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FinishedBar;
