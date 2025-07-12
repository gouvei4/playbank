import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flex: 1},
  header: { paddingTop: 50, paddingBottom: 30, paddingHorizontal: 20 },
  backButton: { position: 'absolute', top: 50, left: 20 },
  profile: { alignItems: 'center', marginTop: 20 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  name: { fontSize: 20, fontWeight: '600' },
  email: { fontSize: 14, color: '#333' },
  section: { marginTop: 20, paddingHorizontal: 20 },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  iconText: { flexDirection: 'row', alignItems: 'center' },
  textGroup: { marginLeft: 12, maxWidth: '85%' },
  itemTitle: { fontSize: 15, fontWeight: '500' },
  itemDesc: { fontSize: 13, color: '#666' },
  cancelContainer: { marginTop: 30, alignItems: 'center', padding: 20 },
  cancelText: { fontSize: 13, color: '#666', textAlign: 'center' },
  cancelLink: { color: '#007BFF', fontWeight: '500' },
    accountInfo: {
    marginTop: 8,
    alignItems: 'center',
  },
  accountText: {
    fontSize: 13,
    color: '#444',
  },
  accountValue: {
    fontWeight: '600',
    color: '#000',
  },

});
