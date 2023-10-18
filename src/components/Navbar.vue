<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-blue">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" @click="goToHome()">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="goToTeam()">Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="goToMetrics()">Metrics</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" @click="goToTimeTracking()">Time Tracking</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href=weekly4UpLink>Weekly 4-Up</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :href=methodologyLink>Methodology</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>  
</template>

<script>
import router from '@/router';
    export default {
        name: 'NavBar',
        data() {
            return {
                weekly4UpLink: '../weekly-4up.pdf',
                methodologyLink: '../methodology.pdf'
            }
        },
        methods: {
            goToHome() {
                router.push('/')
            },
            goToMetrics() {
                router.push('/metrics')
            },
            goToTeam() {
                router.push('/team')
            },
            goToTimeTracking() {
                router.push('/time-tracking')
            },
        }
    }
</script>

<style>
</style>