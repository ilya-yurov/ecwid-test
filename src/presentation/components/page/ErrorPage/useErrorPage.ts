const MAP_ERROR_TO_CONTENT: Record<string, string> = {
    '400': 'Bad request',
    '500': 'Server error',
    '404': 'Not found'
};

const useErrorPage = (): string[] => {
    const route = useRoute();
    const errorCode = route.params.pathMatch[0];
    const errorText = MAP_ERROR_TO_CONTENT[errorCode];

    if (errorText) {
        return [errorCode, errorText];
    }

    return ['404', 'Not found'];
};

export default useErrorPage;
