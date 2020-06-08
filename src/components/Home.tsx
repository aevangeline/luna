import React from 'react';
import { Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';

const HomeText = styled.p((props) => ({
    textAlign: "center",
    fontFamily: "'Quattrocento', serif",
    fontSize: "3vw",
}))

const roles = ["Researcher",
    "Meme Queen", "Software Engineer", "Black Trans Woman", "Policy"]
export default class Home extends React.Component<{}, {}> {

    constructor(props: {}) {
        super(props)
        this.state = props;
    }



    render() {
        return (
            <Row>
                <Col xs={12}>
                    <HomeText>Welcome</HomeText>
                    <HomeText>I'm Aurelia</HomeText>
                    <HomeText>I am a</HomeText>
                    <TextLoop children={roles} />
                </Col>
            </Row>

        )
    }
}