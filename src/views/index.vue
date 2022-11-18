<template>
    <div>
        home
        <div>
            {{ store.count }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '../store/useStore';
const store = useStore();
</script>

<style scoped>

</style>