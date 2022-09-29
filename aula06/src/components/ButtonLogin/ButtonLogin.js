import {TouchableOpacity, Text, StyleSheet } from 'react-native';


export default function ButtonLogin(props) {
    const { value, onPress } = props;

    return(
        <TouchableOpacity style = {styles.buttonLoginArea}>
            <Text style = {styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>

        )
}

const styles = StyleSheet.create({
    buttonLoginArea: {
        height: '6%',
        width: '80%',
        backgroundColor: '#7242F5',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px'
    },
    textButtonLogin: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});