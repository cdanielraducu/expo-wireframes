import * as React from "react";
import { View, Modal as ModalRN, Pressable } from "react-native";
import Button from "../button/Button";
import CloseIcon from "../icons/CloseIcon";
import Text from "../text/Text";
import { makeStyles } from "../theme-builder/ThemeBuilder";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  closeButtonText?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  closeButtonText,
}) => {
  const [isCloseIconPressed, setIsCloseIconPressed] = React.useState(false);

  const styles = useStyles({ isCloseIconPressed });

  return (
    <ModalRN animationType="none" transparent={true} visible={isOpen}>
      <View style={styles.backdrop} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Pressable
            style={styles.closeIconContainer}
            onPressIn={() => setIsCloseIconPressed(true)}
            onPressOut={() => setIsCloseIconPressed(false)}
          >
            <CloseIcon width={16} height={16} />
          </Pressable>
          <Text header="h3" type="bold" style={styles.modalTitle}>
            MODAL
          </Text>
          {children}
          {closeButtonText && (
            <Button buttonLabel={closeButtonText} onPress={onClose} />
          )}
        </View>
      </View>
    </ModalRN>
  );
};

const useStyles = makeStyles(({ colors }, { isCloseIconPressed }) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  backdrop: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: colors.black,
    position: "absolute",
    opacity: 0.2,
  },
  content: {
    width: "100%",
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  modalTitle: {
    marginBottom: 12,
  },
  closeIconContainer: {
    position: "absolute",
    zIndex: 10,
    right: 12,
    top: 12,
    backgroundColor: isCloseIconPressed ? colors.grayDark : "transparent",
    borderRadius: 100,
    padding: 2,
  },
  closeIcon: {},
}));

export default Modal;
