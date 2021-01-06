import React, { useRef, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer, useLinking } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import { navigationRef } from 'components/RootNavigation';

import SignIn from 'screens/SignIn';
import Films from 'screens/Films';

import { NavigationActions } from 'store/actions';


enableScreens();

const file = 'navigation/AppNavigator';
const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const getActiveRouteName = (state) => {
  const route = state.routes[state.index];

  if (route.state) {
    // Dive into nested navigators
    return `${route.name}.${getActiveRouteName(route.state)}`;
  }

  return route.name;
};

export const AppNavigator = ({ actions }) => {
  const previousRouteRef = useRef();
  const [isReady, setIsReady] = useState();
  const [initialState, setInitialState] = useState();

  const { getInitialState } = useLinking(navigationRef, {
    prefixes: ['https://test.com', 'test://'],
    config: {
      Root: {
        initialRouteName: 'Home',
        screens: {
          Home: {
            initialRouteName: 'Home',
            screens: {
              Home: 'home',
              Subcategory: 'home/:uid',
            },
          },
          Films: 'films',
        },
      },
    },
  });

  useEffect(() => {
    getInitialState()
      .catch((error) => {
        recordError(error, { file, function: 'getInitialState' });
        Alert.alert('Ooops...', 'We was not able to find what to show you... sorry...');
        setIsReady(true);
      })
      .then((state) => {
        if (state !== undefined) {
          setInitialState(state);
          setIsReady(true);
        } else {
          AsyncStorage.getItem(PERSISTENCE_KEY)
            .then((savedStateString) => {
              setInitialState(JSON.parse(savedStateString));
              setIsReady(true);
            })
            .catch((error) => {
              recordError(error, { file, function: 'AsyncStorage.getItem(PERSISTENCE_KEY)' });
              Alert.alert('Ooops...', 'We was not able to find where you was before in our application... sorry...');
              setIsReady(true);
            });
        }
      });
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }

  const Stack = createStackNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        initialState={initialState}
        onStateChange={(state) => {
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
          const previousRouteName = previousRouteRef.current;
          const currentRouteName = getActiveRouteName(state);

          if (previousRouteName !== currentRouteName) {
            trackScreenView(currentRouteName);
          }

          previousRouteRef.current = currentRouteName;
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name={signInScreen.page}
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  user: state.authentication.user,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      navigate: NavigationActions.navigate,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
