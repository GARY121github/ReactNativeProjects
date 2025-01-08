import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

type UnsplashImage = {
  id: string;
  urls: {
    regular: string;
  };
};

const UNSPLASH_ACCESS_KEY = '';
const BASE_URL = 'https://api.unsplash.com/photos';

const FlatCards: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch images from Unsplash API
  const fetchImages = async (pageNum: number) => {
    try {
      setLoading(true);
      setError(null); // Reset error state
      const response = await fetch(
        `${BASE_URL}?page=${pageNum}&per_page=10&client_id=${UNSPLASH_ACCESS_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data: UnsplashImage[] = await response.json();
      setImages((prevImages) => [...prevImages, ...data]);
    } catch (err) {
      console.error('Error fetching images:', err);
      setError('Unable to load images. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((image , index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: image.urls.regular }} style={styles.cardImage} />
          </View>
        ))}
      </ScrollView>

      {error && <Text style={styles.errorText}>{error}</Text>}

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      ) : (
        <TouchableOpacity style={styles.loadMoreButton} onPress={handleLoadMore}>
          <Text style={styles.loadMoreButtonText}>Load More</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    height: 280,
    width: 350,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  cardImage: {
    height: '100%',
    width: '100%',
  },
  loader: {
    marginVertical: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
  },
  loadMoreButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  loadMoreButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});



export default FlatCards;
