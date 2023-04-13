import { createContext } from "react";

export interface ModalContextInterface {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextInterface>({
  modalIsOpen: true,
  setModalIsOpen: () => null,
});
