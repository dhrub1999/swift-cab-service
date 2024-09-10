import { useRef, useState } from "react";

import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { onBoarding } from "@/constants";
import CustomButton from "@/components/custom-button";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onBoarding.length - 1;

  return (
    <SafeAreaView className="flex h-full items-center justify-center">
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        className="justify-end w-full flex items-end p-5"
      >
        <Text className="text-neutral-900 font-JakartaBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-[32px] h-1 mx-1 rounded-full bg-[#E2E8F0]" />}
        activeDot={
          <View className="w-[32px] h-1 mx-1 rounded-full bg-[#5242F5]" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onBoarding.map((item) => (
          <View key={item.id} className="flex p-5 justify-center items-center">
            <Image source={item.image} className="w-full h-[300px]" />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-3xl font-bold text-neutral-900 mx-10 text-center font-JakartaBold">
                {item.title}
              </Text>
            </View>
            <Text className="text-md font-JakartaSemiBold text-center text-neutral-500 mx-10 mt-2">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10 mb-4"
      />
    </SafeAreaView>
  );
};

export default Welcome;
