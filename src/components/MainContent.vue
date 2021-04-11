<template>
    <div
        v-for="article in articles"
        :key="article.title"
        class="article p-shadow-4"
    >
        <Card>
            <template #header>
                <img alt="user header" v-bind:src="article.image" />
            </template>
            <template #title>{{ article.title }}</template>
            <template #content>
                {{ article.description }}
            </template>
            <template #footer>
                <div class="p-grid">
                    <div class="p-col-3" style="padding-top: 1.4em">
                        <Tag value="" style="text-overflow: ellipsis">{{
                            article.source
                        }}</Tag>
                    </div>
                    <div class="p-col-3" style="padding-top: 1.4em">
                        <Tag severity="primary" value="">{{
                            article.category
                        }}</Tag>
                    </div>
                    <div class="p-col-6">
                        <a :href="article.url" target="_blank">
                            <Button icon="pi" label="Read more" />
                        </a>
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script>
import Card from "primevue/card"
import Button from "primevue/button"
import Tag from "primevue/tag"

export default {
    name: "MainContent",
    props: {
        articles: Array,
    },
    components: {
        Card,
        Button,
        Tag,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration: none;
}
.article {
    margin-top: 2em;
}
</style>
