"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {LabelValue} from "@/types/app";
import {Modal} from "../Portals";

type Props = {
  icon: JSX.Element;
  options: LabelValue[];
  selected: LabelValue;
  setSelected: (value: LabelValue) => void;

  modalHeader: string;

  className?: string;
};

type BodyProps = {
  modalHeader: string;
  options: LabelValue[];
  setSelected: (value: LabelValue) => void;
  setIsOpen: (value: boolean) => void;
  selected: LabelValue;
};

function DropDownModal(props: Props) {
  const { icon, options, selected, setSelected, className, modalHeader } =
    props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Open Btn */}
      <button
        className={
          "w-full min-h-[inherit] flex items-center justify-between outline-none focus:outline-none " +
          className
        }
        onClick={() => setIsOpen((p) => !p)}
      >
        <div className="flex items-center justify-start gap-x-5">
          <span>{icon}</span>
          <span className="text-xl text-primary-600">{selected.label}</span>
        </div>

        <ChevronDownIcon
          className="w-7 h-7 text-primary-600"
          aria-hidden="true"
        />
      </button>

      {/* Menu */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalBody
          modalHeader={modalHeader}
          options={options}
          setSelected={setSelected}
          setIsOpen={setIsOpen}
          selected={selected}
        />
      </Modal>
    </>
  );
}

function ModalBody({
  modalHeader,
  options,
  setSelected,
  setIsOpen,
  selected,
}: BodyProps) {
  return (
    <motion.div initial={{ top: '-100%' }} animate={{ top: 0 }}
                transition={{type: 'spring', stiffness: 100, duration: 0.3}}
      className="relative min-w-[35rem] min-h-[35rem] max-w-[60rem] max-h-[60rem]
         bg-white shadow-2xl rounded-2xl flex flex-col gap-y-2"
    >
      {/* Header */}
      <div className="flex items-center justify-start border-b border-neutral-100 p-9">
        <h3 className="text-3xl font-medium text-primary-500 tracking-wider">
          {modalHeader}
        </h3>
      </div>

      {/* Options */}
      <div className="flex-1 overflow-y-auto">
        {options.map((option) => (
          <ModalOption
            key={option.value}
            option={option}
            click={setSelected}
            isSelected={selected.value === option.value}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-9 border-t border-neutral-100">
        <button
          className="text-xl text-primary-400 hover:text-primary-500"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>

        {/* Close Btn */}
        <button
          className="text-xl text-primary-400 hover:text-primary-500"
          onClick={() => setIsOpen(false)}
        >
          Done
        </button>
      </div>
    </motion.div>
  );
}

function ModalOption({
  option,
  isSelected,
  click,
}: {
  option: LabelValue;
  isSelected: boolean;
  click: (value: LabelValue) => void;
}) {
  if (isSelected) {
    console.log(option, isSelected);
  }

  return (
    <button
      value={option.value}
      onClick={() => click(option)}
      className={`w-full rounded-md py-5 text-xl border-b border-gray-100
      px-9 hover:text-primary-600 ${
        isSelected
          ? "text-primary-600 font-semibold"
          : "text-neutral-600 font-normal"
      }`}
    >
      {option.label}
    </button>
  );
}

export default DropDownModal;
