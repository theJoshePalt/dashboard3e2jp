import React from 'react'
import { View } from 'react-native'
import CustomText from './ui/CustomText'
import IconButton from './ui/IconButton'

const MoreDetails = () => {
  return (
    <View className='h-1/2 w-screen bg-zinc-800 rounded-t-3xl p-6 flex flex-col justify-start gap-4'>
      <CustomText value="SKILLS" variant="subtitle"></CustomText>
      <View className="flex-row justify-center items-center gap-4">
        <IconButton text='JP' pulsar={() => console.log("Nomb")} color="#8C0000"></IconButton>
        <IconButton text='Hh' pulsar={() => console.log("HeadHunter")} color="#8C0000"></IconButton>
        <IconButton text='Tp' pulsar={() => console.log("TP")} color="#8C0000"></IconButton>
        <IconButton text='SW' pulsar={() => console.log("sport")} color="#00A38B"></IconButton>
      </View>
      <CustomText value="EXP LEVEL" variant="subtitle"></CustomText>
      <CustomText value='17 años' variant='subtitle2' ></CustomText>

      <CustomText value="COLEGIO | TEAM | MEDIA" variant="subtitle"></CustomText>
      <CustomText value='UETS  ||  3E2  || 9.6/10' variant='subtitle2' ></CustomText>

      <CustomText value="NICKNAMES" variant="subtitle"></CustomText>
      <CustomText value='Joshe | Palti | Pepe' variant='subtitle2' ></CustomText>

    </View>
  )
}

export default MoreDetails