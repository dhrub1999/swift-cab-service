import { Link, Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <SafeAreaView>
        <Text type="title">This screen doesn't exist.</Text>
        <Link href="/">Go to Home Screen</Link>
      </SafeAreaView>
    </>
  );
}
