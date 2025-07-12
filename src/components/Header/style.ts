import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },

  headerText: {
    fontSize: 16,
    fontWeight: '600',
  },

  helpButton: {
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  helpText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})