<script lang="ts" setup>


export type ButtonProps = {
    size?: 'sm' | 'default',
    font?: 'medium' | 'default',
}

defineProps<ButtonProps>();

</script>

<template>
    <button :class="{
        'text-sm px-2 py-1': size === 'sm',
        'text-md px-4 py-2': !size || size === 'default',
        'font-medium': font === 'medium',
        'font-normal': !font || font === 'default'
    }" class="
    bg-button-primary text-primary hover:bg-button-primary/90
    rounded-md
    ">
        <slot></slot>
    </button>
</template>