import React from 'react';
import {Row, Col} from 'react-grid-system';
import {Header, Container, Descriptor, PaperLink} from "./PageStyles";
import {CitationData} from '../constants/CitationData';

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
                    {CitationData.map((citation, idx) =>
                        <div className="citation" key={idx}>
                            <Descriptor> {citation.body} <PaperLink target="_blank" rel="noopener noreferrer" href={citation.link}>{citation.link}</PaperLink> </Descriptor>
                        </div>
                    )}

               </Container>
           </Col>
       </Row>
       )
    }
}