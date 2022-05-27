import React, { useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import Swal from 'sweetalert2'

export default function Register(){
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

    function registerUser(e) {
        e.preventDefault()

        // clear all fields
        setEmail('')
        setPassword('')
        setVerifyPassword('')

        Swal.fire({
            title: 'Congratulations!',
            icon: 'success',
            text: 'You have successfully registered.'
        })
    }

    return(
        <React.Fragment>
            <h1>Register</h1>
            <Form onSubmit={e => registerUser(e)}>
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