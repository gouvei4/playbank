import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loanContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 24,
    padding: 20,
  },

  cardTextGroup: {
    flex: 1,
  },

  textWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  textCartEmpre: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },

  subTitle: {
    fontSize: 15,
    color: '#444',
    marginBottom: 4,
  },

  valor: {
    fontWeight: 'bold',
    color: '#000',
  },

  taxText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 4,
  },

  simulationBox: {
    backgroundColor: '#F3F3F3',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },

  simulationValue: {
    fontSize: 13,
    color: '#333',
    fontWeight: '500',
  },

  simularButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },

  simularText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },

  loanIcon: {
    marginRight: 12,
  },
});
