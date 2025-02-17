import React, { useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { useQuery } from 'react-query';
import { fetchMovies } from '../api/movieApi';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import { spacing } from '../styles/spacing';
import { textScale } from '../styles/responsiveStyles';

const ListingScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const { 
    data, 
    isLoading, 
    error,
    refetch,
    isRefetching 
  } = useQuery(
    ['movies', searchQuery],
    () => fetchMovies(searchQuery),
    {
      enabled: searchQuery.length > 0,
    }
  );

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search movies..."
      />
      <MovieList
        movies={data?.results || []}
        isLoading={isLoading}
        error={error}
        onRefresh={refetch}
        isRefreshing={isRefetching}
        ListEmptyComponent={
          searchQuery.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>
                Search for movies to get started
              </Text>
            </View>
          ) : undefined
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

export default ListingScreen;