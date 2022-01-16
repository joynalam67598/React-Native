import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import Home from "../screens/home"
import ReviewDetails from "../screens/reviewDetails"

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Reviews',
            // headerStyle:{backgroundColor:"blue"}
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            // headerStyle:{backgroundColor:"green"}
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor:'#FFF',
        headerStyle:{backgroundColor:"blue",height:70}
    }
});

export default HomeStack;