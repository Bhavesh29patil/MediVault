import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import CenteredContainer from './CenteredContainer'
import styles from './Login.module.css'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const navigate = useNavigate()

    function formSubmitHandler(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords Do Not Match!')
        }

        const promises = []
        setLoading(true)
        setError('')
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            navigate('/user')
        }).catch(() => {
            setError('Failed To Update Account')
        }).finally(() => {
            setLoading(false)
        })
    }

    return (


        <div className={styles.profileBg}>
            <CenteredContainer>
                <Card>
                    <Card.Body className={styles.profileCardBg}>
                        <h2 className='text-center mb-4'>UPDATE-PROFILE</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={formSubmitHandler}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}></Form.Control>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} placeholder='Leave Blank to keep same' ></Form.Control>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} placeholder='Leave Blank to keep same'></Form.Control>
                            </Form.Group>
                            <Button disabled={loading} className="btn btn-dark w-100 mt-3" type="submit">Update Profile</Button>
                        </Form>
                    </Card.Body>
                    <div className='w-100 text-center mt-2'>
                        <div className={styles.logFont}>
                        <Link to="/user">Cancel</Link>
                        </div>
                    </div >
                </Card >
            </CenteredContainer>
        </div>
    )
}