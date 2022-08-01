import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default class LoginScreen extends Component {

    signWithGoogleAsync = async() => {
        try {
            const result = await Google.login.Async({
                behaviour : "web",
                andriodClientId : "",
                //add it here ,
                iosClientId : "",
                //add this too
                scopes: ['profile','email']});
                if (result.type === "success") {
                    this.onSignIn(result);
                    return result.accessToken;
                  } else {
                    return { cancelled: true };
                  }
            } catch (e) {
                console.log(e.message);
                return { error: true };
            }
       
    }

    render(){
        return(
            <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                <Button title="Sign in with google (no github or apple)" onPress={()=>this.signWithGoogleAsync()}></Button>
            </View>
        )
    }
}