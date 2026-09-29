import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import StudentCard from './StudentCard';

// Starter data from the lab instructions
const initialStudents = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  { id: "s4", name: "Dex Alonzo", course: "IT313", units: 12, isFullLoad: false },
];

export default function StudentRoster() {
  const [students, setStudents] = useState(initialStudents);
  const [useIndexKey, setUseIndexKey] = useState(false);

  // Requirement 6: Button to reverse roster order
  const handleReverseRoster = () => {
    setStudents((prev) => [...prev].reverse());
  };

  return (
    // Requirement 5: Single root element wrapping header and cards
    <ScrollView contentContainerStyle={styles.container}>
      {/* Requirement 4: JSX expression with template literal computed from array */}
      <View style={styles.headerContainer}>
        <Text style={styles.title}>IT313 Student Roster</Text>
        <Text style={styles.subtitle}>{`Total Enrollees: ${students.length} students`}</Text>
      </View>

      {/* Control Buttons for the Lab Demo / Requirement 6 */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleReverseRoster}>
          <Text style={styles.buttonText}>🔄 Reverse Roster Order</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.actionButton, useIndexKey ? styles.warningButton : styles.activeButton]}
          onPress={() => setUseIndexKey((prev) => !prev)}
        >
          <Text style={styles.buttonText}>
            {useIndexKey ? "⚠️ Key: array index" : "✅ Key: student.id"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Requirement 3: Render one StudentCard per student using .map() */}
      <View style={styles.listContainer}>
        {students.map((student, index) => (
          <StudentCard
            key={useIndexKey ? index : student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
    backgroundColor: '#f8fafc',
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginTop: 4,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 8,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#0284c7',
  },
  warningButton: {
    backgroundColor: '#d97706',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  listContainer: {
    marginTop: 5,
  },
});