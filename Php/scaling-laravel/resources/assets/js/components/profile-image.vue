<template>
    <div style="padding: 15px;">
        <div class="form-group" v-if="image">
            <img v-bind:src="imageUri" class="img-circle" style="max-width: 200px;" />
        </div>
        <div class="form-group">
            <label for="profile" style="display: block; font-weight: bold;">Upload Profile Image</label>
            <input type="file" name="profile" id="profile">
        </div>
        <button type="submit" class="btn btn-outline-secondary" @click.prevent="upload">Upload</button>
    </div>
</template>

<script>
    export default {
        props: ['profile_image'],
        data() {
            return {
                image: null,
            }
        },
        mounted() {
            // When a user has a profile image already
            if (this.profile_image) {
                this.image = this.profile_image;
            }
        },
        computed: {
            imageUri() {
                return '/profile/image/' + this.image;
            }
        },
        methods: {
            upload() {
                var vm = this;
                var data = new FormData();
                data.append('profile', document.getElementById('profile').files[0]);

                axios.post('/profile/image', data)
                    .then(function (res) {
                        vm.image = res.data.id;
                    }).catch(function (err) {
                        console.log('UPLOAD FAILED', err.message);
                });
            }
        }
    }
</script>