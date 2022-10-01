import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import Headphones from "../screens/Headphones";
import Earphones from "../screens/Earphones";
import Home from "../screens/Home";
import ProductDetails from "../screens/ProductDetails";
import Speakers from "../screens/Speakers";
import { colors } from "../theme/colors";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import Checkout from "../screens/Checkout";
import { useSelector } from "react-redux";
import { selectCart } from "../Store/cartSlice";

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="productDetails" component={ProductDetails} />
    </HomeStack.Navigator>
  );
};

const EarphonesStack = createNativeStackNavigator();
const EarphonesStackScreen = () => {
  return (
    <EarphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <EarphonesStack.Screen name="Earphones" component={Earphones} />
      <EarphonesStack.Screen name="productDetails" component={ProductDetails} />
    </EarphonesStack.Navigator>
  );
};

const HeadphonesStack = createNativeStackNavigator();
const HeadphonesStackScreen = () => {
  return (
    <HeadphonesStack.Navigator screenOptions={{ headerShown: false }}>
      <HeadphonesStack.Screen name="Headphones" component={Headphones} />
      <HeadphonesStack.Screen
        name="productDetails"
        component={ProductDetails}
      />
    </HeadphonesStack.Navigator>
  );
};

const SpeakersStack = createNativeStackNavigator();
const SpeakersStackScreen = () => {
  return (
    <SpeakersStack.Navigator screenOptions={{ headerShown: false }}>
      <SpeakersStack.Screen name="Speakers" component={Speakers} />
      <SpeakersStack.Screen name="productDetails" component={ProductDetails} />
    </SpeakersStack.Navigator>
  );
};

const CartStack = createNativeStackNavigator();
const CartStackStackScreen = () => {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen name="Checkout" component={Checkout} />
    </CartStack.Navigator>
  );
};

const TabIcon = ({ fontFamily, name, color }) => {
  if (fontFamily === "MaterialIcons") {
    return <MaterialIcons name={name} size={24} color={color} />;
  } else if (fontFamily === "MaterialCommunityIcons") {
    return <MaterialCommunityIcons name={name} size={24} color={color} />;
  } else if (fontFamily === "SimpleLineIcons") {
    return <SimpleLineIcons name={name} size={24} color={color} />;
  }
};

const Tab = createBottomTabNavigator();

export default Navigation = () => {
  const cart = useSelector(selectCart);

  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <TabIcon fontFamily="MaterialIcons" name="home" color={color} />
            ),
          }}
          name="HomeTab"
          component={HomeStackScreen}
        />

        <Tab.Screen
          options={{
            title: "Headphones",
            tabBarIcon: ({ color }) => (
              <TabIcon
                fontFamily="MaterialCommunityIcons"
                name="headphones"
                color={color}
              />
            ),
          }}
          name="HeadphonesTab"
          component={HeadphonesStackScreen}
        />

        <Tab.Screen
          options={{
            title: "Earphones",
            tabBarIcon: ({ color }) => (
              <TabIcon
                fontFamily="SimpleLineIcons"
                name="earphones-alt"
                color={color}
              />
            ),
          }}
          name="EarphonesTab"
          component={EarphonesStackScreen}
        />
        <Tab.Screen
          options={{
            title: "Speakers",
            tabBarIcon: ({ color }) => (
              <TabIcon
                fontFamily="MaterialCommunityIcons"
                name="speaker"
                color={color}
              />
            ),
          }}
          name="SpeakersTab"
          component={SpeakersStackScreen}
        />
        <Tab.Screen
          options={{
            title: "Cart",
            tabBarIcon: ({ color }) => (
              <TabIcon
                fontFamily="MaterialCommunityIcons"
                name="cart"
                color={color}
              />
            ),
            tabBarBadge: cart.length ? cart.length : null,
          }}
          name="CartTab"
          component={CartStackStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
