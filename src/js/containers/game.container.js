import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeWord } from '../actions';

export default function(component) {
    const mapStateToProps = function(state) {
        return {
            language: state.language
        };
    };

    const mapDispatchToProps = function(dispatch) {
        return bindActionCreators(
            {
                changeWord
            },
            dispatch
        );
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(component);
}
