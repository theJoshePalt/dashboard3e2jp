import "@/global.css"
import React from 'react'
import { Image, View } from 'react-native'

import CustomText from "./ui/CustomText"
import IconButton from "./ui/IconButton"


const ProfileDetails = () => {
  return (
    <View className="flex justify-center items-center h-1/2 w-screen">
      <Image 
        source={require('../assets/images/icon.png')} 
        className="max-h-36 max-w-36 rounded-full"
      />
      
      <View className='bg-red-800 p-4  mt-4 items-center rounded-xl'>
        <CustomText variant="title" value="Jose Paltan"/>
        <CustomText variant="subtitle" value="Estudiante"/>
      </View>
      <View className="flex-row gap-4 mt-9 p-4 items-strech">
        <IconButton icon="logo-instagram" pulsar={() => console.log("Instagram")} color="#8C0000" ></IconButton>
        <IconButton icon="logo-whatsapp" pulsar={() => console.log("Whatsapp")} color="#8C0000" ></IconButton>
        <IconButton icon='logo-x' pulsar={()=>console.log("X")} color='#8C0000' ></IconButton>
        <IconButton icon='logo-pinterest' pulsar={()=>console.log("Pinterest")} color='#8C0000' ></IconButton>
      </View>

      
    </View>
  )
}

export default ProfileDetails