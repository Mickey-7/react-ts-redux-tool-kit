// import useDispatch, useSelector & TypedUseSelectorHook
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import RootState & AppDispatch from store.ts
import {RootState, AppDispatch  } from "./store";

// export type selector of useSelector & useDispatch 
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
