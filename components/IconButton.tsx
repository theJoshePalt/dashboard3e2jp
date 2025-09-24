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
    <Pressable onPress={pulsar}>
        
        <Ionicons name={icon as any} size={24} color="black" />
        
    </Pressable>
    
  )
}

export default IconButton