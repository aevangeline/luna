import React from 'react';
import {Row, Col} from 'react-grid-system';

export default class CV extends React.Component<{}, {}> {
    
    constructor(props : {}) {
        super(props)
        this.state = {};
    }

    render() {
       return( 
       <Row>
           <Col xs={12}>
                <h2>Curriculum Vitae</h2>
           </Col>
       </Row>
       )
    }
}