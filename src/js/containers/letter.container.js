import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addLetter } from '../actions';

export default function(component) {
    const mapStateToProps = function(state) {
        return {
            remaining: state.remaining,
            chosen: state.chosen,
            word: state.word
        };
    };

    const mapDispatchToProps = function(dispatch) {
        return bindActionCreators(
            {
                addLetter
            },
            dispatch
        );
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(component);
}
