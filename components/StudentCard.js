import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Requirement 1: Functional component that receives name, course, units,
 * and isFullLoad as props using destructuring in the parameter signature.
 */
export default function StudentCard({ name, course, units, isFullLoad }) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.studentName}>{name}</Text>
        
        {/* Requirement 2: Conditional rendering using && */}
        {isFullLoad && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Full Load</Text>
          </View>
        )}
      </View>
      <Text style={styles.detailsText}>Course: {course}</Text>
      <Text style={styles.detailsText}>Units Enrolled: {units}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  studentName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
  },
  badge: {
    backgroundColor: '#10b981',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
  },
  detailsText: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 2,
  },
});