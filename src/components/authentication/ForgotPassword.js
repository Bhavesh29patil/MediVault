import React , {useRef, useState} from 'react'
import { Form, Button, Card , Alert} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'

export default function ForgotPassword() {
    const emailRef = useRef()
    const [error , setError] = useState('')
    const [loading , setLoading] = useState(false)
    const [message , setMessage] = useState('')
    const {resetPassword} = useAuth()

    const formSubmitHandler=async(e)=>{
        e.preventDefault();

        try{
        setMessage('')
        setError('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage('Check Your Inbox for Further Instructions')
    } 
    catch{
        setError('Failed To Reset Password!')
    }
    setLoading(false)
    }

    return (
        <CenteredContainer>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>RESET-PASSWORD</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={formSubmitHandler}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                    
                        <Button disabled={loading}className="w-100 mt-3" type="submit">Reset Password</Button>
                    </Form>
                </Card.Body>
                <div className='w-100 text-center mt-2'>
                    Don't Have an Account? <Link to ="/signup" style={{textDecoration: 'none'}}>Sign Up</Link>
                </div>
                <div className='w-100 text-center mt-2'>
                    <Link to="/login" style={{textDecoration: 'none'}}>Login ?</Link>
                </div>
            </Card>
        </CenteredContainer>
    )
}
