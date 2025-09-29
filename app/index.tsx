import ProfileDetails from "@/components/ProfileDetails";
import { View } from "react-native";
import "../global.css";
import MoreDetails from "@/components/MoreDetails";

export default function Index() {
  return (
    <View className="flex justify-center items-start bg-black w-screen h-screen">
      <ProfileDetails></ProfileDetails>
      <MoreDetails></MoreDetails>
    </View>
  );
}
