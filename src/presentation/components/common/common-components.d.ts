//Controls
import BaseButton from '@presentation/components/common/control/BaseButton/index.vue';

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        BaseButton: typeof BaseButton;
    }
}
