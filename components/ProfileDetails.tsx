import React from 'react'
import { Image, Text, View } from 'react-native'

const ProfileDetails = () => {
  return (
    <View className='flex justify-center items-center'>
      <Image 
        source={require('../assets/images/icon.png')} 
        className="max-h-36, max-w-36 rounded-full"
      />
      <Text className= "text-2xL font-bold ">Jose Paltan </Text>
      <Text className="text-xL font-bold text-gray-400">Estudiante</Text>

      
    </View>
  )
}

export default ProfileDetails