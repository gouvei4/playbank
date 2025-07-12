  import { StyleSheet } from 'react-native';
  
  export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginTop: 40,
  },
  successText: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#2e7d32',
  },
  amount: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cents: {
    fontSize: 24,
    position: 'relative',
    top: -10,
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 20,
    marginTop: 30,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  infoLabel: {
    fontWeight: '600',
    color: '#666',
  },
  infoValue: {
    fontWeight: '500',
    color: '#000',
  },
  shareButton: {
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 250,
    paddingVertical: 14,
    paddingHorizontal: 84,
  },
  shareButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  secondaryButton: {
    top: 260,
    marginTop: 20,
  },
  secondaryButtonText: {
    color: '#003EDD',
    fontWeight: '600',
  },
  pdfButton: {
  backgroundColor: '#003EDD',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 14,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginTop: 20,
},
pdfButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  marginLeft: 8,
},

buttonGroup: {
  marginTop: 'auto',
  alignItems: 'center',
  paddingBottom: 80,
  width: 360,
},


})