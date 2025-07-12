import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
      gradientBackground: {
        flex: 1,
    },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
    color: '#000',
  },
  confirmButton: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    backgroundColor: '#000',
    paddingVertical: 14,
  },
  confirmText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center'
  },
});
