import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import { screens } from "../Screens/";

const StackNavigation = createStackNavigator({
  Home: {
    screen: screens.HomeScreen
  },
  Dashboard: {
    screen: screens.DashboardScreen
  },
  Login: {
    screen: screens.LoginScreen
  },
  CarGame: {
    screen: screens.CarGameScreen
  }
});

const DrawerStack = createDrawerNavigator({
  Home: {
    screen: screens.HomeScreen
  },
  Dashboard: {
    screen: screens.DashboardScreen
  },
  Login: {
    screen: screens.LoginScreen
  },
  CarGame: {
    screen: screens.CarGameScreen
  }
});

const TabStack = createMaterialTopTabNavigator({
  Home: {
    screen: screens.DrawerStack
  },
  Dashboard: {
    screen: screens.DashboardScreen
  },
  Login: {
    screen: screens.LoginScreen
  },
  CarGame: {
    screen: screens.CarGameScreen
  }
});

const Navigation = createAppContainer(TabStack);

export default Navigation;
