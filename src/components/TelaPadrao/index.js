import React from  'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import estilosGlobal, { cores } from '../../estilos'


export default function TelaPadrao({children}) {
    return <>
        <SafeAreaView style={estilosGlobal.preencher}>
            <StatusBar style="light" backgroundColor={cores.roxo} />
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? "padding" : "height"}
                style={estilosGlobal.preencher}
            >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
    </>
}