import { Dimensions, Platform, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  closeButton: {
  position: 'absolute',
  top: Platform.OS === 'ios' ? 60 : 40,
  right: 20,
  zIndex: 10,
},
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  chatArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  chatContent: {
    paddingTop: height * 0.7,
    paddingBottom: 10,
  },
  botMessage: {
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  userMessage: {
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  messageContent: {
    maxWidth: '85%',
    backgroundColor: '#1c1c1e',
    padding: 12,
    borderRadius: 10,
  },
  botText: {
    color: '#fff',
    fontSize: 16,
  },
  userText: {
    color: '#000',
    backgroundColor: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 12,
    borderRadius: 10,
  },
  timestamp: {
    color: '#aaa',
    fontSize: 10,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  typing: {
    backgroundColor: '#1c1c1e',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  typingDot: {
    color: '#888',
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputArea: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 46,
    borderTopWidth: 1,
    borderTopColor: '#222',
  },
  input: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#888',
    fontSize: 16,
    paddingVertical: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  reviewItem: {
  backgroundColor: '#1c1c1e',
  padding: 12,
  borderRadius: 10,
  marginBottom: 8,
},
ratingRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 16,
  gap: 8,
},
ratingButton: {
  backgroundColor: '#fff',
  padding: 10,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#ccc',
  width: 40,
  alignItems: 'center',
},
ratingText: {
  fontWeight: '600',
  color: '#333',
},


});

