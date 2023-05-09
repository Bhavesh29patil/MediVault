import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth()
    const navigate = useNavigate()
    const imgStyle = {
        width:"200px",
        height:"200px",
        textAlign: "center",
        marginLeft: "20%"
        
      };

    async function formSubmitHandler(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords Do Not Match!')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        }
        catch {
            setError('Failed To Create and Account!')
        }
        setLoading(false)
    }

    return (
        <CenteredContainer>
            <Card>
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_06a6pf9i.json"  background="transparent"  speed="1"  style={imgStyle}  loop  autoplay></lottie-player>
                <Card.Body>
                    <h2 className='text-center mb-4'>SIGN-UP</h2>
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
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-3" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
                <div className='w-100 text-center mt-2'>
                    Already Have an Account? <Link to="/login">Log In</Link>
                </div >
            </Card >
        </CenteredContainer>
    )
}
