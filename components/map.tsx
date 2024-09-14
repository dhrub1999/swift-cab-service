import { calculateRegion } from "@/lib/map";
import { useLocationStore } from "@/store";
import { View, Text } from "react-native";
import MapView, { PROVIDER_DEFAULT } from "react-native-maps";

const Map = () => {
  const {
    userLongitute,
    userLatitude,
    destinationLongitute,
    destinationLatitude,
  } = useLocationStore();
  const region = calculateRegion({
    userLatitude,
    userLongitute,
    destinationLatitude,
    destinationLongitute,
  });
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-2xl"
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterests={false}
      //   initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      <Text>Map</Text>
    </MapView>
  );
};

export default Map;
