import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FeedbackItem } from './types';

const DEFAULT_STORAGE_KEY = '@feedback_items';

export const useFeedback = (storageKey: string = DEFAULT_STORAGE_KEY) => {
    const [items, setItems] = useState<FeedbackItem[]>([]);
    const [loading, setLoading] = useState(true);

    const loadItems = useCallback(async () => {
        try {
            setLoading(true);
            const data = await AsyncStorage.getItem(storageKey);
            if (data) {
                setItems(JSON.parse(data));
            }
        } catch (error) {
            console.error('Failed to load feedback:', error);
        } finally {
            setLoading(false);
        }
    }, [storageKey]);

    useEffect(() => {
        loadItems();
    }, [loadItems]);

    const addFeedback = async (text: string) => {
        if (!text.trim()) return;

        const newItem: FeedbackItem = {
            id: Date.now().toString(),
            text,
            timestamp: Date.now(),
        };

        const newItems = [newItem, ...items];
        setItems(newItems);

        try {
            await AsyncStorage.setItem(storageKey, JSON.stringify(newItems));
        } catch (error) {
            console.error('Failed to save feedback:', error);
        }
    };

    return { items, loading, addFeedback };
};
