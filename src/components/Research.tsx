import React from 'react';
import {Row, Col} from 'react-grid-system';
import {Header, Container, SubHeader} from "./PageStyles";

export default class Research extends React.Component<{}, {}> {
    
    constructor(props : {}) {
        super(props)
        this.state = {};
    }

    render() {
       return( 
       <Row justify="center">
           <Col xs={10}>
               <Container>
                    <Header>Research</Header>
               <    SubHeader>Under Construction : Pending name change on previous publications</SubHeader>
               </Container>
           </Col>
       </Row>
       )
    }
}