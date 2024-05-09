import { NavigationProp } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FIREBASE_AUTH } from '../../firebaseConfig';
import { COLORS } from '../../util/constants';
import Task from '../components/Task';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const logout = require('./../../assets/icons/logout.png');
export default function List({ navigation }: RouterProps) {
  const [task, setTask] = useState(null);
  const [itemTask, setItemTask] = useState([]);

  const addTask = () => {
    setItemTask([...itemTask, task]);
    setTask(null);
  };

  const deleteHandle = (index: number) => {
    const itemsCopy = [...itemTask];
    itemsCopy.splice(index, 1);
    setItemTask(itemsCopy);
  };
  return (
    <SafeAreaView style={styles.safe_Area}>
      <View style={styles.tab}>
        <Text style={styles.title_Text}>Today's Tasks</Text>
        <TouchableOpacity onPress={() => FIREBASE_AUTH.signOut()}>
          <Image style={styles.icon_logout} source={logout} />
        </TouchableOpacity>
      </View>
      <View>
        {itemTask.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => deleteHandle}>
              <Task name={item} />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.text_Container}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={styles.input_Container}>
            <TextInput
              placeholder="Write a task..."
              value={task}
              onChangeText={(text) => setTask(text)}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => addTask()}>
            <Text style={styles.plus}>+</Text>
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
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  icon_logout: {
    height: 30,
    width: 30,
  },
  title_Text: {
    fontSize: 20,
    fontWeight: '700',
  },

  task_Wrapper: {
    backgroundColor: 'pink',
    height: 50,
    width: '50%',
  },
  text_Container: {
    position: 'absolute',
    bottom: '20%',
  },
  input_Container: {
    height: 50,
    width: '60%',
    borderWidth: 1,
    borderRadius: 60,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: '#91C8E4',
    borderRadius: 50,
    left: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    fontWeight: '600',
    fontSize: 16,
  },
});
