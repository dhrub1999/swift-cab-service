import { Text, View } from "react-native";
import CustomButton from "./custom-button";

const Payment = () => {
  const openPaymentSheet = async () => {};
  
  return (
    <>
      <CustomButton
        title="Confirm Payment"
        className="my-10"
        onPress={openPaymentSheet}
      />
    </>
  );
};

export default Payment;
