import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Property } from '../types';
import { colors, typography, borderRadius, shadows, spacing } from '../constants/theme';
import StatusBadge from './StatusBadge';

interface PropertyCardProps {
  property: Property;
  onPress: () => void;
}

export default function PropertyCard({ property, onPress }: PropertyCardProps) {
  const firstImage = property.images?.[0]?.image_url;
  const statusColor = property.status === 'available' ? '#10b981' : '#6b7280';

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      {firstImage ? (
        <Image source={{ uri: firstImage }} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.price}>${property.price.toLocaleString()}</Text>

        <Text style={styles.address} numberOfLines={1}>
          {property.address}, {property.city}
        </Text>

        <View style={styles.details}>
          <Text style={styles.detailText}>{property.bedrooms} beds</Text>
          <Text style={styles.separator}>·</Text>
          <Text style={styles.detailText}>{property.bathrooms} baths</Text>
          {property.square_feet && (
            <>
              <Text style={styles.separator}>·</Text>
              <Text style={styles.detailText}>{property.square_feet.toLocaleString()} sqft</Text>
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface.white,
    borderRadius: borderRadius.xl,
    marginBottom: spacing.md,
    ...shadows.card,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 240,
  },
  imagePlaceholder: {
    width: '100%',
    height: 240,
    backgroundColor: colors.surface.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    ...typography.caption,
    color: colors.text.muted,
  },
  content: {
    padding: spacing.md,
  },
  price: {
    ...typography.h2,
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  address: {
    ...typography.caption,
    color: colors.text.muted,
    marginBottom: spacing.sm,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    ...typography.caption,
    color: colors.text.primary,
  },
  separator: {
    marginHorizontal: spacing.sm,
    color: colors.text.muted,
  },
});
