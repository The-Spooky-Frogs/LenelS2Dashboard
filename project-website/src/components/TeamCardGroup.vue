<template>
    <div class="card-group">
        <SectionComponent name="Team Members"/>
        <CContainer fluid>
            <CRow>
                <CCol v-for="(item) in items" :key="item">
                    <CCard class="card">
                    <CCardImage orientation="top" src="https://picsum.photos/318/180" alt="Card image cap" />
                    <CCardBody>
                        <CCardTitle> {{ item.name }}</CCardTitle>
                        <CCardText v-for="(role) in item.roles" :key="role" class="card-text">
                            - {{ role }}
                        </CCardText>
                    </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </CContainer>
    </div>
</template>
  
<script>  
  import { CContainer, CRow, CCol, CCard, CCardImage, CCardTitle, CCardBody, CCardText} from '@coreui/vue';
  import SectionComponent from '@/components/SectionComponent.vue'

  export default {
    name: 'TeamCardGroup',
    components: {
        SectionComponent,
        CContainer,
        CRow,
        CCol,
        CCard,
        CCardTitle,
        CCardImage,
        CCardBody,
        CCardText
    },
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

.card-group {
    justify-content: left;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    height: 50vh;
}
.card {
    height: 100%;
}
.card-text {
    text-align: left;
    font-weight: bold;
    font-size: 14px;
    margin: 0;
}
</style>
  