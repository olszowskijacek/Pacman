import React, { Component } from 'react';
import { ReactComponent as PacmanSvg} from './pacman.svg';
import './style.css';

class Pacman extends Component {

    state = {
        direction: 'right',
        position: {
            top: 0,
            left: 0
        }
    };

    constructor(props) { // 1
        super(props);
        this.pacmanRef = React.createRef();
    };

    componentDidMount() { // 2
        this.pacmanRef.current.focus();
    };

    handleKeyDown = (event) => {
        console.log(event.keyCode, event.key);
    };

    render() {
        const { direction, position} = this.state;
        return (
            <div
                ref={this.pacmanRef} // 3
                className={`pacman pacman-${direction}`}
                tabIndex='0'
                onKeyDown={this.handleKeyDown}
                style={position}
            >
                <PacmanSvg />
            </div>
        )
    };
};


Pacman.defaultProps = {
    step: 50,
    size: 50, //Pacman size: 50 X 50px
    //TODO: move to config
    border: 10 * 2,
    topScoreBoardHeight: 50
};



export default Pacman;