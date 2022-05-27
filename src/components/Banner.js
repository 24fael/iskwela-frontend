import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'

export default function Banner(props){
    return(
        <Row>
            <Col className='p-5 mt-3 shadow-sm'>
                <h1>Iskwela</h1>
                <p>Opportunities for Everyone, Everywhere</p>
                <Button variant="primary">Enroll Now!</Button>
            </Col>
        </Row>
    )
}