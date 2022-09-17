import { Button, FormElement, Input, Modal, Text } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

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
      className="px-2 dark:bg-slate-800"
    >
      <Modal.Header className="p-10" color="">
        <h1 id="modal-title" className="font-bold text-2xl dark:text-slate-50">
          <FormattedMessage id="modal.addFriend.title" />
        </h1>
      </Modal.Header>
      <Modal.Body className="p-10 ">
        <Image
          src={require("../../assets/Friends.png")}
          height={300}
          alt="Logo"
          className="rounded-xl m-3"
        />
        <p className="my-8 dark:text-slate-50">
          <FormattedMessage id="modal.addFriend.text" />
          &#9996;
        </p>
        <Input
          className="mx-2  dark:bg-slate-700 placeholder:text-slate-800"
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
            <FormattedMessage id="modal.addFriend.invite" />
          </Button>
          <Text
            color="primary"
            className="mx-auto text-lg"
            onClick={closeHandler}
          >
            <FormattedMessage id="modal.addFriend.close" />
          </Text>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default AddFriendModal;
