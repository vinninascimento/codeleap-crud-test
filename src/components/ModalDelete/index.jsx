import React, { useState } from 'react'

import { Button, Modal, Icon } from 'semantic-ui-react'
import trash from '../../assets/images/trash.svg'
import deletePost from '../../service/api/delete'


const ModalDelete = (props) => {
  const { id, loadPost } = props
  const [open, setOpen] = useState(false)

  const delPost = async (id) => {
    try {
      await deletePost(id)
      await loadPost()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<button type="button" className="header-post-btn"><img src={trash} alt="trash icon" /></button>}
    >
      <Modal.Content>
        <Modal.Description>
          <strong>Are you sure you want to DELETE</strong> this item ?
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> CANCEL
        </Button>
        <Button  onClick={() => delPost(id)}>
          <Icon name='checkmark' /> DELETE
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalDelete