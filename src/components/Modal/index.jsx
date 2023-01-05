import { useState, useRef } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalTitle,
    TextField,
    FormLayout,
    Button
  } from '@react-ui-org/react-ui';
// import { Button } from '../Button/index';

export const ModalAddTitle = () => {
    
    const [modalOpen, setModalOpen] = useState(null)
    const modalPrimaryButtonRef = useRef()
    const modalCloseButtonRef = useRef()
    
    return (
        // <h4>Olá</h4>
      <>    
        {/* <Button 
            textDisplay="Adicionar título"
            onClick={() => setModalOpen(true)}
        /> */}
        <Button
            label="Launch modal"
            onClick={() => setModalOpen(true)}
            priority="outline"
        />
        <div>          
          {modalOpen && (
            <Modal
              closeButtonRef={modalCloseButtonRef}
              primaryButtonRef={modalPrimaryButtonRef}
            >
              <ModalHeader>
                <ModalTitle>Add new user</ModalTitle>
                <ModalCloseButton onClick={() => setModalOpen(false)} />
              </ModalHeader>
              <ModalBody>
                <ModalContent>
                  <FormLayout fieldLayout="horizontal">
                    <TextField label="Username" />
                    <TextField label="Password" type="password" />
                  </FormLayout>
                </ModalContent>
              </ModalBody>
              <ModalFooter>
                <Button
                  label="Save"
                  onClick={() => setModalOpen(false)}
                  ref={modalPrimaryButtonRef}
                />
                <Button
                  label="Close"
                  onClick={() => setModalOpen(false)}
                  priority="outline"
                  ref={modalCloseButtonRef}
                />
              </ModalFooter>
            </Modal>
          )}
        </div>
      </>
    );
}