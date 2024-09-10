import { Image, Text, View } from "react-native";
import CustomButton from "./custom-button";
import { icons } from "@/constants";

const OAuth = () => {
  const handleGoogleLogin = async () => {};
  return (
    <View className="flex flexx-row justify-center items-center mt-4 gap-x-3">
      <View className="flex-1 h-[1px] bg-general-100" />
      <Text className="text-lg">or</Text>
      <View className="flex-1 h-[1px] bg-general-100" />

      <CustomButton
        title="Sign in with Google"
        className="mt-5 w-full shadow-none"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 mx-2 h-5"
          />
        )}
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleLogin}
      />
    </View>
  );
};

export default OAuth;
