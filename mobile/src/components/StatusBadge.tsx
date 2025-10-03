import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, borderRadius } from '../constants/theme';

interface StatusBadgeProps {
  status: 'pending' | 'accepted' | 'declined' | 'cancelled' | 'available' | 'sold';
  label?: string;
}

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  const getBadgeColor = () => {
    switch (status) {
      case 'accepted':
      case 'available':
        return colors.status.success;
      case 'pending':
        return colors.accent.amber;
      case 'declined':
        return colors.status.error;
      case 'cancelled':
      case 'sold':
        return colors.status.neutral;
      default:
        return colors.status.neutral;
    }
  };

  const getBadgeStyles = () => {
    const bgColor = getBadgeColor();
    return {
      backgroundColor: bgColor + '20',
    };
  };

  const getTextColor = () => {
    return getBadgeColor();
  };

  const displayLabel = label || status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <View style={[styles.badge, getBadgeStyles()]}>
      <Text style={[styles.text, { color: getTextColor() }]}>{displayLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  text: {
    ...typography.small,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
