<template>
    <div class="container float-right">
        <news-item class="mt-3 mb-3" v-for="name in $store.getters.stockNames" :key="name" ></news-item>
    </div>
</template>
<script>
import newsItem from './NewsItem'
export default {
    components: { newsItem }
}
</script>