import {
  ForwardedRef,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

const useBottomSheet = (ref: ForwardedRef<BottomSheetModalMethods | null>) => {
  const sheetRef =
    useRef<BottomSheetModal>() as MutableRefObject<BottomSheetModal>;

  useImperativeHandle(ref, () => sheetRef.current, [sheetRef.current]);

  useEffect(() => {
    sheetRef.current?.present?.();
  }, []);

  const handleClose = () => {
    sheetRef?.current?.close?.();
  };

  return { sheetRef, handleClose };
};

export default useBottomSheet;
