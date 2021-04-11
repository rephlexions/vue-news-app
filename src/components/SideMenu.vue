<template>
    <div class="sidebar">
        <div class="p-grid">
            <div class="p-col">
                <Button label="General" class="p-button-warning p-button-lg" />
            </div>
            <div class="p-col">2</div>
            <div class="p-col">3</div>
        </div>
    </div>
</template>
<script>
//import Listbox from "primevue/listbox"
//import axios from "axios"
//import SelectButton from "primevue/selectbutton"
import Button from "primevue/button"

export default {
    name: "App",
    components: {
        // Listbox,
        //SelectButton,
        Button,
    },
    props: {
        API_KEY: String,
    },
    data() {
        return {
            sources: [
                { name: "General" },
                { name: "technology" },
                { name: "science" },
                { name: "entertainment" },
            ],
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
        /*
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
            */
    },
}
</script>
<style>
#listbox {
    padding-top: 2em;
}

#selectbutton {
    transform: scale(1.5);
}

.p-col {
    margin-top: 5em;
}
.p-button-lg {
    font-size: 1px;
}
</style>
