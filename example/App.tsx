import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { FeedbackWidget } from 'react-native-feedback-board';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.inner}>
                <FeedbackWidget
                    accentColor="#007AFF"
                    placeholderText="Tell us what you think..."
                    submitButtonText="Post Feedback"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    inner: {
        flex: 1,
        paddingTop: 20,
    }
});
