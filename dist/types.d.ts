export interface FeedbackItem {
    id: string;
    text: string;
    timestamp: number;
}
export interface FeedbackWidgetProps {
    storageKey?: string;
    accentColor?: string;
    backgroundColor?: string;
    textColor?: string;
    placeholderText?: string;
    submitButtonText?: string;
}
