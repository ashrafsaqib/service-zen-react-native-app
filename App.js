import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicesList from './components/ServicesList';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
const App = () => {
  return (
    <NativeBaseProvider>
      <Header />
      <ServicesList />
      <Footer />
    </NativeBaseProvider>
  );
};


export default App;
