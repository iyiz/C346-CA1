
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const calculateGPA = (modules) => {
  let totalPoints = 0;
  let totalCredits = 0;

  modules.forEach(module => {
    let gradePoint;
    switch (module.grade.toUpperCase()) {
      case 'A':
        gradePoint = 4;
        break;
      case 'B':
        gradePoint = 3;
        break;
      case 'C':
        gradePoint = 2;
        break;
      case 'D':
        gradePoint = 1;
        break;
      case 'F':
        gradePoint = 0;
        break;
      default:
        gradePoint = 0;
    }

    totalPoints += gradePoint * module.credits;
    totalCredits += module.credits;
  });

  return totalCredits === 0 ? 0 : (totalPoints / totalCredits).toFixed(2);
};

const HomeScreen = ({ navigation }) => {
  const [modules, setModules] = useState([
    { id: '1', name: 'A113', grade: 'A', credits: 4 },
    { id: '2', name: 'C227', grade: 'B', credits: 3 },
  ]);
  const [gpa, setGpa] = useState(null);

  const deleteModule = (id) => {
    setModules(modules.filter((module) => module.id !== id));
  };

  const editModule = (module) => {
    navigation.navigate('Add Module', { module, updateModule });
  };

  const updateModule = (newModule) => {
    setModules(prevModules => {
      const updatedModules = prevModules.map(module =>
        module.id === newModule.id ? newModule : module
      );

      if (!updatedModules.some(module => module.id === newModule.id)) {
        updatedModules.push(newModule);
      }
      return updatedModules;
    });
  };

  const onCalculateGPA = () => {
    const calculatedGPA = calculateGPA(modules);
    setGpa(calculatedGPA);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={modules}
        renderItem={({ item }) => (
          <View style={styles.moduleItem}>
            <Text style={styles.moduleText}>Module Name: {item.name}</Text>
            <Text style={styles.moduleText}>Grade: {item.grade}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => editModule(item)} style={styles.editButton}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => deleteModule(item.id)} style={styles.deleteButton}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Add Module', { updateModule })} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Module</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onCalculateGPA} style={styles.calculateButton}>
        <Text style={styles.buttonText}>Calculate GPA</Text>
      </TouchableOpacity>

      {gpa !== null && <Text style={styles.gpaText}>Your GPA: {gpa}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F1F8FF', // Light pastel blue background
  },
  moduleItem: {
    marginBottom: 15,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    elevation: 5, // adds shadow for Android
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  moduleText: {
    fontSize: 16,
    color: '#333', // Dark text for better readability
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#82C91E', // Soft Green
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#FF6F61', // Soft Coral
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
  },
  addButton: {
    backgroundColor: '#4C8BF5', // Calm Blue
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    elevation: 3, // Adds a soft shadow
  },
  calculateButton: {
    backgroundColor: '#FF9F00', // Warm Orange
    padding: 16,
    borderRadius: 10,
    marginTop: 12,
    alignItems: 'center',
    elevation: 3, // Adds a soft shadow
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  gpaText: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: '600',
    color: '#2F4F4F', // Dark Slate color for the text
    textAlign: 'center',
  },
});

export default HomeScreen;
