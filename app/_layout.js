import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { SplashScreen, Stack } from "expo-router";
import { GluestackUIProvider, config } from "@gluestack-ui/themed";


export default () => {
    
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <GluestackUIProvider config={config.theme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerTitle: "Login", headerShown: false }}
          />
        </Stack>
      </GluestackUIProvider>
    </>
  );
};
