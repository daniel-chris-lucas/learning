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
                processing: false,
                task_id: null
            }
        },
        mounted() {

        },
        methods: {
            createJob() {
                var vm = this;
                axios.post('/job').then((response) => {
                    this.processing = true;
                    this.task_id = response.data.job;

                    Echo.private('user.task.' + vm.task_id).listen('TaskCompleted', (e) => {
                        // e.taskId
                        vm.processing = false;
                        vm.task_id = null;
                        // Show a complete task?
                    });
                });
            }
        }
    }
</script>