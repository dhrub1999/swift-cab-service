import CaptainCard from "@/components/captain-card";
import CustomButton from "@/components/custom-button";
import TripLayout from "@/components/trip-layout";
import { useDriverStore } from "@/store";
import { router } from "expo-router";
import { FlatList, Text, View } from "react-native";

const ConfirmTrip = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();

  return (
    <TripLayout title="Choose your Captain" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <CaptainCard
            key={item?.id}
            item={item}
            selected={selectedDriver!}
            setSelected={() => setSelectedDriver(item?.id!)}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-5 mt-10">
            <CustomButton
              title="Select Captain"
              onPress={() => {
                router.push("/(root)/book-trip");
              }}
            />
          </View>
        )}
      />
    </TripLayout>
  );
};

export default ConfirmTrip;
