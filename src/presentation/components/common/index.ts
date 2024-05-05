import type { Component } from 'vue';
//Controls
import BaseButton from '@presentation/components/common/control/BaseButton/index.vue';

type ComponentT = {
    name: string;
    component: Component;
};

const commonComponents: ComponentT[] = [
    { name: 'BaseButton', component: BaseButton }
];

export default commonComponents;
