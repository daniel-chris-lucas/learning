<reply :attributes="{{ $reply }}" inline-template v-cloak>
    <div id="reply-{{ $reply->id }}" class="panel panel-default">
        <div class="panel-heading">
            <div class="level">
                <h5 class="flex">
                    <a href="{{ route('profile', $reply->owner) }}" class="flex">{{ $reply->owner->name }}</a>
                    said {{ $reply->created_at->diffForHumans() }}...
                </h5>

                <div>
                    <form method="POST" action="/replies/{{ $reply->id }}/favorites">
                        {{ csrf_field() }}
                        <button type="submit" class="btn btn-default" {{ $reply->isFavorited() ? 'disabled' : '' }}>
                            {{ $reply->favorites_count }} {{ str_plural('Favorite', $reply->favorites_count) }}
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div class="panel-body">
            <div v-if="editing">
                <div class="form-group">
                    <textarea class="form-control" v-model="body"></textarea>
                </div>

                <button class="btn btn-xs btn-primary" @click="update">Update</button>
                <button class="btn btn-xs btn-link" @click="editing = false">Cancel</button>
            </div>

            <div v-else v-text="body"></div>
        </div>

        @can ('update', $reply)
            <div class="panel-footer level">
                <button class="btn btn-xs mr-1" @click="editing = true">Edit</button>
                <button class="btn btn-xs btn-danger mr-1" @click="destroy">Destroy</button>
            </div>
        @endcan
    </div>
</reply>