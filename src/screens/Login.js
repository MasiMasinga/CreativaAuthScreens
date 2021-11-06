import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = ({ navigation }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 65 }}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    resizeMode="contain"
                    style={{ height: 200, width: 200, marginTop: 50, backgroundColor: 'white' }}
                />
                <View>
                    <TextInput
                        style={{ height: 50, width: 300, padding: 15, alignItems: 'center', borderRadius: 5, borderColor: 'grey', borderWidth: 1, margin: 12 }}
                        onChangeText={setUsername}
                        value={username}
                        placeholder="Username"
                    />
                </View>
                <View>
                    <TextInput
                        style={{ height: 50, width: 300, padding: 15, alignItems: 'center', borderRadius: 5, borderColor: 'grey', borderWidth: 1, margin: 12 }}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
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
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={{ color: 'grey', marginBottom: 15, marginTop: 15 }}>
                        Forgot Password
                    </Text>
                </TouchableOpacity>
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
                <View style={{ marginTop: 15 }}>
                    <Text>
                        Dont Have an Account?
                        <Text style={{ fontWeight: "bold", color: '#2c62e4' }} onPress={() => navigation.navigate('SignUp')}>
                            Create One
                        </Text>
                    </Text>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 275,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginBottom: 500,
        borderRadius: 5
    },
});