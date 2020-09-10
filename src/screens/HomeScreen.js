import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import {GET_COUNTRY_DETAILS} from '../redux/actions/applicationActions';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import {connect} from 'react-redux'

class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            country:""
        }
    }

    onInputTextChange =(country)=>{
        this.setState({country})
    }

    onSubmitButtonClick = async ()=>{   
        if(this.state.country){
            this.props.navigation.navigate("CountryDetails",{countryName:this.state.country});
        }
    }

    render(){
        return(
        <View style={styles.container}>
            <TextInput placeholder="Enter country" style={styles.inputText} onChangeText={this.onInputTextChange}></TextInput>
            <TouchableOpacity disabled={this.state.country == ""} style={styles.submitBtn} onPress={this.onSubmitButtonClick}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>);

    }

}

  // upgrade our component to become Redux-aware
export default connect()(HomeScreen);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        padding:15
    },
    loader:{
        position:'absolute',
        alignSelf:'center'
    },
    inputText : {
        alignSelf:'stretch',
        height:60,
        borderColor:'#000034',
        borderWidth:1,
        borderRadius:10,
        fontSize:18,
        marginBottom:15,
        paddingHorizontal:10
    },
    submitBtn :{
        backgroundColor:'#898889',
        width:150,
        paddingHorizontal:15,
        paddingVertical:10
    },
    buttonText:{
        fontSize:16,
        color:'#fff',
        textAlign:'center'
    }
})