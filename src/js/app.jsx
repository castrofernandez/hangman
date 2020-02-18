import React from 'react';
import Header from './components/header/header.component.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main>
                <Header />
                <h1 className="title">
                React+Redux
                </h1>
            </main>
        );
    }
}
