#!/bin/bash
str=('@babel/preset-env' 'core-js@2.6.8' 
      'babel-plugin-remove-use-strict' 'metro-react-native-babel-preset' )
for i in "${str[@]}"
do
npm i --save-dev $i
done