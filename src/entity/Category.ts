export default class Category {
    public static CreateEmpty(): Category {
        return new Category(NaN, '', '', NaN);
    }

    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly imageUrl: string,
        public readonly parentId: number
    ) {}
}
