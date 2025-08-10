import AsyncStorage from '@react-native-async-storage/async-storage';
import Tron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const TronInstance = Tron.configure({
  name: 'TV_TIME',
})
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(reactotronRedux())
  .connect();

const yeOlderConsoleLog = console.log;
console.log = (...args) => {
  yeOlderConsoleLog(...args);
  TronInstance.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview:
      args.length > 0 && typeof args[0] === 'string' ? args[0] : undefined,
  });
};

export default TronInstance;
