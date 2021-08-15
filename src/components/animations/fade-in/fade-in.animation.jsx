import React, { useRef, useEffect } from 'react';
import { Animated, View } from 'react-native';

const FadeInAnimation = ({children}) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );

}

export default FadeInAnimation;
