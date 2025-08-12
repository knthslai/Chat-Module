import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ExampleComponentProps {
  title?: string;
}

export const ExampleComponent: React.FC<ExampleComponentProps> = ({
  title = 'Welcome to React Native Expo with TanStack Query!',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>
        This is a starter template with all the essential tools configured.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 24,
  },
});
