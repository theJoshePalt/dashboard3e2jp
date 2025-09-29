import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons' 

interface IconButtonProps {
  pulsar: () => void;
  enlace?: string;
  icon?: string;
  color: string;
  text?: string;
  
}

const IconButton = ({icon , pulsar , enlace, color , text}:IconButtonProps) => {
  return (
    
    <Pressable onPress={pulsar} className='bg-black rounded-xl p-3 border-b-4 border-r-2 border-gray-500 justify-center items-center'>
        {icon ? 
        <Ionicons name={icon as any} size={24} color={color}/>
        :
          <Text style={{color: color}} className='text-center text-red-600 font-bold'>{text}</Text>
        }
    </Pressable>
    
    
  )
}

export default IconButton