<template>
    <div>
        <button class="btn btn-success" @click.prevent="createJob" v-if="processing == false">
            <span class="oi oi-contrast"></span> Kick Off Long-Running Job
        </button>
        <button class="btn btn-success" v-else>
            <span class="oi oi-loop-circular rotate"></span> Kick Off Long-Running Job
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                processing: false
            }
        },
        mounted() {

        },
        methods: {
            createJob() {
                axios.post('/job').then(() => {
                    this.processing = true;
                });
            }
        }
    }
</script>