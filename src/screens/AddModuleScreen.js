
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

// Predefined credits based on grades
const gradeCredits = {
  A: 4,
  B: 3,
  C: 2,
  D: 1,
  F: 0,
};

const AddModuleScreen = ({ route, navigation }) => {
  const { module, updateModule } = route.params || {}; // Get the module and callback

  const [moduleName, setModuleName] = useState(module ? module.name : '');
  const [grade, setGrade] = useState(module ? module.grade : ''); // Pre-fill grade based on module name

  const saveModule = () => {
    const newModule = {
      id: module ? module.id : Date.now().toString(), // Assign new ID if adding a module
      name: moduleName,
      grade: grade.toUpperCase(),
      credits: gradeCredits[grade.toUpperCase()] || 0, // Assign credits based on grade, default to 0 if invalid
    };

    console.log('Saving module:', newModule); // Debugging

    if (module) {
      // If updating an existing module, use the callback to update it
      updateModule(newModule);
    } else {
      // If adding a new module, add it to the list (you should handle this in the parent)
      updateModule(newModule); // Same callback for adding
    }

    navigation.goBack(); // Return to the HomeScreen with updated data
  };

  return (
    <View style={styles.container}>
      <Text>{module ? 'Edit Module' : 'Add Module'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Module Name"
        value={moduleName}
        onChangeText={setModuleName}
      />

      <TextInput
        style={styles.input}
        placeholder="Grade (A, B, C, D, F)"
        value={grade}
        onChangeText={setGrade}
      />

      <Button title={module ? 'Update Module' : 'Add Module'} onPress={saveModule} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default AddModuleScreen;
