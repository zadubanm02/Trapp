import { Modal, Input, Button, Text } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { InternalFriend } from "../new/RowFriend";

interface ModalProps {
  visible: boolean;
  friend: InternalFriend | undefined;
  closeHandler: () => void;
  saveData: () => void;
}

const FriendModal = ({
  visible,
  friend,
  closeHandler,
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
          {friend?.name}
        </Text>
      </Modal.Header>
      <Modal.Body className="m-5 text-center">
        <div className="mx-8">
          <Image
            src={require("../../assets/Friends.png")}
            height={300}
            width={300}
            alt="Logo"
            className="rounded-full m-3"
          />
        </div>
        <Text className="my-3">
          {friend?.name} ma momentalne taketo skore &#9996;
        </Text>
        <h2 className="text-center font-extrabold text-5xl text-gray-700">
          {friend?.value}
        </h2>
      </Modal.Body>
      <Modal.Footer justify="center">
        <div>
          <Button className="mx-auto mb-4" auto onClick={saveData}>
            Informuj ma o moznosti ist von
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

export default FriendModal;
