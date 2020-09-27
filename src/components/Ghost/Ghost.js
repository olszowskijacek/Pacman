import React, { Component } from 'react';
import { ReactComponent as GhostSvg } from './ghost.svg';
import './style.css';

class Ghost extends Component {

    state = {
        direction: 'left',
        position: {
            top: 50 * 4,
            left: 50 * 4
        }
    }
    render() {
        const { color } = this.props;
        return (
            <div
                style={this.state.position}
                className='ghost'
            >
                <GhostSvg className={`ghost-${color}`} />
            </div>
        )
    }
};

Ghost.defaultProps = {
    color: 'red',
    step: 50,
    size: 50, //Pacman size: 50 X 50px
    //TODO: move to config
    border: 10 * 2,
    topScoreBoardHeight: 50
};

export default Ghost;