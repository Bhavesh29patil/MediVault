import React, { useState } from 'react'
import { Button, Modal , Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import {database} from '../../firebase'
import{ useAuth} from '../../contexts/AuthContext'
import { ROOT_FOLDER } from '../../hooks/useFolder'
import styles from './Dashboard.module.css'

export default function AddFolderButton({currentFolder}) {
    const [open,setOpen] = useState(false)
    const [name,setName] = useState('')
    const { currentUser}=useAuth()

    const openModal=()=>{
        setOpen(true)
    }
    const closeModal=()=>{
        setOpen(false)
    }

    const nameSetHandler=(event)=>{
        setName(event.target.value)
    }

    const formSubmitHandler=(e)=>{
        e.preventDefault()
        
        // creating a new folder in the database

        if(currentFolder==null)
        {
            return;
        }
        const path = [...currentFolder.path]
        if(currentFolder !== ROOT_FOLDER){
            path.push({name : currentFolder.name , id : currentFolder.id})
        }
        
        database.folders.add({
            name : name,
            parentId:currentFolder.id,
            userId:currentUser.uid,
            path: path,
            createdAt:database.getCurrentTimestamp()
        })

        setName("")
        closeModal()
    }

  return (
    <>
    <Button onClick={openModal} variant='btn btn-outline-success' size='lg' className={styles.btn}>
    <FontAwesomeIcon icon={faFolderPlus}/>
    </Button>
    <Modal show={open} onHide={closeModal}>
        <Form onSubmit={formSubmitHandler}>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Folder Name</Form.Label>
                        <Form.Control type = "text" required value={name} onChange={nameSetHandler}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='btn btn-secondary' onClick={closeModal}>Close</Button>
                <Button variant='btn btn-success' type = 'submit'>Add Folder</Button>
            </Modal.Footer>
        </Form>
    </Modal>
    </>
  )
}