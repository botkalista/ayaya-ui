<script lang="ts" setup>

export type TabsProps = {
    items: { id: string, label: string }[]
}

const props = defineProps<TabsProps>();

const _activeItem = ref<string>(props.items[0].id);

</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex border-solid border-[1px] border-[#DDDDDD] rounded-md w-fit">
            <div @click="_activeItem = item.id" v-for="item of items"
                :class="{ 'bg-primary-foreground/30': item.id === _activeItem }"
                class="text-primary-foreground hover:bg-primary-foreground/20 cursor-pointer px-3 py-2">
                {{ item.label }}
            </div>
        </div>
        <slot :name="_activeItem"></slot>
    </div>
</template>