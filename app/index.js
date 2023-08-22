import { Box, Button, ButtonSpinner, ButtonText, Divider, Input, InputInput } from "@gluestack-ui/themed";
import { KeyboardAvoidingView, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from "../assets/icon.png";

export default function Page() {
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View className="flex-1 p-4 flex items-center justify-center">
          <Image source={Logo} className="w-[100px] h-[150px] " />
          <Text className="font-Poppins_600 text-2xl mt-2 text-orange-500">
            FIREGUARD
          </Text>
          <Text className="self-start font-Poppins_500 text-lg mt-10">
            Sign In
          </Text>
          <Divider marginVertical={4} />
          <View className="mt-4 w-full">
            <Input variant="outline" size="lg">
              <InputInput placeholder="Email" keyboardType="email-address" />
            </Input>
          </View>
          <View className="mt-4 w-full">
            <Input variant="outline" size="lg">
              <InputInput
                placeholder="Password"
                keyboardType="url"
                secureTextEntry
                
              />
            </Input>
          </View>
          <View className="w-full">
            <Button size="lg" className="bg-orange-500">
              <Text className="font-Poppins_500">Sign In</Text>
              <ButtonSpinner/>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
