import React from 'react'
import { Image, Text, View } from 'react-native'
import IconButton from './IconButton'

const ProfileDetails = () => {
  return (
    <View className='flex justify-center items-center'>
      <Image 
        source={require('../assets/images/icon.png')} 
        className="max-h-55, max-w-35, rounded-full "
      />
      <View className='bg-red-800 p-4  mt-4' >
        <Text className= "text-2xL font-bold ">Jose Paltan </Text>
        <Text className="text-xL font-bold text-gray-200 ">Estudiante</Text>
      </View>
      <View className="flex-row justify-center gap-4 mt-4">
        <IconButton icon="logo-instagram" pulsar={() => console.log("Instagram")} color="#D90072"></IconButton>
        <IconButton icon="logo-whatsapp" pulsar={() => console.log("Whatsapp")} color="#29B800"></IconButton>
        <IconButton icon='logo-x' pulsar={()=>console.log("X")} color='black'></IconButton>
        <IconButton icon='logo-pinterest' pulsar={()=>console.log("Pinterest")} color='red' ></IconButton>
      </View>
    </View>
  )
}

export default ProfileDetails