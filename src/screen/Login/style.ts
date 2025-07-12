import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
 play: {
  fontSize: 48,
  fontFamily: 'Montserrat-Bold',
  color: 'yellow',
},
bank: {
  fontSize: 40,
  fontFamily: 'Montserrat-Bold',
  color: '#fff',
  marginTop: -10,
  marginLeft: 8,
},
  title: {
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    color: '#fff',
    marginBottom: 28,
    textAlign: 'center',
    width: '100%', 
  },
  input: {
    backgroundColor: '#fff',
    width: '100%', 
    maxWidth: 360,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#000',
  },
  forgot: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'right',
    width: '100%',
    maxWidth: 360,
    marginBottom: 32,
    fontFamily: 'Montserrat-Regular',
  },
  button: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 360,
    paddingVertical: 16,
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
});
