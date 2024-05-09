const getResponseFields = (instance: object, isList = false): string => {
    const fields = Object.keys(instance).join(', ');

    return isList ? `items(${fields})` : fields;
};

export default getResponseFields;
