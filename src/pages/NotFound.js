import React from "react";
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'

export default function NotFound() {
    return(
        <Row>
            <Col>
                <div>
                    <h1>Page Not Found</h1>
                    <Link to="/">Go Home</Link>
                </div>
            </Col>
        </Row>
    )
}