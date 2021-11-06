import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState();
    return (
        <KeyboardAwareScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <View
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 55, marginRight: 300 }}
                >
                    <Image
                        source={require('../../assets/icons/back.png')}
                        resizeMode="contain"
                        style={{ height: 25, width: 25, marginTop: 50, backgroundColor: 'white' }}
                    />
                </View>
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 65 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#051c60', marginTop: 50 }}>
                    Forgot Password
                </Text>
            </View>
            <View >
                <Text style={{ color: '#051c60', alignItems: 'center', textAlign: 'center' }}>
                    Please enter your Password and{'\n'} we will send an email to reset your password
                </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TextInput
                    style={{ height: 50, width: 300, padding: 15, alignItems: 'center', borderRadius: 5, borderColor: 'grey', borderWidth: 1, margin: 12 }}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                />
            </View>
            <View style={{ padding: 10, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                    style={{ height: 50, width: 300, padding: 15, backgroundColor: '#2c62e4', alignItems: 'center', borderRadius: 5 }}
                >
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                        Reset Password
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    Remember Password? 
                    <Text style={{ fontWeight: "bold", color: '#2c62e4' }} onPress={() => navigation.navigate('Login')}>
                        Login
                    </Text>
                </Text>
            </View>
        </KeyboardAwareScrollView>
    );
}

export default ForgotPassword;