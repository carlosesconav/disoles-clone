<template>
<div class="p-4 sm:w-1/2 lg:w-1/3">
    <div class="h-full border-2 hover:bg-yellow-100 transition duration-300 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
        <img :src="props.img" alt="image" class="lg:h-52 md:h-36 w-full object-cover object-center">
        <div class="p-6 text-gray-600 hover:text-blue-950  ease-in">
            <h2 class="text-2xl font-bold mb-3 border-solid border-black hover:text-blue-900 text-yellow-500"> {{ props.title }} </h2>
            <p class="leading-relaxed mb-3">{{ props.text }}</p>
        </div>
    </div>
</div>
</template>

<script setup>

const props = defineProps({
    img: String,
    title: String,
    text: String
});

</script>
