import {
  Animated,
} from 'react-native';

  var AnimateLine = {
      animateNow(move: Animated.Value){
          Animated.loop(
              Animated.sequence([
      Animated.timing(move, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(move, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]), {iterations: -1}
          ).start();
      }
  };

module.exports = AnimateLine;
