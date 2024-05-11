const getParsedPrice = (price: string): number => {
    return parseInt(price.replace(/[^\d.]/g, ''));
};

export default getParsedPrice;
