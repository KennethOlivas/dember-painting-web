import { Modal, ModalContent, useDisclosure } from '@nextui-org/react'
import React, { FC } from 'react'

interface Props {
  isOpen: boolean;
  onOpenChange: () => void
}

const Video: FC<Props> = ({ isOpen, onOpenChange }) => {


  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
      <ModalContent>
        <video controls autoPlay>
          <source src="./video/DEMBER_VIDEO_WEB.mp4" type="video/mp4" />
        </video>
      </ModalContent>
    </Modal>
  )
}

export default Video
