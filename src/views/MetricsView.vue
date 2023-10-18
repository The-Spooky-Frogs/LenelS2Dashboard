<template>
    <Navbar/>
    <div className="page">
      <SectionComponent name="Metrics" />
      <div class="card-footer header-break"></div>
      <div v-for="(metric) in metrics" :key="metric" class="metric">
        <h2>{{ metric.name }}</h2>
        <p>{{ metric.type }}</p>
        <div class="card-footer header-break"></div>
        <p class="description">{{metric.description}}</p>
        <p v-for="(point) in metric.points" :key="point" class="point">- {{point}}</p>
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
            "description": "Used for representing and predicting the amount of work to be done in a given time frame.",
            "points": [
              "On Track: Entire sprint is complete for every iteration of burndown chart",
              "At Risk: 1-2 stories are missed during the sprint",
              "Issue: 3 or more stories are not completed during the sprint OR our burndown chart shows that we will not complete the work in time."
            ]
        },{
            "name": "Number of changes or change requests",
            "type": "Process Metric",
            "description": "Used to understand how our requirements are evolving overtime.",
            "points": [
              "On Track: 1 or fewer medium-impact change(s) per month or 1 low-impact change per sprint",
              "At Risk: 1 high-impact change per month or 1 medium-impact change per sprint",
              "Issue: Multiple high-impact and/or medium-impact changes"
            ]
        },{
            "name": "Data Retrieval (speed or quality)",
            "type": "Product  Metric",
            "description": "Used to determine the efficiency of our retrieval.",
            "points": [
              "On Track: At least 90% of codebase has documentation, documentation continually evolves with codebase",
              "At Risk: 75%-90% of codebase has documentation, documentation continually evolves with codebase",
              "Issue: Less than 75% of codebase has documentation or lots of documentation is out of date"
            ]
        },{
            "name": "Documentation completeness/accuracy",
            "type": "Product  Metric",
            "description": "Used to ensure our code is readable and maintainable.",
            "points": [
              "On Track: All API responses are between .1 and 1 second",
              "At Risk: Some API responses are between 2 and 5 seconds",
              "Issue: Some API responses take more than 5 seconds"
            ]
        }
    ]
    }
  }
</script>
  
<style>

.metric {
  margin: 5vh 5vw;
  padding-right: 40vw;
  align-items: center;
  text-align: left;
}

.description {
  font-size: 20px;
}

.point {
  font-size: 12px;
}

</style>
  