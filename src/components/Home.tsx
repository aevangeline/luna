import React from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const HomeText = styled.h2({
    textAlign: "center",
    fontFamily: "'Quattrocento', serif",
    fontSize: "max(4vw, 14px)",
    fontWeight: "normal"
})

const VerticalBox = styled.div({
})

const displayText = [
    "Tech Policy Researcher",
    "Meme Queen",
    "Software Engineer",
    "Black Trans Woman",
    "Ph.D. Student",
    "Goth Wannabe",
    "Human?"
]

interface HomeProps {
    index: number,
    handle: number,
}

const cycleTime = 3000;



const TextFader = styled.div({

    paddingTop: "15vh",
    paddingBottom : "5vh",

    ".fade-enter": {
        opacity: 0,
    },

    ".fade-enter.fade-enter-active": {
        opacity: 1,
        transition: "opacity 500ms ease-in",
        transitionDelay: "500ms"
    },

    ".fade-exit": {
        opacity: 1,
    },

    ".fade-exit.fade-exit-active": {
        opacity: 0,
        transition: "opacity 500ms ease-in",
    },

    "div.transition-group": {
        position: "relative",
    },

    ".fading-text": {
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        padding: 0,
    }
})

export default class Home extends React.Component<{}, HomeProps> {

    constructor(props: {}) {
        super(props)
        this.state = {
            ...props,
            index: 0,
            handle: 0,
        };
    }

    updateRole() {
        this.setState({ index: (this.state.index + 1) % displayText.length })
    }


    componentDidMount() {
        this.setState({
            handle: setInterval(() => { this.updateRole() }
                , cycleTime)
        })
    }

    componentWillMount() {
        clearInterval(this.state.handle);
    }


    render() {
        return (
            <TextFader>
                <Row>
                    <Col xs={12}>
                        <VerticalBox>
                            <TransitionGroup className="transition-group">

                                {displayText.map((value, index) => this.state.index == index &&

                                    <CSSTransition
                                        key={index}
                                        classNames="fade"
                                        timeout={{ exit: 1000, enter: 1000 }}
                                    >
                                        <HomeText className="fading-text">
                                            {value}
                                        </HomeText>

                                    </CSSTransition>)}
                            </TransitionGroup>
                        </VerticalBox>
                    </Col>
                </Row>
            </TextFader>

        )
    }
}