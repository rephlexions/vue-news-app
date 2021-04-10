<template>
    <Toolbar>
        <template #left>
            <Button icon="pi pi-bars" @click="visibleLeft = true" />
            <div id="title" class="p-text-normal p-ml-4">News Reader</div>
        </template>
    </Toolbar>

    <Sidebar v-model:visible="visibleLeft">Feeds</Sidebar>
    <div class="p-grid">
        <div class="p-md-4 p-md-offset-4 p-sm-12 p-sm-offset-1">
            <MainContent :articles="articles"></MainContent>
        </div>
    </div>
    <ScrollTop />
</template>

<script>
import axios from "axios"
import { API_KEY } from "./env"
import Sidebar from "primevue/sidebar"
import Button from "primevue/button"
import Toolbar from "primevue/toolbar"
import MainContent from "./components/MainContent"
import ScrollTop from "primevue/scrolltop"

export default {
    name: "App",
    components: {
        Sidebar,
        Button,
        Toolbar,
        MainContent,
        ScrollTop,
    },
    data() {
        return {
            visibleLeft: false,
            articles: [],
            errors: [],
            API_KEY: API_KEY,
        }
    },
    created() {
        axios
            .get(
                "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=" +
                    this.API_KEY
            )
            .then((response) => {
                //this.articles = response.data.articles
                this.articles = response.data.articles
                console.log("data:")
                console.log(response.data.articles) // This will give you access to the full object
            })
            .catch((e) => {
                this.errors.push(e)
            })
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
