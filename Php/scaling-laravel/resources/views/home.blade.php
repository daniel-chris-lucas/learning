@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>

            <div class="card" style="margin-top: 25px;">
                <process-job></process-job>
            </div>
            <div class="card" style="margin-top: 25px;">
                <profile-image profile_image="{{ optional($profileImage)->id }}"></profile-image>
            </div>
        </div>
    </div>
</div>
@endsection
