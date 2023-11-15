<template>
  <Navbar/>
  <div className="page">
    <div
        class="p-5 text-center bg-image"
        style="
        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp');
        height: 300px;
        "
    >
        <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
        <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <h1 class="mb-3">LenelS2 - Multi-Cloud Monitoring Dashboard</h1>
              <h4 class="mb-3"> Spooky Frogs Team Website</h4>
            </div>
        </div>
        </div>
    </div>
    <div class="card-footer header-break"></div>

    <!-- Over view -->
    <div class="justify-content-center flex">
      <!-- Synopsis -->
      <SectionComponent name="Synopsis" content="The goal of this project is to create a ''single pane of glass'' dashboard. It will interface with the multiple cloud platforms used by LenelS2’s Elements, OnGuard Cloud, and Brokerbay programs. It will serve as a tool with an intuitive UI that is easy to maintain and easy to understand. This dashboard will be used by digital teams, so it will help provide insight into information. In the web application, there will be multiple different pages for different types of analytics such as performance data. There will be charts that show trends and information as well."/>

      <SectionComponent name="Sponsor" content="LenelS2"/>
      <SectionComponent name="Coach" content="Warren Tessier"/>
    </div>      
  </div>
</template>

<script>
// @ is an alias to /src
import SectionComponent from '@/components/SectionComponent.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    SectionComponent
  }
}
</script>

<style>
  .HomePage {
    text-align: center;
  }
</style>
