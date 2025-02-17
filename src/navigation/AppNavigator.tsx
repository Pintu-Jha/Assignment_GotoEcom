import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet } from 'react-native';
import ListingScreen from '../screens/ListingScreen';
import ShortlistedScreen from '../screens/ShortlistedScreen';
import MovieIcon from '../assets/svg/movieIcon';
import MarkIcon from '../assets/svg/markIcon';
import { textScale } from '../styles/responsiveStyles';
import { spacing } from '../styles/spacing';

type RootTabParamList = {
  Movies: undefined;
  Shortlisted: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
      }}
    >
      <Tab.Screen
        name="Movies"
        component={ListingScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MovieIcon 
              size={26} 
              color={color}
              style={[
                styles.icon,
                focused && styles.iconFocused
              ]}
            />
          ),
          tabBarLabel: 'Movies',
        }}
      />
      <Tab.Screen
        name="Shortlisted"
        component={ShortlistedScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MarkIcon 
              size={26} 
              color={color}
              style={[
                styles.icon,
                focused && styles.iconFocused
              ]}
            />
          ),
          tabBarLabel: 'Shortlisted',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    height: Platform.OS === 'ios' ? spacing.HEIGHT_90 : spacing.HEIGHT_60,
    paddingBottom: Platform.OS === 'ios' ? spacing.PADDING_28 : spacing.PADDING_8,
    paddingTop: spacing.PADDING_8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  tabBarLabel: {
    fontSize: textScale(12),
    fontWeight: '500',
    marginTop: spacing.MARGIN_4,
  },
  tabBarItem: {
    padding: spacing.PADDING_4,
  },
  icon: {
    transform: [{ scale: 1 }],
  },
  iconFocused: {
    transform: [{ scale: 1.1 }],
  },
});

export default AppNavigator;