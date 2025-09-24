import React from 'react'
import { Image, Text, View } from 'react-native'
import IconButton from './IconButton'

const ProfileDetails = () => {
  return (
    <View className='flex justify-center items-center'>
      <Image 
        source={require('../assets/images/icon.png')} 
        className="max-h-36, max-w-36 rounded-full"
      />
      <Text className= "text-2xL font-bold ">Jose Paltan </Text>
      <Text className="text-xL font-bold text-gray-400">Estudiante</Text>
      <View className="flex-row justify-center gap-4">
        <IconButton icon="logo-instagram" pulsar={() => console.log("Instagram")} color="pink"></IconButton>
        <IconButton icon="logo-whatsapp" pulsar={() => console.log("Whatsapp")} color="green"></IconButton>
        <IconButton icon='logo-x' pulsar={()=>console.log("X")} color='black'></IconButton>
        <IconButton icon='logo-pinterest' pulsar={()=>console.log("Pinterest")} color='red' ></IconButton>
      </View>
    </View>
  )
}

export default ProfileDetails