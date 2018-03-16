@component('mail::message')
# Welcome!

Welcome to the application!

@component('mail::button', ['url' => route('home')])
Start Now
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
