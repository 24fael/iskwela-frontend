import React, {useState, useEffect} from "react";
import { Form, Button } from 'react-bootstrap'
import Swal from "sweetalert2";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // button
    const [isActive, setIsActive] = useState(true)

    useEffect(() => {
        if(email !== '' && password !== '')
        {
            setIsActive(true)
        }
        else
        {
            setIsActive(false)
        }
    }, [email, password])

    function authenticate(event) {
        event.preventDefault()

        localStorage.setItem('user_email', email)
        localStorage.setItem('user_password', password)

        setEmail('')
        setPassword('')

        Swal.fire({
            title: 'Success',
            icon: 'success',
            text: 'Logged in!'
        })
    }

    return (
        <Form className='mt-5' onSubmit={authenticate}>
            <h1>Login</h1>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter your Email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter your Password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </Form.Group>
            <div></div>
            {isActive ? 
                <Button variant="primary" type="submit" className="mt-2">Login</Button>
                :
                <Button variant="primary" type="submit" className="mt-2" disabled>Login</Button>
            }   
        </Form>
    )
}