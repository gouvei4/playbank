import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  card: {
    width: 320,
    borderRadius: 16,
    backgroundColor: '#fff',
    marginHorizontal: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1c1c1e',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#3a3a3c',
  },
  arrow: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    fontSize: 22,
    color: '#007aff',
  },
});
