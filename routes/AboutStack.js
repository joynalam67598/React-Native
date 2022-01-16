import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about"

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor:'#FFF',
        headerStyle:{backgroundColor:"blue",height:70}
    }
});
export default AboutStack;
