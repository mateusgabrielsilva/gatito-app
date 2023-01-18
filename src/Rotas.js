import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Servicos from './telas/Servicos'
import Carrinho from './telas/Carrinho'

import { cores } from './estilos'

const Tab = createBottomTabNavigator(); 

export default function  Rotas() {
    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: cores.roxo,
                tabBarInactiveTintColor: cores.claro,
                tabBarActiveBackgroundColor: cores.roxo,
                tabBarInactiveBackgroundColor: cores.laranja,
                tabBarStyle: {
                    height: 60,
                },
                tabBarLabelStyle: {
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 12,
                    lineHeight: 17,
                    paddingTop: 16,
                    backgroundColor: cores.laranja,
                    marginTop: 3
                },
                tabBarIconStyle: {
                    display: 'none'
                },
                tabBarHideOnKeyboard: true,
            }}
        >
            <Tab.Screen name="Serviços" component={Servicos} />
            <Tab.Screen name="Carrinho" component={Carrinho} />
        </Tab.Navigator>
    </NavigationContainer>
}