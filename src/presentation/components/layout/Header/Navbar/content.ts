import { HOME, PRODUCTS } from '@constant/routes.ts';

type LinkT = {
    text: string
    url: string
}

const LINKS: LinkT[] = [
    {text: 'Home', url: HOME},
    {text: 'Products', url: PRODUCTS},
];

export default LINKS;
