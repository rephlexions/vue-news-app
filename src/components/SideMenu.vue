<template>
    <div class="sidebar">
        <Listbox
            id="listbox"
            :options="sources"
            optionLabel="name"
            :filter="true"
            listStyle="max-height:100vh"
            v-model="selectedSource"
            @click="selectSource"
        />
    </div>
</template>
<script>
import Listbox from "primevue/listbox"
import axios from "axios"

export default {
    name: "App",
    components: {
        Listbox,
    },
    props: {
        API_KEY: String,
    },
    data() {
        return {
            sources: [],
            selectedSource: [],
        }
    },
    methods: {
        selectSource() {
            console.log(this.selectedSource.id)
            this.$emit("selectsource", this.selectedSource.id)
        },
    },
    created() {
        axios
            .get(
                "https://newsapi.org/v2/sources?language=en&apiKey=" +
                    this.API_KEY
            )
            .then((response) => {
                //this.articles = response.data.articles
                this.sources = response.data.sources
            })
            .catch((e) => {
                this.errors.push(e)
            })
    },
}
</script>
<style>
#listbox {
    padding-top: 2em;
}
</style>
