import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'
import Img1 from '../../Assets/MediVaultWebsite.png'
import styles from './Login.module.css'
// import Lottie from 'react-lottie';
// import animationData from './doc.json'

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
            setError('Failed To Create an Account!')
        }
        setLoading(false)
    }

    return (
        <>
         <div className={styles.main}>

            <div className={styles.login_img}>
                <img src={Img1}></img>
            </div>

            <div className={styles.loginBg}>
                <CenteredContainer>
                    <Card>
                        <Card.Body className={styles.cardBody}>
                            <h2 className='text-center mb-4'>Signup</h2>
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
                                <Button disabled={loading} variant='dark' className="w-100 mt-3" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                        <div className={styles.logFont}>
                        <div className='w-100 text-center mt-2 mb-2'>
                            Already Have an Account? <Link to="/login">Log In</Link>
                        </div >
                        </div>
                    </Card >
                </CenteredContainer>
            </div>
        </div>
        </>
    )
}