import React, { useState } from 'react'
import { Card , Button , Alert} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';
import { Link , useNavigate } from 'react-router-dom';
import CenteredContainer from './CenteredContainer';
import styles from './Login.module.css'
export default function Profile() {
    const [error , setError] = useState('');
    const {currentUser , logout}=useAuth();
    const navigate=useNavigate();

    const logoutHandler=async()=>{
        setError('')
        try{
            await logout()
            navigate('/login')
        }
        catch{
            setError('Failed to Log Out')
        }
    }
  return (

    <div className= {styles.profileBg}>
    <CenteredContainer>
    <Card>
        <Card.Body className={styles.profileCardBg}>
        <h2 className='text-center mb-4' >PROFILE</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email : </strong> {currentUser.email}
        <Link to = "/update-profile" className='btn btn-dark w-100 mt-3'>Update Profile</Link>
        </Card.Body>
    {/* </Card> */}
    <div className='w-100 text-center mt-0 mb-2'>
        <Button variant='link' onClick={logoutHandler} className={styles.logout} >Log Out</Button>
    </div>
    </Card>
    </CenteredContainer>
    </div>
  )
}
