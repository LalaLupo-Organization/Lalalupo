"use client";
// import { store } from "@/redux/store";
// import { Provider } from "react-redux";

// export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
//   return <Provider store={store}>{children}</Provider>;
// };

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // storeRef.current.dispatch(initialState);
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
