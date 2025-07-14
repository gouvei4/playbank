import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFD600',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  totalContainer: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  totalTitle: {
    fontSize: 16,
    color: '#666',
  },
  totalAmount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
    marginVertical: 8,
  },
  cdi: {
    fontSize: 12,
    color: 'green',
    marginBottom: 12,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  piggyContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  piggyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  piggyIcon: {
    width: 40,
    height: 40,
  },
  piggyName: {
    fontSize: 16,
    flex: 1,
    marginLeft: 12,
    color: '#333',
  },
  piggyValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  tipContainer: {
    backgroundColor: '#fff',
    margin: 16,
    marginTop: 10,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tipTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  tipText: {
    fontSize: 14,
    color: '#555',
  },
});
