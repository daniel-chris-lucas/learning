<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
    </head>
    <body>
      <form method="POST" action="/posts/1" v-ajax complete="Okay, the post has been deleted.">
        {{ method_field('DELETE') }}
        {{ csrf_field() }}

        <button type="submit">Delete Post</button>
      </form>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/1.0.15/vue.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/0.6.1/vue-resource.js"></script>
      <script src="/js/app.js"></script>
    </body>
</html>
