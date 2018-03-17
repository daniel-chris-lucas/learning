<template>
    <div>
        <button class="btn btn-success" @click.prevent="createJob" v-if="tasks.length == 0">
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
                tasks: []
            }
        },
        mounted() {
            this.getTasks()
        },
        methods: {
            getTasks() {
                var vm = this;
                axios.get('/tasks').then((response) => {
                    vm.tasks = response.data;

                    _.each(vm.tasks, function (task) {
                        Echo.private('user.task.' + task.id).listen('TaskCompleted', (e) => {
                            vm.getTasks();
                        });
                    });
                });
            },
            createJob() {
                var vm = this;
                axios.post('/job').then((response) => {
                    vm.tasks.push(response.data);

                    Echo.private('user.task.' + response.data.id).listen('TaskCompleted', (e) => {
                        vm.getTasks();
                    });
                });
            }
        }
    }
</script>