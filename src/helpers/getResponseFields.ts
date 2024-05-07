const getResponseFields = (instance: object): string => {
    return `items(${Object.keys(instance).join(', ')}`;
};

export default getResponseFields;
