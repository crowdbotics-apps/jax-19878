import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile95474Navigator from '../features/UserProfile95474/navigator';
import Settings95473Navigator from '../features/Settings95473/navigator';
import Settings95471Navigator from '../features/Settings95471/navigator';
import SignIn295469Navigator from '../features/SignIn295469/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile95474: { screen: UserProfile95474Navigator },
Settings95473: { screen: Settings95473Navigator },
Settings95471: { screen: Settings95471Navigator },
SignIn295469: { screen: SignIn295469Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
