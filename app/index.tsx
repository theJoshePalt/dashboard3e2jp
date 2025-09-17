import ProfileDetails from "@/components/profileDetails";
import { View } from "react-native";
import "../global.css";

export default function Index() {
  return (
    <View className="flex justify-center items-center bg-white w-screen h-screen">
      <ProfileDetails></ProfileDetails>
    </View>
  );
}
