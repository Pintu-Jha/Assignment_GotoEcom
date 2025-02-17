import React from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator, 
  Text,
  RefreshControl
} from 'react-native';
import { Movie } from '../types/movie';
import MovieCard from './MovieCard';
import { spacing } from '../styles/spacing';
import { textScale } from '../styles/responsiveStyles';

interface MovieListProps {
  movies: Movie[];
  isLoading?: boolean;
  error?: unknown;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  ListEmptyComponent?: React.ComponentType<any> | React.ReactElement | null;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  isLoading = false,
  error,
  onRefresh,
  isRefreshing = false,
  ListEmptyComponent
}) => {
  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>
          Error loading movies. Please try again.
        </Text>
      </View>
    );
  }

  return (
    <FlatList<Movie>
      data={movies}
      renderItem={({ item }) => <MovieCard movie={item} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      ListEmptyComponent={ListEmptyComponent || (
        <View style={styles.centerContainer}>
          <Text style={styles.emptyText}>No movies found</Text>
        </View>
      )}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        ) : undefined
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: spacing.PADDING_10,
    flexGrow: 1
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.PADDING_20
  },
  errorText: {
    color: 'red',
    fontSize: textScale(16),
    textAlign: 'center'
  },
  emptyText: {
    color: '#666',
    fontSize: textScale(16),
    textAlign: 'center'
  }
});

export default MovieList;