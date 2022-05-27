import React, { useState, useEffect } from 'react'
import {Card, Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

// built-in state management

export default function CourseCard({course}){
    let [ count, setCount ] = useState(0)
    let [ seats, setSeats ] = useState(30)

    // disabling enroll button
    let [ isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        if(seats === 0) {
            setIsOpen(false)
        }
    }, [seats])

    function enroll(){
        setCount(count + 1)
        setSeats(seats - 1) 
    }

    return(
        <Card className="my-3">
            <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{course.description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>Php {course.price}</Card.Text>
                <Card.Text>Enrollees: {count}</Card.Text>
                {isOpen ? 
                    <Button variant="primary" onClick={() => { enroll() }}>Enroll</Button>
                    :
                    <Button variant="primary" onClick={() => { enroll() }} disabled>Enroll</Button>
                }
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