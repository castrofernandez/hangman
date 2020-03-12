import React from 'react';
import styled from 'styled-components';
import STYLES from '../utils/styles';

const Loading = styled.svg`
    display: block;
    margin: 0 auto;
    width: 120px;
    height: 120px;
`;

const Loader = () => (
    <Loading fill={STYLES.colours.selected} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px">
        <path d="M 16 4 L 16 6 C 21.535156 6 26 10.464844 26 16
            C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16
            C 6 12.734375 7.585938 9.851563 10 8.03125 L 10 13 L 12 13 L 12 5
            L 4 5 L 4 7 L 8.09375 7 C 5.59375 9.199219 4 12.417969 4 16
            C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16
            C 28 9.382813 22.617188 4 16 4 Z"/>
    </Loading>
);

export default Loader;
