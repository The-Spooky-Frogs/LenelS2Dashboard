<template>
    <div className="NavBar">
        <p className="NavBar-Component">
            Multi-Cloud Dashboard
        </p>
    </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style>
    .NavBar {
        background-color: #2e3136;
        min-height: 1vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        font-size: calc(5px + 2vmin);
        color: white;
    }

    .NavBar-Component {
        padding: 1vmin 3vmin
    }
</style>