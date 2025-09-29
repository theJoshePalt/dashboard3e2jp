import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons' 

interface IconButtonProps {
  pulsar: () => void;
  enlace?: string;
  icon: string;
  color:string;
  
}

const IconButton = ({icon , pulsar , enlace, color}:IconButtonProps) => {
  return (
    
    <Pressable onPress={pulsar} className='bg-black rounded-xl p-3 border-b-4 border-r-2 border-gray-500'>
        <Ionicons name={icon as any} size={24} color={color}/>
        
    </Pressable>
    
    
  )
}

export default IconButton