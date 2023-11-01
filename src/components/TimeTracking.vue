<template>
    <div class="row align-items-center dflex justify-content-center">
        <div class="time-tracking-container">
            <table class="time-table">
                <tr>
                    <th class="col-1">Week</th>
                    <th class="col-2">Date</th>
                    <th>Andreas</th>
                    <th>Dominique</th>
                    <th>Ethan</th>
                    <th>Peter</th>
                    <th>Skyler</th>
                </tr>
                <tr v-for="week in weeks" :key="week">
                    <td> {{ week.num }}</td>
                    <td> {{ week.range }}</td>
                    <td v-for="individual in individuals" :key="individual">
                        <a :href="pdfFilePath(week.num, individual)">
                            <i class="fa fa-file-text-o"></i>
                            {{ pdfFileName(week.num, individual) }}
                        </a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    
</template>
  
<script>
  export default {
    name: 'TimeTracking',
    data() {
        return {
            weeks: [
                {
                    num: 3,
                    range: "9/10/2023 - 9/16/2023"
                },
                {
                    num: 4,
                    range: "9/16/2023 - 9/24/2023"
                },
                {
                    num: 5,
                    range: "9/25/2023 - 10/1/2023"
                },
                {
                    num: 6,
                    range: "10/2/2023 - 10/8/2023"
                },
                {
                    num: 7,
                    range: "10/9/2023 - 10/15/2023"
                },
                {
                    num: 8,
                    range: "10/16/2023 - 10/22/2023"
                },
                {
                    num: 9,
                    range: "10/23/2023 - 10/29/2023"
                },
                {
                    num: 10,
                    range: "10/30/2023 - 11/5/2023"
                },
                {
                    num: 11,
                    range: "11/5/2023 - 11/12/2023"
                },
                {
                    num: 12,
                    range: "11/13/2023 - 11/20/2023"
                }
            ],
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
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .time-table {
        padding: 0vh 5vh;
        width: 70%;
        margin-bottom: 100px;
    }
    
    table {
        border: 5px solid black;
        width: 100%;
        height: 100px;
        /* padding: 100px 100px; */
    }
    
    #th {
        border-bottom: 5px solid black;
    }
    
    #td {
        border-left: 5px solid black;
        text-align: center;
    }
</style>
  
