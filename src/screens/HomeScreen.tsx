import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { ExampleComponent } from '../components/ExampleComponent';
import { useExampleQuery } from '../hooks/useExampleQuery';

export const HomeScreen: React.FC = () => {
  const { data, isLoading, error } = useExampleQuery();

  return (
    <View style={styles.container}>
      <ExampleComponent />

      <View style={styles.querySection}>
        <Text style={styles.sectionTitle}>TanStack Query Example:</Text>

        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#007AFF" />
            <Text style={styles.loadingText}>Loading data...</Text>
          </View>
        )}

        {error && <Text style={styles.errorText}>Error: {error.message}</Text>}

        {data && <Text style={styles.dataText}>{data}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  querySection: {
    padding: 20,
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1a1a1a',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  loadingText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  errorText: {
    fontSize: 14,
    color: '#FF3B30',
    textAlign: 'center',
    padding: 16,
  },
  dataText: {
    fontSize: 14,
    color: '#34C759',
    textAlign: 'center',
    padding: 16,
    fontWeight: '500',
  },
});
