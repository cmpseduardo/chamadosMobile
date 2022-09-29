import { StyleSheet, Text, View, TextInput, Image} from 'react-native';
import ButtonLogin from '../ButtonLogin/ButtonLogin'

const ImgLogo = require('../../my-assets/logo.png')

export default function LoginWindow() {
  const users = [
    {
        "id": 1,
        "email": "user01@empresa.com",
        "senha": "teste1234",
    },
    {
        "id": 2,
        "email": "user02@empresa.com",
        "senha": "1234teste",
    }
]

  return (
    <View style={styles.container}>
        <Image source={{uri:ImgLogo}} style = {{height: 120, width: 120, margin: 50}} />
        <TextInput placeholder = "E-mail" style = {styles.containerInput}></TextInput>
        <TextInput placeholder = "Senha" secureTextEntry = {true} style = {styles.containerInput}/>
        <ButtonLogin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerInput: {
      backgroundColor: 'white',
      margin: 10,
      height: '5%',
      width: '80%',
      borderRadius: '10px',
      alignItems: 'right',
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'white',
      borderBottomColor: 'slateblue'   
  },

});
