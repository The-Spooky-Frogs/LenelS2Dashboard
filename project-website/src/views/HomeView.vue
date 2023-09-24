<template>
  <div className="HomePage">
    <Navbar></NavBar>
    <header className="HomePage-header">

      <!-- Over view -->
      <SectionComponent name="Team" content="Spooky Frogs"/>
      <SectionComponent name="Project" content="LenelS2 - Multi-Cloud Monitoring Dashboard"/>
      <SectionComponent name="Sponsor" content="LenelS2"/>
      <SectionComponent name="Coach" content="Warren Tessier"/>

      <!-- Team Members -->
      <TeamCardGroup/>
      
      <!-- Synopsis -->
      <SectionComponent name="Synopsis" content="The goal of this project is to create a ''single pane of glass'' dashboard. It will interface with the multiple cloud platforms used by LenelS2’s Elements, OnGuard Cloud, and Brokerbay programs. It will serve as a tool with an intuitive UI that is easy to maintain and easy to understand. This dashboard will be used by digital teams, so it will help provide insight into information. In the web application, there will be multiple different pages for different types of analytics such as performance data. There will be charts that show trends and information as well."/>

      <!-- Time Tracking -->
      <TimeTracking/>

      <!-- Future Deliverables -->
      <SectionComponent name="Future Deliverables" content="..."/>
        
    </header>
    </div>
</template>

<script>
// @ is an alias to /src
import SectionComponent from '@/components/SectionComponent.vue'
import TeamCardGroup from '@/components/TeamCardGroup.vue'
import TimeTracking from '@/components/TimeTracking.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    SectionComponent,
    TeamCardGroup,
    TimeTracking
  }
}
</script>

<style>
  .HomePage-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    color: white;
  }

  .HomePage {
    text-align: center;
  }
</style>
