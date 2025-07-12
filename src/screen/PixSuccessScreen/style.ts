import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 50,
    zIndex: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
  width: 250,
  height: 160,
  alignSelf: 'center',
  marginBottom: 30,
},
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 40,
    alignItems: 'center',
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  infoText: {
    marginLeft: 10,
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
  },
  scheduled: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  buttonPrimary: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 28,
    marginBottom: 16,
    width: '90%',
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondary: {
    borderColor: '#000',
    borderWidth: 1.5,
    paddingVertical: 12,
    paddingHorizontal: 28,
    width: '90%',
    alignItems: 'center',
  },
  buttonSecondaryText: {
    color: '#0053B3',
    fontSize: 16,
    fontWeight: '600',
  },
});
