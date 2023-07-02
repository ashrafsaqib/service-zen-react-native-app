import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { AspectRatio } from "native-base";
import ServiceBox from './child/ServiceBox';
const ServicesList = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('https://demo3959108.mockable.io/services');
      const data = await response.json();
      setServices(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const renderServiceItem = ({ item }) => (
    <ServiceBox service={item} />
  );

  const handleButtonPress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed`);
    // Add your custom logic or actions here based on the button press
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={services}
          renderItem={renderServiceItem}
          keyExtractor={(item) => item.title}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceItem: {
    padding: 10,
  },
  serviceImage: {
    width: 300,
    height: 300,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  servicePrice: {
    fontSize: 14,
  },
  serviceDuration: {
    fontSize: 14,
    marginBottom: 12,
  }
});

export default ServicesList;
