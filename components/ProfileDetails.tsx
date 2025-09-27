import React from 'react'
import IconButton from './IconButton'
import { Image, View } from 'react-native'
import CustomText from "./CustomText"

const ProfileDetails = () => {
  return (
    <View className='flex justify-center items-center'>
      <Image 
        source={require('../assets/images/icon.png')} 
        className="max-h-55, max-w-35, rounded-full "
      />
      
      <View className='bg-red-800 p-4  mt-4 items-center rounded-xl' >
        <CustomText variant="title" value="Jose Paltan"/>
        <CustomText variant="subtitle" value="Estudiante"/>
      </View>
      <View className="flex-row gap-4 mt-9 p-4 rounded-xl bg-gray-400 justify-end items-strech">
        <IconButton icon="logo-instagram" pulsar={() => console.log("Instagram")} color="#8C0000"></IconButton>
        <IconButton icon="logo-whatsapp" pulsar={() => console.log("Whatsapp")} color="#8C0000"></IconButton>
        <IconButton icon='logo-x' pulsar={()=>console.log("X")} color='#8C0000'></IconButton>
        <IconButton icon='logo-pinterest' pulsar={()=>console.log("Pinterest")} color='#8C0000' ></IconButton>
      </View>

      
    </View>
  )
}

export default ProfileDetails