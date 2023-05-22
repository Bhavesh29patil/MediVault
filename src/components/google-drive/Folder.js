import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import {Dropdown , Menu } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import {message} from "antd"

export default function Folder({folder}) {

  const folderDeleteHandler = () => {

  
      // console.log(file.id)
      const db = getFirestore();
  
      const docRef = doc(db, "folders", folder.id)
      deleteDoc(docRef)
        .then(() => {
          message.success(`${folder.name} Deleted Successfully`)
        })
        .catch(error => {
          console.log(error);
        })
  }

  const menu = (<Menu
    onClick={folderDeleteHandler}
    items={
    [{
    icon: <DeleteOutlined />,
    label: "Delete",
    key: "delete",
    danger: true
    }]} >

  </Menu>)

  return (
    <>
    <Dropdown overlay={menu} trigger={["contextMenu"]}>
    <Button to={{
      pathname : `/folder/${folder.id}`,
      state: {folder : folder},
    }} 
      variant="outline-dark" 
      className='text-truncate w-100 p-2' as={Link}>
    <FontAwesomeIcon icon={ faFolder} className='px-1' />
        {folder.name}
    </Button>
    </Dropdown>
    </>
  )
}