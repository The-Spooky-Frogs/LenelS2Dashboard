<template>
    <div>
        <div class="row justify-content-center">
            <div v-for="(item) in items" :key="item" class="card-col col-2">
                <div class="card">
                    <img src="https://picsum.photos/318/180" alt="Card image cap" class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-header"> {{ item.name }}</h5>
                        <div class="card-text">
                            <p class="card-text d-flex" v-for="(role) in item.roles" :key="role">
                                - {{ role }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>  

  export default {
    name: 'TeamCardGroup',
    data() {
        return {
            items: []
        }
    },
    mounted() {
        this.items = [
            {
                name: "Andreas Leonard-Calcano",
                roles: [
                    "Tech Lead",
                    "DevOps",
                    "System Architect"
                ]
            },{
                name: "Dominique Smith-Rodriguez",
                roles: [
                    "Design Specialist (UI/UX)"
                ]
            },{
                name: "Ethan Hower",
                roles: [
                    "Tech Minion",
                    "Documentation Specialist"
                ]
            },{
                name: "Peter Cesmegi",
                roles: [
                    "Frontend Dev Lead",
                    "Database Master"
                ]
            },{
                name: "Skyler Herman",
                roles: [
                    "Sponsor Communication Lead",
                    "Scribe",
                    "Scrum Master/Project Manager"
                ]
            }
        ]
    }
  }
</script>
  
<style>

.card-col {
    height: 100%;
}

.card-container {
    justify-content: left;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
}

.card-header {
    min-height: 7vh;
}

.card-body {
    height: 30vh
}

.card-text {
    text-align: left;
    padding-top: 1vh;
}
</style>
  