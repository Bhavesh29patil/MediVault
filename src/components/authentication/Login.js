import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const navigate = useNavigate()

    async function formSubmitHandler(e) {
        e.preventDefault();

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")

        }
        catch {
            setError('Failed To Log In!')
        }
        setLoading(false)
    }

    return (
        <CenteredContainer>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>LOG-IN</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={formSubmitHandler}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-3" type="submit">Log In</Button>
                    </Form>
                </Card.Body>
                <div className='w-100 text-center mt-2'>
                    Don't Have an Account? <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
                </div>
                <div className='w-100 text-center mt-2'>
                    <Link to="/forgot-password" style={{ textDecoration: 'none' }}>Forgot Password ?</Link>
                </div>
            </Card>
        </CenteredContainer>
    )
}
