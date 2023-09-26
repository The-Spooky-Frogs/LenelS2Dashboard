<template>
    <Navbar/>
    <div className="page">
      <SectionComponent name="Metrics" />
      <div class="card-footer header-break"></div>
      <div v-for="(metric) in metrics" :key="metric" class="metric">
        <h2>{{ metric.name }}</h2>
        <p>{{ metric.type }}</p>
        <div class="card-footer header-break"></div>
        <p>{{metric.description}}</p>
      </div>
    </div>
</template>
  
<script>
  import Navbar from '@/components/Navbar.vue'
  import SectionComponent from '@/components/SectionComponent.vue'
  
  export default {
    name: 'MetricsView',
    components: {
      Navbar,
      SectionComponent
    },
    data() {
      return {
        metrics: []
      }
    },
    mounted() {
      this.metrics = [
        {
            "name": "Standard burndown chart",
            "type": "Process Metric",
            "description": "Used for representing and predicting the amount of work to be done in a given time frame."
        },{
            "name": "Number of changes or change requests",
            "type": "Process Metric",
            "description": "Used to understand how our requirements are evolving overtime."
        },{
            "name": "Data Retrieval (speed or quality)",
            "type": "Product  Metric",
            "description": "Used to determine the efficiency of our retrieval."
        },{
            "name": "Documentation completeness/accuracy",
            "type": "Product  Metric",
            "description": "Used to ensure our code is readable and maintainable."
        }
    ]
    }
  }
</script>
  
<style>

.metric {
  margin: 5vh 5vw;
  padding-right: 60vw;
  align-items: center;
  text-align: left;
}

</style>
  