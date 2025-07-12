import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    quickActions: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 0,
        borderRadius: 16,
        marginBottom: 24,
        height: 120,
        position: 'relative',
        overflow: 'hidden',
    },

    cardTextGroup: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 120,
    },

    textCart: {
        color: '#000',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 8,
    },

    link: {
        color: '#4DA6FF',
        fontWeight: 'bold',
        fontSize: 14,
        textDecorationLine: 'underline',
    },

    cardImage: {
        height: 120,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: 120,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        resizeMode: 'cover',
    },
})