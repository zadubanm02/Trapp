import { Button, FormElement, Input, Modal, Text } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

interface ModalProps {
  visible: boolean;
  friendEmail: string;
  closeHandler: () => void;
  changeFriendEmail: (e: React.ChangeEvent<FormElement>) => void;
  saveData: () => void;
}

const AddFriendModal = ({
  visible,
  friendEmail,
  closeHandler,
  changeFriendEmail,
  saveData,
}: ModalProps) => {
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      width="470px"
      blur
    >
      <Modal.Header>
        <Text id="modal-title" className="font-bold text-2xl">
          Jak su na tom ostatni ?
        </Text>
      </Modal.Header>
      <Modal.Body className="m-5">
        <Image
          src={require("../../assets/Friends.png")}
          height={300}
          alt="Logo"
          className="rounded-xl m-3"
        />
        <Text className="my-3">
          Pozvi svojich priatelov a usetri si cas pytanim sa svojich starych ci
          mozes zorganizovat "Bro Friday". Pamataj "Bros before Hoes" Peace.
          &#9996;
        </Text>
        <Input
          className="mx-2"
          bordered
          placeholder="john.doe@gmail.com"
          id="email"
          onChange={changeFriendEmail}
          value={friendEmail}
          aria-label="email"
        />
      </Modal.Body>
      <Modal.Footer justify="center">
        <div>
          <Button className="mx-auto mb-4" auto onClick={saveData}>
            Pozvat priatela
          </Button>
          <Text
            color="primary"
            className="mx-auto text-lg"
            onClick={closeHandler}
          >
            Zavriet
          </Text>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFriendModal;
