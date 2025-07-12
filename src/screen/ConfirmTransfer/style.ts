import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  amount: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40,
    flexDirection: 'row',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  optionBox: {
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
    width: 190,
    marginLeft: 'auto',
    marginRight: 14,
  },
  onSelected: {
    borderColor: '#003EDD',
  },
  optionTitle: {
    fontWeight: '600',
    marginTop: 8,
  },
  optionValue: {
    color: '#444',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#000',
    width: 360,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 440,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 20,
  },

  backButton: {
    marginRight: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: '600',
    left: 100,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cents: {
    fontSize: 24,
    lineHeight: 48, 
    position: 'relative',
    top: -10, 
  },


});
