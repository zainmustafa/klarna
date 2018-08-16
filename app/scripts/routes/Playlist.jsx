import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Movie from "components/Movie";

export class PlaylistComponent extends React.PureComponent {
    static propTypes = {
        netflix: PropTypes.object.isRequired
    };

    render() {
        const {
            netflix: { playlist }
        } = this.props;

        return (
            <div key="Private" className="app__private app__route">
                <div className="app__container">
                    <h2>MOVIES</h2>
                    <div className="list__container">
                        {playlist.map((item, index) => <Movie key={index} movie={item} />)}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { netflix: state.netflix };
}

export default connect(mapStateToProps)(PlaylistComponent);
