<template>
    <Navbar/>
    <div className="page">
        <SectionComponent name="Time Tracking Reports"/>
        <div class="card-footer header-break"></div>
        <TimeTracking/>
    </div>      
  </template>
  
  <script>
  import TimeTracking from '@/components/TimeTracking.vue'
  import SectionComponent from '@/components/SectionComponent.vue'
  import Navbar from '@/components/Navbar.vue'
  
  export default {
    name: 'HomeView',
    components: {
      Navbar,
      TimeTracking,
      SectionComponent
    }
  }
  </script>
  
  <style>
    .HomePage {
      text-align: center;
    }
  </style>
  