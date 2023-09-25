<template>
    <div class="Section-Component">
        <h5 v-if="hasName" class="Section-Component-Header">{{ name }}</h5>
        <div v-if="hasContent" class="card">
            <p class="Section-Component-Content">{{ content }}</p>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'SectionComponent',
    props: {
        name: String,
        content: String
    },
    computed: {
        hasContent() {
            return !!this.content
        },
        hasName() {
            return !!this.name
        }
    }

  }
</script>
  
 <style>
    .Section-Component {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0vmin 1vmin;
        margin: 5vw 5vh;
    }

    .Section-Component-Content {
        align-items: center;
        text-align: left;
        padding: 1vmin 3vmin 0vmin 3vmin;
        font-size: calc(5px + 1vmin);
    }

    .Section-Component-Header {
        align-items: center;
        text-align: center;
        padding: 0vmin 3vmin 0vmin 3vmin;
        font-size: calc(10px + 2vmin);
    }
</style>
  