//ride-layout

import { icons } from "@/constants";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Map from "./map";
import { useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const TripLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
        <View className="flex flex-col h-screen bg-blue-500">
          <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
            <TouchableOpacity onPress={() => router.back()}>
              <View className="h-10 w-10 bg-white rounded-full justify-center items-center">
                <Image
                  source={icons.backArrow}
                  className="w-6 h-6"
                  alt="back arrow"
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
            <Text className="text-xl font-JakartaSemiBold ml-5">
              {title || "Go Back"}
            </Text>
          </View>
          <Map />
        </View>

        <BottomSheet
          keyboardBehavior="extend"
          ref={bottomSheetRef}
          snapPoints={["40%", "80%"]}
        >
          <BottomSheetView style={{ flex: 1, padding: 20 }}>
            {children}
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default TripLayout;
