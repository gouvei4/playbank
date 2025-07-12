import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    balanceCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
    },

    balanceTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    saldoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 4,
    },

    textTitle: {
        fontSize: 16,
        fontWeight: '300',
        color: '#000',
    },

    cdiContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: 'rgba(84, 224, 63, 0.1)',
        borderColor: '#00C77E',
        borderRadius: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },

    cdiText: {
        fontSize: 10,
        color: '#00C77E',
        marginLeft: 4,
        fontWeight: '500',
    },

    balanceText: {
        fontSize: 22,
        color: '#000',
        fontFamily: 'RobotoMono-Regular',
    },

    balanceActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },

    actionButton: {
        width: 84,
        alignItems: 'center',
    },

    balanceIconPlaceholder: {
        width: 54,
        height: 54,
        borderRadius: 36,
        borderColor: '#000',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
        shadowColor: '#FFD700',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        opacity: 1.5
    },

    actionText: {
        color: '#000',
        fontWeight: '600',
        fontSize: 12,
    },
})