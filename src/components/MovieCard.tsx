import React, { useMemo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Movie, Genre } from '../types/movie';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addToShortlist, removeFromShortlist } from '../store/movieSlice';
import { spacing } from '../styles/spacing';
import { textScale } from '../styles/responsiveStyles';

interface MovieCardProps {
  movie: Movie;
  genres?: Genre[];
  onPress?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, genres, onPress }) => {
  const dispatch = useAppDispatch();
  const shortlistedMovies = useAppSelector((state) => state.movies.shortlistedMovies);
  const isShortlisted = shortlistedMovies.some((m) => m.id === movie.id);
  
  const formattedDate = useMemo(() => {
    if (!movie.release_date) return 'Release date unknown';
    return new Date(movie.release_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }, [movie.release_date]);

  const rating = useMemo(() => {
    return `${movie.vote_average.toFixed(1)}/10`;
  }, [movie.vote_average]);

  const toggleShortlist = () => {
    if (isShortlisted) {
      dispatch(removeFromShortlist(movie.id));
    } else {
      dispatch(addToShortlist(movie));
    }
  };

  const movieGenres = useMemo(() => {
    if (!genres || !movie.genre_ids) return [];
    return movie.genre_ids
      .map(id => genres.find(g => g.id === id)?.name)
      .filter(name => name)
      .slice(0, 3); 
  }, [genres, movie.genre_ids]);

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.card}>
        <View style={styles.posterContainer}>
          <Image
            style={styles.poster}
            source={{ 
              uri: movie.poster_path 
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
            }}
            defaultSource={require('../assets/Image/poster.jpeg')}
          />
          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>

        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={2}>
            {movie.title}
          </Text>
          
          {movieGenres.length > 0 && (
            <View style={styles.genreContainer}>
              {movieGenres.map((genre, index) => (
                <View key={index} style={styles.genreBadge}>
                  <Text style={styles.genreText}>{genre}</Text>
                </View>
              ))}
            </View>
          )}

          <Text style={styles.date}>{formattedDate}</Text>
          
          <Text style={styles.overview} numberOfLines={3}>
            {movie.overview || 'No overview available'}
          </Text>

          <TouchableOpacity
            style={[styles.shortlistButton, isShortlisted && styles.shortlisted]}
            onPress={toggleShortlist}
          >
            <Text style={styles.buttonText}>
              {isShortlisted ? 'Remove from Shortlist' : 'Add to Shortlist'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.MARGIN_8,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: spacing.RADIUS_12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  posterContainer: {
    position: 'relative',
    margin: spacing.MARGIN_12,
  },
  poster: {
    width: spacing.WIDTH_105,
    height: spacing.HEIGHT_150,
    borderRadius: spacing.RADIUS_10,
    backgroundColor: '#f0f0f0',
  },
  ratingBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#1a1a1a',
    borderRadius: spacing.RADIUS_12,
    paddingVertical: spacing.PADDING_4,
    paddingHorizontal: spacing.PADDING_8,
  },
  ratingText: {
    color: '#fff',
    fontSize: textScale(12),
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    padding: spacing.PADDING_12,
    paddingLeft: 0,
  },
  title: {
    fontSize: textScale(18),
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: spacing.MARGIN_4,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.MARGIN_8,
  },
  genreBadge: {
    backgroundColor: '#f0f0f0',
    borderRadius: spacing.RADIUS_12,
    paddingHorizontal: spacing.PADDING_8,
    paddingVertical: spacing.PADDING_4,
    marginRight: spacing.MARGIN_6,
    marginBottom: spacing.MARGIN_6,
  },
  genreText: {
    fontSize: textScale(12),
    color: '#666',
  },
  date: {
    fontSize: textScale(13),
    color: '#666',
    marginBottom: spacing.MARGIN_8,
  },
  overview: {
    fontSize: textScale(14),
    color: '#444',
    lineHeight: spacing.HEIGHT_20,
    marginBottom: spacing.MARGIN_12,
  },
  shortlistButton: {
    backgroundColor: '#007AFF',
    padding: spacing.PADDING_12,
    borderRadius: spacing.RADIUS_8,
    alignItems: 'center',
  },
  shortlisted: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: textScale(14),
  },
});

export default MovieCard;