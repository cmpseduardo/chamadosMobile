import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';


export default function ButtonLogin(props) {
    const { value, onPress } = props;

    return(
        <View style = {styles.container}>
            <View>
                <TouchableOpacity style = {styles.containerInput}>
                <TextInput></TextInput>
                </TouchableOpacity>
            </View>
            <View>
                <Text style = {styles.titleJob}>Titulo</Text>
                <Text>Descrição</Text>
            </View>
            
        </View>


        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
    },

    containerInput: {
        backgroundColor: 'white',
        margin: 10,
        height: '80',
        width: '100',
        borderRadius: '10px',
        alignItems: 'right',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        borderBottomColor: 'slateblue'   
    },

    titleJob: {
        fontWeight: 'bold',
        fontSize: 18
    }
})