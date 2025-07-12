import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
    gradientContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 15,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  label: {
    fontSize: 13,
    color: '#888',
    marginBottom: 6,
  },
  value: {
    fontSize: 15,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    margin: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
