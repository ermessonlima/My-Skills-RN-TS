/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Keyboard,
} from 'react-native';
import Button from '../../components/Button';

interface SkillData {
  id: string;
  name: string;
}

const Home = () => {
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  const handleAdd = () => {
    if (newSkill != '') {
      const data = {
        id: String(new Date().getTime()),
        name: newSkill,
      };
      console.log(data)
      setNewSkill('');
      setMySkills([...mySkills, data]);
      Keyboard.dismiss();
    }
  };
  const removeElement = (i: number) => {
    const skills = [...mySkills];
    skills.splice(i, 1);
    setMySkills(skills);
  };
  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour > 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Night');
    }
  }, [mySkills]);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#121015"
        barStyle={'light-content'}
      />
      <Text style={styles.title}>Welcome, Ermesson </Text>
      <Text style={styles.greeting}>{greeting}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNewSkill}
        placeholder="New Skill"
        value={newSkill}
      />
      <Button onPress={handleAdd} title={'Save'} />
      <Text style={styles.title}>MySkills</Text>
      <FlatList
        data={mySkills}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={item.id}
            style={styles.buttonSkill}
            onPress={() => removeElement(index)}>
            <Text style={styles.textDescription}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'flex-start',
    backgroundColor: '#121015',
  },
  title: {
    marginTop: 12,
    paddingVertical: 8,
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: '#ececec',
    borderRadius: 10,
    padding: 10,
  },
  textDescription: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  greeting: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -10,
  },

  buttonSkill: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#1f1e25',
    borderRadius: 10,
    marginTop: 10,
  },
});
