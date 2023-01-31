import {
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from "@gorhom/bottom-sheet";
import { forwardRef, ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import CustomBackdrop from "./CustomBackdrop";
import useBottomSheet from "./useBottomSheet";

const INITIAL_SNAP_POINTS = ["CONTENT_HEIGHT"];

interface BottomSheetWrapperProps {
  children?: ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  testID?: string;
}

const BottomSheetWrapper = forwardRef<
  BottomSheetModal | null,
  BottomSheetWrapperProps
>(({ children, contentStyle, testID }, ref) => {
  const { sheetRef, handleClose } = useBottomSheet(ref);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(INITIAL_SNAP_POINTS);

  return (
    <BottomSheetModal
      ref={sheetRef}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      enablePanDownToClose
      index={-1}
      backdropComponent={({
        animatedIndex,
        style,
        animatedPosition,
      }: BottomSheetBackdropProps) => (
        <CustomBackdrop
          animatedIndex={animatedIndex}
          style={style}
          animatedPosition={animatedPosition}
          handleClose={handleClose}
        />
      )}
      // Don't delete this prop
      // When we close the modal by default it will also dismiss it (unmount it). We don't want that.
      enableDismissOnClose={false}
    >
      <BottomSheetView
        style={[contentStyle, { paddingBottom: 16 }]}
        testID={testID}
        onLayout={handleContentLayout}
      >
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export default BottomSheetWrapper;
