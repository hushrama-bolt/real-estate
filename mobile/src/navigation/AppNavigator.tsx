import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../constants/theme';

import { RootStackParamList, BuyerTabParamList, SellerTabParamList, MainStackParamList } from '../types';
import { useAuthStore } from '../store/authStore';
import { useAuth } from '../hooks/useAuth';

import AuthScreen from '../screens/AuthScreen';
import BuyerHomeScreen from '../screens/BuyerHomeScreen';
import SellerHomeScreen from '../screens/SellerHomeScreen';
import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';
import LikesScreen from '../screens/LikesScreen';
import RequestsScreen from '../screens/RequestsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddPropertyScreen from '../screens/AddPropertyScreen';

const RootStack = createStackNavigator<RootStackParamList>();
const BuyerTab = createBottomTabNavigator<BuyerTabParamList>();
const SellerTab = createBottomTabNavigator<SellerTabParamList>();
const MainStack = createStackNavigator<MainStackParamList>();

function BuyerTabs() {
  return (
    <BuyerTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.muted,
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
      }}
    >
      <BuyerTab.Screen
        name="BuyerHome"
        component={BuyerHomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => null,
        }}
      />
      <BuyerTab.Screen
        name="Likes"
        component={LikesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => null,
        }}
      />
      <BuyerTab.Screen
        name="Requests"
        component={RequestsScreen}
        options={{
          tabBarLabel: 'Requests',
          tabBarIcon: () => null,
        }}
      />
      <BuyerTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => null,
        }}
      />
    </BuyerTab.Navigator>
  );
}

function SellerTabs() {
  return (
    <SellerTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.muted,
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },
      }}
    >
      <SellerTab.Screen
        name="SellerHome"
        component={SellerHomeScreen}
        options={{
          tabBarLabel: 'My Properties',
          tabBarIcon: () => null,
        }}
      />
      <SellerTab.Screen
        name="Requests"
        component={RequestsScreen}
        options={{
          tabBarLabel: 'Requests',
          tabBarIcon: () => null,
        }}
      />
      <SellerTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => null,
        }}
      />
    </SellerTab.Navigator>
  );
}

function MainNavigator() {
  const profile = useAuthStore(state => state.profile);
  const isSeller = profile?.role === 'seller';

  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Tabs" component={isSeller ? SellerTabs : BuyerTabs} />
      <MainStack.Screen
        name="PropertyDetails"
        component={PropertyDetailsScreen}
        options={{ headerShown: true, title: 'Property Details' }}
      />
      {isSeller && (
        <MainStack.Screen
          name="AddProperty"
          component={AddPropertyScreen}
          options={{ headerShown: true, title: 'Add Property' }}
        />
      )}
    </MainStack.Navigator>
  );
}

export default function AppNavigator() {
  const { user, profile, isLoading } = useAuthStore();
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.bg.light }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {user && profile ? (
          <RootStack.Screen name="Main" component={MainNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthScreen} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
