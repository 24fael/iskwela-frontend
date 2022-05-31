import React, { useState, useEffect } from 'react'
import {Card, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

// built-in state management

export default function CourseCard({course}){
    return(
        <Card className="my-3">
            <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{course.description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>Php {course.price}</Card.Text>

                <Button variant="primary" as={Link} to={`/courses/${course._id}`}>Details</Button>
            </Card.Body>
        </Card>
    )
}

CourseCard.propTypes = {
    course: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}