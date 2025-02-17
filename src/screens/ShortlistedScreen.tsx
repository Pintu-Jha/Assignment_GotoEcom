import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useAppSelector } from '../hooks';
import MovieList from '../components/MovieList';
import { spacing } from '../styles/spacing';
import { textScale } from '../styles/responsiveStyles';

const ShortlistedScreen: React.FC = () => {
  const shortlistedMovies = useAppSelector((state) => state.movies.shortlistedMovies);

  return (
    <View style={styles.container}>
      <MovieList
        movies={shortlistedMovies}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No movies have been shortlisted yet
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.PADDING_20
  },
  emptyText: {
    color: '#666',
    fontSize: textScale(16),
    textAlign: 'center'
  }
});

export default ShortlistedScreen;