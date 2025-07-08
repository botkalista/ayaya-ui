<script lang="ts" setup>

export type ButtonProps = {
    size?: 'sm' | 'default',
    font?: 'medium' | 'default',
    disabled?: boolean,
    loading?: boolean,
    variant?: 'success' | 'error' | 'warning' | 'secondary' | 'default'
}

defineProps<ButtonProps>();

</script>

<template>
    <button :class="{
        'text-sm px-2 py-1': size === 'sm',
        'text-md px-4 py-2': !size || size === 'default',
        'font-medium': font === 'medium',
        'font-normal': !font || font === 'default',

        'bg-button-success hover:bg-button-success/90': variant === 'success',
        'bg-button-error hover:bg-button-error/90': variant === 'error',
        'bg-button-warning hover:bg-button-warning/90': variant === 'warning',
        'bg-button-secondary hover:bg-button-secondary/90': variant === 'secondary',
        'bg-button-primary hover:bg-button-primary/90': !variant || variant === 'default',

        'brightness-50 hover:!bg-button-primary cursor-default': disabled
    }" class="text-primary rounded-md h-fit">
        <Loader v-if="loading"></Loader>
        <slot v-else></slot>
    </button>
</template>