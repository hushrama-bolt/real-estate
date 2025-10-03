import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { colors, borderRadius, shadows } from '../constants/theme';

interface FABProps {
  onPress: () => void;
  icon: React.ReactNode;
}

export default function FAB({ onPress, icon }: FABProps) {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress} activeOpacity={0.8}>
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 24,
    top: 16,
    width: 56,
    height: 56,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.card,
  },
});
