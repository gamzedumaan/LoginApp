import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';

import { COLORS } from '../../util/constants';

const dateIcon = require('./../../assets/icons/date.png');
const emailIcon = require('./../../assets/icons/email.png');
const facebookImage = require('./../../assets/icons/facebook.png');
const googleImage = require('./../../assets/icons/google.png');
const password = require('./../../assets/icons/password.png');
const personIcon = require('./../../assets/icons/person.png');

const deviceHeight = Dimensions.get('window').height;
const devicewidth = Dimensions.get('window').width;
const twitterImage = require('./../../assets/icons/twitter.png');
const LoginImage = require('./../../assets/images/Login.png');
export default function RegisterScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe_Area}>
      <View style={styles.image_Container}>
        <Image resizeMode="contain" source={LoginImage} style={styles.image} />
      </View>
      <View>
        <Text style={styles.register_Text}>Register</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
        <TouchableOpacity style={styles.icon_Button}>
          <Image resizeMode="contain" source={googleImage} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon_Button}>
          <Image resizeMode="contain" source={facebookImage} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon_Button}>
          <Image resizeMode="contain" source={twitterImage} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <Text style={{ opacity: 0.4 }}>Or, register with email ...</Text>
      </View>
      <View style={{ width: '95%', justifyContent: 'center', margin: 5, padding: 10 }}>
        <View style={styles.email_Container}>
          <Image resizeMode="contain" style={styles.email_Icon} source={personIcon} />
          <TextInput style={styles.email_ID} placeholder="Full Name" />
        </View>
        <View style={styles.email_Container}>
          <Image resizeMode="contain" style={styles.email_Icon} source={emailIcon} />
          <TextInput style={styles.email_ID} placeholder="Email ID" />
        </View>
        <View style={styles.email_Container}>
          <Image resizeMode="contain" style={styles.email_Icon} source={password} />
          <TextInput style={styles.email_ID} placeholder="Password" />
        </View>
        <View style={styles.email_Container}>
          <Image resizeMode="contain" style={styles.email_Icon} source={password} />
          <TextInput style={styles.email_ID} placeholder="Confirm Password" />
        </View>
        <View style={styles.email_Container}>
          <TouchableOpacity>
            <Image resizeMode="contain" style={styles.email_Icon} source={dateIcon} />
          </TouchableOpacity>
          <TextInput style={styles.email_ID} placeholder="Date a birth" />
        </View>

        <View style={styles.button_Container}>
          <TouchableOpacity style={styles.login_Button}>
            <Text style={styles.button_Text}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.login_Container}>
          <Text>Already Register? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.login_Text}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    flex: 1,
  },
  image: {
    height: deviceHeight / 2.4,
    width: devicewidth / 1.3,
  },
  register_Text: {
    fontSize: 22,
    fontWeight: '500',
    left: 10,
  },
  email_Container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'grey',
    margin: 5,
    padding: 10,
  },
  email_ID: {
    left: 5,
  },
  email_Icon: {
    height: 15,
    width: 15,
  },
  button_Container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 20,
  },
  login_Button: {
    height: 45,
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_Text: {
    fontSize: 18,
    color: '#fff',
  },
  icon_Button: {
    height: 40,
    width: 80,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#F0F3FF',
    shadowColor: 'white',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    borderRadius: 10,
    elevation: 1,
  },
  login_Container: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_Text: {
    color: 'green',
    fontWeight: '700',
  },
});
