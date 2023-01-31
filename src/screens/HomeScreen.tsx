import { View } from "react-native";
import { useAuth0 } from "react-native-auth0";
import Button from "src/button/Button";
import ScreenTitle from "src/screen-title/ScreenTitle";
import Text from "src/text/Text";
import { makeStyles } from "src/theme-builder/ThemeBuilder";

const HomeScreen: React.FC = () => {
  const { authorize, clearSession, user } = useAuth0();
  const styles = useStyles();

  const onLogin = async () => {
    try {
      await authorize({ scope: "openid profile email" });
    } catch (e) {
      console.log(e);
    }
  };

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log("Log out cancelled");
    }
  };

  const loggedIn = user !== undefined && user !== null;

  return (
    <View>
      <ScreenTitle>Home</ScreenTitle>

      {loggedIn && <Text>You are logged in as {user.name}</Text>}
      {!loggedIn && <Text>You are not logged in</Text>}

      <Button
        onPress={loggedIn ? onLogout : onLogin}
        buttonLabel={loggedIn ? "Log Out" : "Log In"}
      />
    </View>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
}));

export default HomeScreen;
