import { FeedbackItem } from './types';
export declare const useFeedback: (storageKey?: string) => {
    items: FeedbackItem[];
    loading: boolean;
    addFeedback: (text: string) => Promise<void>;
};
