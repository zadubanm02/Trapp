import { Modal, Input, Button, Text } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { InternalFriend } from "../new/RowFriend";
import { FormattedMessage } from "react-intl";
import { Friend } from "../../types";

interface ModalProps {
  visible: boolean;
  friend: Friend | undefined;
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
      className=" dark:bg-slate-800"
    >
      <Modal.Header>
        <Text
          id="modal-title"
          className="font-bold text-2xl dark:text-slate-50"
        >
          {friend?.displayName}
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
        <Text className="my-3 dark:text-slate-50 text-center">
          <FormattedMessage
            id="modal.friend.text"
            values={{ name: friend?.displayName }}
          />{" "}
          &#9996;
        </Text>
        <h2 className="text-center font-extrabold text-5xl text-gray-700 dark:text-slate-100">
          {friend?.value}
        </h2>
      </Modal.Body>
      <Modal.Footer justify="center">
        <div>
          <Button className="mx-auto mb-4" auto onClick={saveData}>
            <FormattedMessage id="modal.friend.button" />
          </Button>
          <Text
            color="primary"
            className=" text-lg text-center"
            onClick={closeHandler}
          >
            <FormattedMessage id="modal.friend.close" />
          </Text>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default FriendModal;
