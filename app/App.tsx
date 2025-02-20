import React from 'react'; // <- ADICIONE ESSA LINHA
import { NavigationContainer } from '@react-navigation/native'
import RootLayout from './_layout'

export default function App() {
  return (
    <NavigationContainer>
      <RootLayout/>
    </NavigationContainer>
  )
}


