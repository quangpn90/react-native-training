import React, {createRef, useEffect} from 'react'

// Libs
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

// Navigator
import OnboardingNavigator from './onboarding-navigator'
import HomeNavigator from './home-navigator'

// Contexts
import {useAuthContext} from '@contexts'

// Store
import {INITIALIZE, INITIALIZE_FAILED, INITIALIZE_SUCCESS} from '@store'

// Services
import {get} from '@services'

// Themes
import {NavigationTheme} from '@themes'

// Constants
import {AUTH_DATA} from '@constants'

// Configs
import '@services/push-notifications'
import {useNotificationHook} from '@hooks/usePushLocalNotification'

export type NavigatorParamList = {
  GetStarted: undefined
  Login: undefined
  Home: undefined
  BrandDetail?: {
    id: string
  }
  ProductDetail?: {
    id: string
  }
  // 🔥 Your screens go here
}

// navigation props type
export type NavigationPropsType = NativeStackNavigationProp<NavigatorParamList>

const AppNavigator = () => {
  // get status authenticated from context
  const {state, dispatch} = useAuthContext()
  const {initialize} = useNotificationHook()

  const navigationRef = createRef<NavigationContainerRef<any>>()
  const {isAuthenticated} = state || {}

  // check authenticated state
  const getAuth = async (): Promise<void> => {
    dispatch({type: INITIALIZE})
    try {
      // get auth data from local storage
      const authData = await get(AUTH_DATA)
      if (authData) {
        const {access_token} = JSON.parse(authData)
        const {user} = JSON.parse(authData)
        dispatch({
          type: INITIALIZE_SUCCESS,
          payload: {
            user,
            access_token,
          },
        })
      }
    } catch (error) {
      dispatch({type: INITIALIZE_FAILED, payload: error})
    }
  }

  useEffect(() => {
    initialize(navigationRef)
    getAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <NavigationContainer theme={NavigationTheme}>
      {isAuthenticated ? <HomeNavigator /> : <OnboardingNavigator />}
    </NavigationContainer>
  )
}

export default AppNavigator
