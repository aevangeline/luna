import React from 'react';
import {Row, Col} from 'react-grid-system';

export default class Research extends React.Component<{}, {}> {
    
    constructor(props : {}) {
        super(props)
        this.state = {};
    }

    render() {
       return( 
       <Row>
           <Col xs={12}>
                <h2> Research page</h2>
           </Col>
       </Row>
       )
    }
}