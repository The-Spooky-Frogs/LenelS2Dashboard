<template>
    <div className="Section-Component">
        <p className="Section-Component-Header"> {{ name }} </p>  
        <p className="Section-Component-Content"> {{ content }} </p>
    </div>  
</template>
  
<script>
  export default {
    name: 'SectionComponent',
    props: {
        name: String,
        content: String
    }
  }
</script>
  
 <style>
    .Section-Component {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: left;
        padding: 0vmin 3vmin;
        margin: 0px;
    }

    .Section-Component-Content {
        align-items: left;
        text-align: left;
        padding: 0vmin 3vmin 0vmin 1vmin;
        margin-left: 3vmin;
        font-size: calc(5px + 1vmin);
    }

    .Section-Component-Header {
        align-items: left;
        text-align: left;
        padding: 0vmin 3vmin 0vmin 1vmin;
        font-size: calc(8px + 1.5vmin);
    }
</style>
  