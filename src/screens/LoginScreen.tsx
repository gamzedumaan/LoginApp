import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  KeyboardAvoidingView,
  Modal,
} from 'react-native';

import { FIREBASE_AUTH } from '../../firebaseConfig';
import { COLORS, FONTS } from '../../util/constants';
import InputComp from '../components/InputComp';

const deviceHeight = Dimensions.get('window').height;
const devicewidth = Dimensions.get('window').width;
const emailIcon = require('./../../assets/icons/email.png');
const facebookImage = require('./../../assets/icons/facebook.png');
const googleImage = require('./../../assets/icons/google.png');
const leftIcon = require('./../../assets/icons/left-arrow.png');
const passwordIcon = require('./../../assets/icons/password.png');
const twitterImage = require('./../../assets/icons/twitter.png');
const LoginImage = require('./../../assets/images/Login.png');
export default function LoginScreen({ navigation: { goBack } }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);
  const auth = FIREBASE_AUTH;

  const handlePassword = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(() => alert('password reset email sent'))
      .catch((error: any) => console.log(error.message));
  };
  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe_Area}>
      <KeyboardAvoidingView>
        <View style={{ zIndex: 1, position: 'absolute', right: 0, bottom: '43%', left: '80%' }}>
          <Modal visible={visible}>
            <SafeAreaView style={styles.modal_Container}>
              <TouchableOpacity  onPress={() => goBack()}>
                <Image
                  source={leftIcon}
                  style={{
                    height: 25,
                    width: 25,
                    position: 'absolute',
                  }}
                />
              </TouchableOpacity>
              <View style={styles.image_Container}>
                <Image resizeMode="contain" source={LoginImage} style={styles.image} />
              </View>
              <View>
                <Text style={styles.modal_Forget}>Forget Password ?</Text>
                <InputComp
                  placeholder="Enter email address here ?"
                  value={email}
                  onChange={(text) => setEmail(text)}
                />
                <TouchableOpacity
                  onPress={handlePassword}
                  style={styles.modal_Button}
                  activeOpacity={0.5}>
                  <Text style={styles.button_Text}>Send password reset link</Text>
                </TouchableOpacity>
                <View />
              </View>
            </SafeAreaView>
          </Modal>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={{ color: 'red', fontWeight: '700' }}>Forget?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.image_Container}>
          <Image resizeMode="contain" source={LoginImage} style={styles.image} />
        </View>
        <View style={{ justifyContent: 'center', margin: 10, padding: 10, marginTop: '10%' }}>
          <Text style={styles.login_Text}>Sign up</Text>
          <InputComp
            Icon={emailIcon}
            placeholder="Email-ID"
            value={email}
            onChange={(text) => setEmail(text)}
          />

          <InputComp
            Icon={passwordIcon}
            placeholder="Password"
            value={password}
            onChange={(text) => setPassword(text)}
            secureTextEntry
          />
          {loading ? (
            <ActivityIndicator size="large" color="red" />
          ) : (
            <>
              <View style={styles.button_Container}>
                <TouchableOpacity onPress={signUp} style={styles.login_Button}>
                  <Text style={styles.button_Text}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        
        <View style={styles.orText_Container}>
            <Text style={styles.or_Text}>Or, login with ...</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '30%',
              height: '10%',
              width: '100%',
            }}>
            <TouchableOpacity style={styles.icon_Button}>
              <Image resizeMode="contain" source={googleImage} style={styles.icon_Image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon_Button}>
              <Image resizeMode="contain" source={facebookImage} style={styles.icon_Image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon_Button}>
              <Image resizeMode="contain" source={twitterImage} style={styles.icon_Image} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe_Area: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image_Container: {
    alignItems: 'center',
    height: '40%',
    width: '100%',

  },
  image: {
    height: deviceHeight / 2.4,
    width: devicewidth / 1.3,
  },
  login_Text: {
    fontSize: 22,
    fontWeight: '500',
    left: 10,
  },
  email_Container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.iceBlue,
    margin: 5,
    padding: 10,
  },
  email_Icon: {
    height: 15,
    width: 15,
  },
  password_Container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'grey',
    margin: 5,
    padding: 10,
  },
  button_Container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 30,
  },
  login_Button: {
    height: 45,
    width: '100%',
    backgroundColor: COLORS.green,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_Text: {
    fontSize: 18,
    color: FONTS.h1,
  },
  orText_Container: {
    zIndex:1,
    position:'absolute',
    left:'40%',
    bottom:+80
  },
  or_Text: {
    opacity: 0.4,
    marginTop:20
  },
  icon_Button: {
    height: 40,
    width: 80,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.white,
    shadowColor: 'white',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    borderRadius: 10,
    elevation: 1,
  },

  icon_Image: {
    height: 25,
    width: 25,
  },

  modal_Container: {
    flex: 1,
    margin: 10,
  },
  modal_Forget: {
    left: 10,
    fontWeight: '600',
    fontSize: 16,
  },
  modal_Button: {
    height: '23%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.green,
    left: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});
