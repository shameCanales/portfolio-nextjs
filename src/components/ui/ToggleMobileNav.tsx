"use client";

import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/lib/store/store";
import { uiActions } from "@/lib/store/ui-slice";
import { ReactNode } from "react";

export default function ToggleMobileNav({ children }: { children: ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();

  function handleToggleMenu() {
    dispatch(uiActions.toggleMobileNav());
  }

  return <button onClick={handleToggleMenu}>{children}</button>;
}
