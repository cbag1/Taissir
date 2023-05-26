import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.card}>
      <Text style={styles.arabe}>َّلل
ْي

س

ْ
ي
ه
 ي الت
ذ

 َّلله
د
ة
ْ
حم

ْ
ا</Text>
      <Text style={styles.francais}>Alhamdu li laahi zi taysiiri Yàllahu</Text>
    </View>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#888888',
  },
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',

  //   paddingTop: Platform.OS === 'android' ? 25 : 0,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  // },
});
