import { createStackNavigator, createAppContainer, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import HomeScreen from '../screen/Home/';
import DashboardScreen from '../screen/Dashboard/';
import LoginScreen from '../screen/Login/';

const StackNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Dashboard: {
    screen: DashboardScreen
  },
  Login: {
    screen: LoginScreen
  }
});

const DrawerStack = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Dashboard: {
    screen: DashboardScreen
  },
  Login: {
    screen: LoginScreen
  }
});

const TabStack = createMaterialTopTabNavigator({
  Home: {
    screen: DrawerStack
  },
  Dashboard: {
    screen: DashboardScreen
  },
  Login: {
    screen: LoginScreen
  }
});


const Navigation = createAppContainer(TabStack);

export default Navigation;