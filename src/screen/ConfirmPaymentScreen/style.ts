import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  amount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
  },
  label: {
    fontSize: 14,
    color: '#777',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
  },
  subValue: {
    fontSize: 14,
    color: '#555',
  },
  confirmButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 240,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  scheduleButton: {
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
  scheduleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
