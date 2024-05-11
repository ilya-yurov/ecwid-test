const formatPrice = (price: number): string => {
    return (
        price
            .toLocaleString('en-US', { minimumFractionDigits: 2 })
            .replace(',', ' ') + '₽'
    );
};

export default formatPrice;
