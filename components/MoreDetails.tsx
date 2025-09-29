import React from 'react'
import { View } from 'react-native'
import CustomText from './ui/CustomText'
import IconButton from './ui/IconButton'

const MoreDetails = () => {
  return (
    <View className='h-1/2 w-screen bg-zinc-800 rounded-t-3xl p-6 flex flex-col justify-start gap-4'>
      <CustomText value="Skill" variant="subtitle"></CustomText>
      <View className="flex-row justify-center items-center gap-4">
        <IconButton icon="airplane" pulsar={() => console.log("Instagram")} color="#750000"></IconButton>
        <IconButton icon="accessibility" pulsar={() => console.log("Whatsapp")} color="#A30000"></IconButton>
        <IconButton icon="water" pulsar={() => console.log("sport")} color="#00C9AB"></IconButton>
        <IconButton icon="apps" pulsar={() => console.log("apps")} color="#D10000"></IconButton>
        
      </View>
      <CustomText value="Experiencia" variant="subtitle"></CustomText>
      <CustomText value='17 años' variant='subtitle2' ></CustomText>
    </View>
  )
}

export default MoreDetails