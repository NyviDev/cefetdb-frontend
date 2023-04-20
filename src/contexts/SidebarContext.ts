import { createContext } from "react";

export interface SidebarContextInterface {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarContext = createContext<SidebarContextInterface>({
  sidebarIsOpen: true,
  setSidebarIsOpen: () => null,
});
