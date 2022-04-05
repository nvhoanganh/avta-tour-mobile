import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

import * as appVesrion from './package.json';
import NewRelic from 'newrelic-react-native-agent'
NewRelic.startAgent("AA56ce23d82218af9f902ec2e33d415c3d4a3b3d32-NRMA");
NewRelic.setJSAppVersion(appVesrion.version);

registerRootComponent(App);