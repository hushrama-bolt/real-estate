import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuthStore } from '../store/authStore';
import { useProperties } from '../hooks/useProperties';
import PropertyCard from '../components/PropertyCard';
import FAB from '../components/FAB';
import { MainStackParamList } from '../types';
import { colors, typography, spacing, borderRadius } from '../constants/theme';

type NavigationProp = StackNavigationProp<MainStackParamList>;

export default function SellerHomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const profile = useAuthStore(state => state.profile);
  const { properties, isLoading } = useProperties(profile?.id);

  const handlePropertyPress = (propertyId: string) => {
    navigation.navigate('PropertyDetails', { propertyId });
  };

  const handleAddProperty = () => {
    navigation.navigate('AddProperty');
  };

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <View style={styles.illustrationContainer}>
        <View style={styles.illustration}>
          <Text style={styles.illustrationEmoji}>🏠</Text>
        </View>
      </View>
      <Text style={styles.emptyTitle}>No properties listed yet</Text>
      <Text style={styles.emptySubtitle}>
        Start listing your properties to connect{`\n`}with potential buyers.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Properties</Text>
        <FAB
          onPress={handleAddProperty}
          icon={<Text style={styles.fabIcon}>+</Text>}
        />
      </View>

      <FlatList
        data={properties}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PropertyCard property={item} onPress={() => handlePropertyPress(item.id)} />
        )}
        contentContainerStyle={styles.listContent}
        refreshing={isLoading}
        ListEmptyComponent={!isLoading ? renderEmptyState : null}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.light,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  title: {
    ...typography.h1,
    color: colors.text.primary,
  },
  fabIcon: {
    fontSize: 28,
    color: colors.primary,
    fontWeight: '400',
  },
  listContent: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
  },
  emptyState: {
    alignItems: 'center',
    paddingTop: spacing['2xl'],
  },
  illustrationContainer: {
    marginBottom: spacing.lg,
  },
  illustration: {
    width: 280,
    height: 280,
    backgroundColor: '#FFF4E6',
    borderRadius: borderRadius.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationEmoji: {
    fontSize: 120,
  },
  emptyTitle: {
    ...typography.h2,
    color: colors.text.primary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  emptySubtitle: {
    ...typography.body,
    color: colors.text.muted,
    textAlign: 'center',
    lineHeight: 24,
  },
});
