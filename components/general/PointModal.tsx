import { Modal, Input, Button, Text, FormElement } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
import { FirebaseCalendar } from "../../types";
import { format } from "date-fns";

interface ModalProps {
  visible: boolean;
  increaseValue: () => void;
  decreaseValue: () => void;
  value: number;
  closeHandler: () => void;
  changeValue: (e: React.ChangeEvent<FormElement>) => void;
  saveData: () => void;
  data?: FirebaseCalendar;
}

const PointModal = ({
  visible,
  increaseValue,
  decreaseValue,
  saveData,
  value,
  closeHandler,
  changeValue,
  data,
}: ModalProps) => {
  console.log("DATA in component", data);
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
      width="470px"
      blur
    >
      {data ? (
        <>
          <Modal.Header>
            <Text id="modal-title" className="font-bold text-2xl">
              {format(data.day, "dd MMM yyyy")}
            </Text>
          </Modal.Header>
          <Modal.Body className="m-5">
            <Image
              src={require("../../assets/She1.png")}
              height={300}
              alt="Logo"
              className="rounded-xl m-3"
            />
            <Text className="my-3 text-center">Si nazbieral taketo skore</Text>
            <div className="px-6 py-3 rounded-full bg-sky-100 m-4 flex justify-center self-center items-center">
              <p className="text-center text-2xl w-full text-sky-700 font-bold">
                {data.value}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer justify="center">
            <div>
              <Button className="mx-auto mb-4" auto onClick={saveData}>
                Potvrdit
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
        </>
      ) : (
        <>
          <Modal.Header>
            <Text id="modal-title" className="font-bold text-2xl">
              Aky si dnes bol ?
            </Text>
          </Modal.Header>
          <Modal.Body className="m-5">
            <Image
              src={require("../../assets/She1.png")}
              height={300}
              alt="Logo"
              className="rounded-xl m-3"
            />
            <Text className="my-3">
              Na základe tvojej pani dôležitých otázok si zodpovedaj na kolko
              bodov si dnes bol dobrý partner do života. Bol si doma? Splnil si
              základné povinnosti? Odpovedz si na základné otázky a oboduj -10
              až 10.
            </Text>
            {/* <div className="flex flex-row justify-between items-center">
          <div></div>
          <button className="w-3" onClick={increaseValue}>
            +
          </button>
          <Input
            min={-10}
            max={10}
            type="number"
            inputMode="numeric"
            width="100px"
            color="primary"
            value={value}
            onChange={changeValue}
          />
          <button className="w-3 text-xl" onClick={decreaseValue}>
            -
          </button>
          <div></div>
        </div>  */}
            <input
              type="range"
              className="
                my-5
                appearance-none
                rounded-lg
                w-full
                h-2
                bg-slate-100
                focus:outline-none focus:ring-0 focus:shadow-none
                "
              min="-10"
              max="10"
              step="1"
              id="customRange3"
              value={value}
              onChange={changeValue}
            />
            <p className="text-center text-2xl w-full mt-3">{value}</p>
          </Modal.Body>
          <Modal.Footer justify="center">
            <div>
              <Button className="mx-auto mb-4" auto onClick={saveData}>
                Potvrdit
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
        </>
      )}
    </Modal>
  );
};

export default PointModal;
