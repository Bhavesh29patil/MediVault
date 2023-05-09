import React, { useState } from 'react'
import { Card , Button , Alert} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';
import { Link , useNavigate } from 'react-router-dom';
import CenteredContainer from './CenteredContainer';

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
    <CenteredContainer>
    <Card>
        <Card.Body>
        <h2 className='text-center mb-4'>PROFILE</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email : </strong> {currentUser.email}
        <Link to = "/update-profile" className='btn btn-primary w-100 mt-3'>Update Profile</Link>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2'>
        <Button variant='link' onClick={logoutHandler}>Log Out</Button>
    </div>
    </CenteredContainer>
  )
}
