import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUp = ({ navigation }) => {

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#051c60' }}>
                    Create Account
                </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TextInput
                    style={{ height: 50, width: 300, padding: 15, alignItems: 'center', borderRadius: 5, borderColor: 'grey', borderWidth: 1, margin: 12 }}
                    onChangeText={setFullName}
                    value={fullName}
                    placeholder="Full Name"
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <TextInput
                    style={{ height: 50, width: 300, padding: 15, alignItems: 'center', borderRadius: 5, borderColor: 'grey', borderWidth: 1, margin: 12 }}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <TextInput
                    style={{ height: 50, width: 300, padding: 15, alignItems: 'center', borderRadius: 5, borderColor: 'grey', borderWidth: 1, margin: 12 }}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                />
            </View>
            <View style={{ alignItems: 'center' }}>
                <TextInput
                    style={{ height: 50, width: 300, padding: 15, alignItems: 'center', borderRadius: 5, borderColor: 'grey', borderWidth: 1, margin: 12 }}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    placeholder="Confirm Password"
                />
            </View>
            <View style={{ padding: 10, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                    style={{ height: 50, width: 300, padding: 15, backgroundColor: '#2c62e4', alignItems: 'center', borderRadius: 5 }}
                >
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
            <View >
                <Text style={{ color: 'grey', alignItems: 'center', textAlign: 'center' }}>
                    By registering, you confirm that you accept our{'\n'}
                    <Text style={{ color: '#f6cead', fontWeight: 'bold'}}>Terms of Use
                    </Text>and 
                    <Text style={{ color: '#f6cead', fontWeight: 'bold'}}>
                        Privacy Policy
                    </Text>
                </Text>
            </View>
            <View style={{ padding: 10, alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                    style={{ height: 50, width: 300, padding: 15, backgroundColor: '#e7eaf4', alignItems: 'center', borderRadius: 5 }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../assets/images/facebook.png')}
                            style={{ marginRight: 20, height: 20, width: 20 }}
                        />
                        <Text style={{ color: '#2c62e4', fontSize: 10, fontWeight: 'bold', marginBottom: 5 }}>
                            Sign In with Facebook
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10, alignItems: "center", justifyContent: "center", color: "white" }}>
                <TouchableOpacity
                    style={{ height: 50, width: 300, padding: 15, backgroundColor: '#f4e9ea', alignItems: 'center', borderRadius: 5 }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('../../assets/images/google-plus.png')}
                            style={{ marginRight: 20, height: 20, width: 20 }}
                        />
                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#e06d65', marginBottom: 5 }}>
                            Sign In with Google
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15, alignItems: 'center' }}>
                <Text>
                    Have an Account?
                    <Text style={{ fontWeight: "bold", color: '#2c62e4' }} onPress={() => navigation.navigate('Login')}>
                        Sign In
                    </Text>
                </Text>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default SignUp;
