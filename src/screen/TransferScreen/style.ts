import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 80,
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  amountContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 10,
  },
  currencySymbol: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 4,
  },
  reaisText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#333',
  },
  centavosText: {
    fontSize: 32,
    fontWeight: '500',
    color: '#333',
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffebeb',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  warningIcon: {
    color: '#ff4c4c',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  warningText: {
    color: '#ff4c4c',
    fontSize: 14,
  },
  availableAmountText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 30,
  },
  reasonContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  reasonLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  reasonInput: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  charCount: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 18,
    paddingHorizontal: 24,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  continueButtonDisabled: {
    backgroundColor: '#000',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  keypadContainer: {
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  keyButton: {
    width: width / 4 - 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  keyText: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'normal',
  },
  backButton: {
    position: 'absolute',
    left: -30,
  },
  animatedInput: {
  fontSize: 60,
  fontWeight: 'bold',
  color: '#333',
  paddingVertical: 0,
},

footer: {
  width: '100%',
  paddingHorizontal: 20,
  alignItems: 'center',
  justifyContent: 'center',
},

helperText: {
  fontSize: 14,
  color: '#666',
  marginTop: 8,
},

hiddenInput: {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 1,
  height: 1,
  opacity: 0,
},


});
