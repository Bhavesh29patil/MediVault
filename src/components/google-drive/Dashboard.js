import React from 'react'
import NavbarComponent from './NavbarComponent'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import { useFolder } from '../../hooks/useFolder'
import Folder from './Folder'

export default function Dashboard() {
  const {folder , childFolders} = useFolder("GWYhwv1VZd0rrVTJS71U")
  console.log(childFolders)
  
  return (
    <>
      <NavbarComponent />
      <Container fluid>
        <AddFolderButton currentFolder={folder}/>
         {childFolders.length>0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) =>(
              <div key={childFolder.id} style={{ maxWidth:"250px "}} className="p-2"> 
                  <Folder folder={childFolder} />
                 </div> 
             ))} 
           </div> 
         )} 
      </Container>
    </>
  )
}
