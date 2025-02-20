import { Tabs } from 'expo-router';
import React from 'react';
import { Stack } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={30} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="passwords/index"
        options={{
          title: 'Passwords',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'lock-open-outline' : 'lock-outline'} size={30} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
