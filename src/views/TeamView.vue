<template>
    <Navbar/>
    <div className="page">  

      <SectionComponent name="Team Members"/>
      <div class="card-footer header-break"></div>

      <!-- Team Members -->
      <TeamCardGroup/>
    
    </div>
</template>
  
<script>
  // @ is an alias to /src
  import TeamCardGroup from '@/components/TeamCardGroup.vue'
  import SectionComponent from '@/components/SectionComponent.vue'

  import Navbar from '@/components/Navbar.vue'
  
  export default {
    name: 'HomeView',
    components: {
      Navbar,
      SectionComponent,
      TeamCardGroup
    }
  }
  
</script>
  
<style>

</style>
  