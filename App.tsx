import React, { useEffect } from 'react';
import { ScrollView, Animated, Button, View } from 'react-native';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import { useScreens } from 'react-native-screens';
import styled from 'styled-components/native'
import DetailsScreen from './src/screens/details/DetailsScreen';
import ListScreen from "./src/screens/list/ListScreen";

// import { ReactReduxContext } from 'react-redux';

useScreens();

function SignInScreen(props) {
    const animation = new Animated.Value(0);
    const rotation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });
    useEffect(() => {
        Animated.timing(animation, {toValue: 1, duration: 2000}).start();
    }, []);

    return (
        <ScrollView
            contentContainerStyle={{
                flex: 1,
                alignContent: 'flex-end',
                alignItems: 'center',
                justifyContent: 'space-around',
            }}
            style={{
                backgroundColor: 'black',
                padding: 20
            }}>
            <Animated.View
                style={{transform: [{rotate: rotation}]}}
            >
                <Avatar
                    source={{uri: 'https://scontent.fiev12-1.fna.fbcdn.net/v/t1.0-1/p320x320/36543195_1726099707477654_559448180685537280_n.jpg?_nc_cat=105&_nc_oc=AQk3uud3qeUZ1Bib4fmPqhepeTIfZGv2Xv0bgiymiK4Tzbu3es9avwH-zM62cPKkgOc&_nc_ht=scontent.fiev12-1.fna&oh=03a590b0d0e9e88e4521a74dc225a61d&oe=5DE35FCD'}}
                    style={{width: 100, height: 100}}
                />
            </Animated.View>
            <Title>Welcome back Alina</Title>

            <Button
                title="Login"
                onPress={() => props.navigation.navigate('List')}
            />
        </ScrollView>
    )
}

const Avatar = styled.Image`
	width: 100px;
	height: 100px;
	background: black;
	border-radius: 22px;
`;
const Title = styled.Text`
	font-size: 20px;
  font-weight: 500;
  color: green;
`;


const AuthStack = createStackNavigator({
    SignIn: SignInScreen,

}, {
    headerMode: 'none'
});

const MainStack = createStackNavigator(
    {
        Details: {
            screen: DetailsScreen,
        },
        List: {
            screen: ListScreen
        }
    },
    {
        initialRouteName: 'List',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }
);

const AppContainer = createAppContainer(
    createSwitchNavigator(
        {
            App: MainStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'Auth',
        }
    )
);

export default class AppMain extends React.Component {
    render() {
        return <View style={{flex: 1}}><AppContainer/></View>;
    }
}