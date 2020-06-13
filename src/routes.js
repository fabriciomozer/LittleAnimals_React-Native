import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator(
  {
    Main,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1E90FF',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTintColor: '#FFF',
    },
  },
);
