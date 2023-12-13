<template>
    <div @click="open = !open" class="transition-all duration-700 inline-flex flex-col items-center">
        <button class="navi inline-flex items-center">
            {{ props.title }}
            <img class="w-2.5 h-2.5 ml-2.5" src="../assets//icons/down.svg" />
        </button>

        <div v-if="open" class="absolute z-10 bottom-[-105px] bg-white rounded-lg shadow-md w-36">
            <ul class="py-2 text-sm">
                <li>
                    <a href="#" class="block px-4 py-2 naviD">{{ props.op1 }}</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 naviD">{{ props.op2 }}</a>
                </li>
                <li>
                    <a href="#" class="block px-4 py-2 naviD">{{ props.op3 }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    title: String,
    op1: String,
    op2: String,
    op3: String
});

let open = ref(false);
</script>

<style type="text/tailwindcss" scoped>
@import 'tailwindcss/utilities';
@layer utilities {
    .navi {
        @apply relative mr-5 tracking-[1px] font-bold hover:text-blue-500;
    }
    .navi::after {
        @apply content-[''] bg-yellow-500 h-[3px] w-[0%] left-0 -bottom-[5px] rounded-xl duration-300 absolute
    }
    .navi:hover::after {
        @apply w-[100%]
    }

    .naviD {
        @apply relative mr-5 tracking-[1px] font-medium hover:text-blue-500;
    }
     .naviD::after {
        @apply content-[''] bg-yellow-500 h-[3px] w-[0%] left-0 -bottom-[5px] rounded-xl duration-300 absolute
    }
    .naviD:hover::after {
        @apply w-[100%]
    }
}
</style>