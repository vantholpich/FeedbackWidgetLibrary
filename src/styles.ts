import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const createStyles = (theme: {
    accentColor?: string;
    backgroundColor?: string;
    textColor?: string;
}) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor || '#F8F9FA',
        borderRadius: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
        margin: 16,
        maxHeight: height * 0.8,
    },
    header: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
        backgroundColor: '#FFF',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: theme.textColor || '#333',
    },
    list: {
        padding: 20,
    },
    feedbackItem: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    feedbackText: {
        fontSize: 16,
        color: theme.textColor || '#444',
        lineHeight: 22,
    },
    feedbackDate: {
        fontSize: 12,
        color: '#999',
        marginTop: 8,
    },
    inputSection: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        backgroundColor: '#FFF',
    },
    input: {
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        padding: 12,
        fontSize: 16,
        color: theme.textColor || '#333',
        minHeight: 100,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: theme.accentColor || '#007AFF',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 12,
    },
    submitButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
    },
    emptyStateText: {
        color: '#999',
        fontSize: 16,
    }
});
