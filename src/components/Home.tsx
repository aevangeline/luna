import React from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa'



const HomeText = styled.h2({
    textAlign: "center",
    fontFamily: "'Quattrocento', serif",
    fontSize: "max(4vw, 20px)",
    fontWeight: "normal",
    textTransform: "uppercase",
})

const IconLink = styled.a({
    textAlign: "center",
    color: "white",
    fontSize: "max(2vw, 20px)",
    marginTop: "20vh",
    padding: "auto",
    marginRight: "max(3vw, 10px)"
})

const displayText = [
    "Tech Policy Researcher",
    "Meme Queen",
    "Software Engineer",
    "Black Trans Woman",
    "Ph.D. Student",
    "Goth Wannabe",
    "Human"
]

interface HomeProps {
    index: number,
    handle: number,
}

const cycleTime = 3000;

const IconDiv = styled.div({
    marginTop: "18vmax",
    paddingTop: 0,
    alignContent: "center",
    textAlign: "center",
})



const TextFader = styled.div({

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

    ".transition-group": {
        position: "relative",
    },

    ".fading-text": {
        position: "absolute",
        width: "100%",
        marginTop: "7vmax",
        alignContent: "center",
        verticalAlign: "center",
    }
})

export default class Home extends React.Component<{}, HomeProps> {

    constructor(props: {}) {
        super(props)
        this.state = {
            ...props,
            index: 0,
            handle: setInterval(() => { this.updateRole() }
            , cycleTime),
        };
    }

    updateRole() {
        this.setState({ index: (this.state.index + 1) % displayText.length })
    }

    componentWillMount() {
        clearInterval(this.state.handle);
    }

    altText = displayText.join(". ")


    render() {
        return (
            <TextFader>
                <Row>
                    <Col xs={12}>
                        <TransitionGroup className="transition-group">

                            {displayText.map((value, index) => this.state.index === index &&

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
                    </Col>
                </Row>

                    <Row justify="center">
                        <Col xs={12}>
                        <IconDiv>

                            <IconLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/AureliaAugusta">
                                <FaTwitter title="Twitter" />
                            </IconLink>
                            <IconLink target="_blank" rel="noopener noreferrer" href="mailto:aevangeline@pm.me">
                                <FaEnvelope title="E-Mail" />
                            </IconLink>
                            <IconLink target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aurelia-augusta-3a4ab982/">
                                <FaLinkedin title="LinkedIn"/>
                            </IconLink>
                            </IconDiv>
                        </Col>
                    </Row>

            </TextFader>
        )
    }
}