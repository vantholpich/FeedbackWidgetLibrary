import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator
} from 'react-native';
import { FeedbackWidgetProps } from './types';
import { createStyles } from './styles';
import { useFeedback } from './useFeedback';

export const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({
    storageKey,
    accentColor,
    backgroundColor,
    textColor,
    placeholderText = "Enter your feedback here...",
    submitButtonText = "Send Feedback"
}) => {
    const [inputText, setInputText] = useState('');
    const styles = createStyles({ accentColor, backgroundColor, textColor });
    const { items, loading, addFeedback } = useFeedback(storageKey);

    const handleSubmit = async () => {
        if (!inputText.trim()) return;
        await addFeedback(inputText);
        setInputText('');
    };

    const renderFeedbackItem = ({ item }: { item: any }) => (
        <View style={styles.feedbackItem}>
            <Text style={styles.feedbackText}>{item.text}</Text>
            <Text style={styles.feedbackDate}>
                {new Date(item.timestamp).toLocaleDateString()} at {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
        </View>
    );

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.headerTitle}>App Feedback</Text>
            </View>

            <FlatList
                data={items}
                renderItem={renderFeedbackItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                    loading ? (
                        <ActivityIndicator size="large" color={accentColor || '#007AFF'} style={{ marginTop: 40 }} />
                    ) : (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyStateText}>No feedback yet. Be the first!</Text>
                        </View>
                    )
                }
                inverted={false} // Keeping it standard, but we show latest first in the array logic
            />

            <View style={styles.inputSection}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholderText}
                    placeholderTextColor="#999"
                    value={inputText}
                    onChangeText={setInputText}
                    multiline
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={handleSubmit}
                    activeOpacity={0.8}
                >
                    <Text style={styles.submitButtonText}>{submitButtonText}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};
