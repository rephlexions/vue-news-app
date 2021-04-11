<template>
    <Toolbar>
        <template #left>
            <div id="title" class="p-text-normal p-ml-4">News Reader</div>
        </template>
        <template #right>
            <Button
                label="General"
                @click="setResource('general')"
                class="p-mr-2"
            />
            <Button
                label="Technology"
                @click="setResource('technology')"
                class="p-mr-2"
            />
            <Button
                label="Science"
                @click="setResource('science')"
                class="p-mr-2"
            />
        </template>
    </Toolbar>
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
import Button from "primevue/button"
import Toolbar from "primevue/toolbar"
import ScrollTop from "primevue/scrolltop"
import MainContent from "./components/MainContent"

export default {
    name: "App",
    components: {
        Button,
        Toolbar,
        MainContent,
        ScrollTop,
    },
    data() {
        return {
            visibleTop: false,
            articles: [],
            errors: [],
            API_KEY: API_KEY,
        }
    },
    created() {
        axios
            .get(
                "http://api.mediastack.com/v1/news?categories=general&languages=en&access_key=" +
                    this.API_KEY
            )
            .then((response) => {
                this.articles = response.data.data
            })
            .catch((e) => {
                this.errors.push(e)
            })
    },
    methods: {
        setResource(source) {
            axios
                .get(
                    "http://api.mediastack.com/v1/news?categories=" +
                        source +
                        "&languages=en&access_key=" +
                        this.API_KEY
                )
                .then((response) => {
                    this.articles = response.data.data
                })
                .catch((e) => {
                    this.errors.push(e)
                })
        },
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
