import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../components/screens/Login/LoginScreen";
import HomeScreen from "../components/screens/Home/HomeScreen";
import ProofOfDelivery from "../components/screens/ProofDelivery/ProofOfDeliveryScreen";
import FiltersScreen from "../components/screens/FilterScreen/Filter";
import ProductDetails from "../components/screens/ProductDetails/ProductDetail";
import CartScreen from "../components/screens/Cart/CartScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  darkTheme,
  lightTheme,
} from "../components/screens/ThemeProvider/Theme";
import { useSelector } from "react-redux";
import LanguageSwitcher from "../components/screens/localization/LanguageSwitcher";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileScreen from "../components/screens/Profile/ProfileScreen";
import SettingScreen from "../components/screens/Setting/SettingScreen";
import Splash from "../components/screens/SplashScreen/SplashScreen";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = ({ route }: any) => {
  const { user } = route.params || {};
  console.log("TabNavigator received user:", user);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ user }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const theme = useSelector((state: any) => state.theme.theme);
  const appTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }} // Hide stack header in tab navigation
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Language" component={LanguageSwitcher} />
        <Stack.Screen name="Filters" component={FiltersScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="ProofOfDelivery" component={ProofOfDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
