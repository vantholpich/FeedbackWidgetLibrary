export declare const createStyles: (theme: {
    accentColor?: string;
    backgroundColor?: string;
    textColor?: string;
}) => {
    container: {
        flex: number;
        backgroundColor: string;
        borderRadius: number;
        overflow: "hidden";
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
        margin: number;
        maxHeight: number;
    };
    header: {
        padding: number;
        borderBottomWidth: number;
        borderBottomColor: string;
        backgroundColor: string;
    };
    headerTitle: {
        fontSize: number;
        fontWeight: "700";
        color: string;
    };
    list: {
        padding: number;
    };
    feedbackItem: {
        backgroundColor: string;
        padding: number;
        borderRadius: number;
        marginBottom: number;
        borderWidth: number;
        borderColor: string;
    };
    feedbackText: {
        fontSize: number;
        color: string;
        lineHeight: number;
    };
    feedbackDate: {
        fontSize: number;
        color: string;
        marginTop: number;
    };
    inputSection: {
        padding: number;
        borderTopWidth: number;
        borderTopColor: string;
        backgroundColor: string;
    };
    input: {
        backgroundColor: string;
        borderRadius: number;
        padding: number;
        fontSize: number;
        color: string;
        minHeight: number;
        textAlignVertical: "top";
    };
    submitButton: {
        backgroundColor: string;
        paddingVertical: number;
        borderRadius: number;
        alignItems: "center";
        marginTop: number;
    };
    submitButtonText: {
        color: string;
        fontSize: number;
        fontWeight: "600";
    };
    emptyState: {
        alignItems: "center";
        justifyContent: "center";
        paddingVertical: number;
    };
    emptyStateText: {
        color: string;
        fontSize: number;
    };
};
