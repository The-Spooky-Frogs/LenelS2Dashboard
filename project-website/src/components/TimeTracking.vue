<template>
    <div class="time-tracking-contianer">
        <SectionComponent name="Time Tracking Reports" content=""/>
        <div class="TimeTrackingTable">
            <table>
                <tr>
                    <th>Week</th>
                    <th>Andreas</th>
                    <th>Dominique</th>
                    <th>Ethan</th>
                    <th>Peter</th>
                    <th>Skyler</th>
                </tr>
                <tr v-for="week in weeks" :key="week">
                    <p> {{ week }}</p>
                    <td v-for="individual in individuals" :key="individual">
                        <a :href="pdfFilePath(week, individual)">
                            <i class="fa fa-file-text-o"></i>
                            {{ pdfFileName(week, individual) }}
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
  
<script>
  import SectionComponent from '@/components/SectionComponent.vue'

  export default {
    name: 'TimeTracking',
    components: {
        SectionComponent
    },
    data() {
        return {
            weeks: [3, 4, 5],
            individuals: [
                "Andreas",
                "Dominique",
                "Ethan",
                "Peter",
                "Skyler"
            ]
        }
    },
    methods: {
        pdfFilePath(week, individual) {
            return `../timeTracking/week${week}/${individual}.pdf`
        },
        pdfFileName(week, individual) {
            return `${individual}-Week${week}.pdf`
        }
    }
  }
</script>
  
<style>
    .time-tracking-container {
        margin-bottom: 15px;
        margin-top: 0px;
    }
    .TimeTrackingTable {
        width: 300vh;
        height: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 0vh 5vh;
        margin-bottom: 15px;
    }
    
    table {
        border: 5px solid black;
        width: 1000px;
        height: 100px;
    }
    
    th {
        border-bottom: 5px solid black;
    }
    
    td {
        border-left: 5px solid black;
        text-align: center;
    }
</style>
  