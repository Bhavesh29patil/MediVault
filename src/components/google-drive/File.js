import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import {Dropdown , Menu } from "antd"
import { DeleteOutlined } from "@ant-design/icons"
import {message} from "antd"

export default function File({ file }) {


  const fileDeleteHandler = () => {

    const db = getFirestore();

    // console.log(file.id)

    const docRef = doc(db, "files", file.id)
    deleteDoc(docRef)
      .then(() => {
        message.success(`${file.name} Deleted Successfully`)
      })
      .catch(error => {
        console.log(error);
      })
    //   const fileRef = storage.refFromURL(file.url)
    //   console.log("file exists")
    //   fileRef.delete().then(function () {

    //     // File deleted successfully
    //     console.log("File Deleted")
    // }).catch(function (error) {
    //     // Some Error occurred
    // });

    // const desertRef = storage.ref(storage, file.url);
    // storage.deleteObject(desertRef).then(() => {
    //   console.log("deleted successullly")
    // }).catch((error) => {
    //  console.log(error)
    // });


  }
    const menu = (<Menu
      onClick={fileDeleteHandler}
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
      <div className='d-inline-flex-wrap'>
        <Dropdown overlay={menu} trigger={["contextMenu"]}>
          <a href={file.url} target="_blank" className="btn btn-outline-dark text-truncate w-100 p-2" >
            <FontAwesomeIcon icon={faFile} className="px-1" />
            {file.name}
          </a>
        </Dropdown>
      </div>


    </>
  )
}