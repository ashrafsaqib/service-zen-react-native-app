import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
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
    <View style={styles.serviceItem}>
      <Image source={{ uri: item.image }} style={styles.serviceImage} />
      <Text style={styles.serviceTitle}>{item.title}</Text>
      <Text style={styles.serviceDescription}>{item.description}</Text>
      <Text style={styles.servicePrice}>Price: ${item.price}</Text>
      <Text style={styles.serviceDuration}>Duration: {item.duration}</Text>
    </View>
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
      <View style={styles.bottomActionBar}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleButtonPress(1)}
        >
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleButtonPress(2)}
        >
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleButtonPress(3)}
        >
          <Text style={styles.buttonText}>Button 3</Text>
        </TouchableOpacity>
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
    resizeMode: 'center'
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
  },
  bottomActionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  actionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
