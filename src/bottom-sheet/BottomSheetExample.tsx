import { forwardRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import useBottomSheet from "./useBottomSheet";
import BottomSheetWrapper from "./BottomSheetWrapper";
import ScreenTitle from "../screen-title/ScreenTitle";
import Text from "../text/Text";
import Button from "../button/Button";
import { makeStyles } from "../theme-builder/ThemeBuilder";

interface BottomSheetExampleProps {
  title: string;
  description: string;
  buttonText?: string;
  onPress?: () => void;
}

const BottomSheetExample = forwardRef<
  BottomSheetModal | null,
  BottomSheetExampleProps
>(({ title, description, buttonText, onPress }, ref) => {
  const styles = useStyles();

  const { sheetRef, handleClose } = useBottomSheet(ref);

  return (
    <BottomSheetWrapper ref={sheetRef} contentStyle={styles.content}>
      <ScreenTitle style={styles.title}>{title}</ScreenTitle>
      <Text style={styles.description}>{description}</Text>
      {buttonText && (
        <Button
          style={styles.deleteButton}
          buttonLabel={buttonText}
          onPress={() => {
            onPress?.();
            handleClose();
          }}
        />
      )}
      <Button
        style={styles.cancelButton}
        buttonLabel="Cancel"
        buttonType="secondary"
        onPress={handleClose}
      />
    </BottomSheetWrapper>
  );
});

const useStyles = makeStyles(({ colors }) => ({
  content: {
    paddingHorizontal: 20,
  },
  title: { marginTop: 16 },
  description: { fontSize: 16, lineHeight: 18, color: colors.gray },
  deleteButton: { marginTop: 32, marginBottom: 16 },
  cancelButton: { marginBottom: 16 },
}));

export default BottomSheetExample;
