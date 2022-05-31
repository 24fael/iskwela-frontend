import React, { useEffect, useState, useContext } from 'react'
import {Form, Button} from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import UserContext from '../contexts/UserContext'

export default function Register(){
    const { user } = useContext(UserContext)
    let navigate = useNavigate()

    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')
    let [mobileNumber, setMobileNumber] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [verifyPassword, setVerifyPassword] = useState('')
    let [isActive, setisActive] = useState(false)

    useEffect(() => {
        if(
            (email !== '' && password !== '' && verifyPassword !== '')
            &&
            (password === verifyPassword)
        )
        {
            setisActive(true)
        }else {
            setisActive(false)
        }
    }, [email, password, verifyPassword])

    function registerUser(event) {
        event.preventDefault()

        fetch('http://localhost:4000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
                mobile_number: mobileNumber
            })
        })
        .then(response => {
            Swal.fire({
                title: 'Success',
                icon: 'success',
                text: 'Successfully registered! You may now log in.'
            })

            // clear all fields
            setFirstName('')
            setLastName('')
            setMobileNumber('')
            setEmail('')
            setPassword('')
            setVerifyPassword('')

            navigate('/login')
        })
    }

    return(
        (user.accessToken !== null) ?
            <Navigate to='/courses'/>
        :
        <React.Fragment>
            <h1>Register</h1>
            <Form onSubmit={e => registerUser(e)}>
                <Form.Group>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your First Name"
                        required
                        value={firstName}
                        onChange={(event) => {setFirstName(event.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Last Name"
                        required
                        value={lastName}
                        onChange={(event) => {setLastName(event.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mobile Number:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Mobile Number"
                        required
                        value={mobileNumber}
                        onChange={(event) => {setMobileNumber(event.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your Email"
                        required
                        value={email}
                        onChange={(event) => {setEmail(event.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your Password"
                        required
                        value={password}
                        onChange={(event) => {setPassword(event.target.value)}}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Verify Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Verify your Password"
                        required
                        value={verifyPassword}
                        onChange={(event) => {setVerifyPassword(event.target.value)}}
                    />
                </Form.Group>
                <Form.Text className="text-muted">
                We'll never share your data with anyone.
                </Form.Text>
                <div></div>
                {isActive ? 
                    <Button variant="primary" type="submit" className="mt-2">Register</Button>
                    :
                    <Button variant="primary" type="submit" className="mt-2" disabled>Register</Button>
                }
            </Form>
        </React.Fragment>
    )
}