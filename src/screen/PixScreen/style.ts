import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    gradientBackground: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 16,
        paddingTop: 60,
        paddingBottom: 40,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    backButton: {
        marginRight: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    button: {
        width: '23%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    iconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    buttonLabel: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5,
        color: '#000',
    },
    newBadge: {
        fontSize: 10,
        color: '#007aff',
        fontWeight: 'bold',
    },
    section: {
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
    keyRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    keyText: {
        flex: 1,
        marginLeft: 6,
        color: '#333',
    },
    link: {
        color: '#007aff',
        marginTop: 8,
        fontWeight: '500',
    },
    limitRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    limitBox: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    limitBadge: {
        fontSize: 10,
        color: '#007aff',
        fontWeight: 'bold',
    },
    limitLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 6,
    },
    limitDesc: {
        fontSize: 11,
        textAlign: 'center',
        marginTop: 4,
        color: '#555',
    },
});
