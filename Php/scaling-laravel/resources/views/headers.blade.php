@extends('layouts.app')

@section('headerstuff')
    <style type="text/css">
        .debug-info {
            overflow: scroll;
            padding: 10px;
            word-wrap: break-word;
        }
    </style>
@endsection
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">Header Debugging</div>
                        <div class="debug-info">
                            <h3>General</h3>
                            <ul>
                                <li><strong>Client</strong>: {{ request()->getClientIp() }}</li>
                                <li><strong>Scheme</strong>: {{ request()->getScheme() }}</li>
                                <li><strong>Host</strong>: {{ request()->getHost() }}</li>
                                <li><strong>Home URL</strong>: {{ url('/home') }}</li>
                            </ul>
                        </div>

                        <div class="debug-info">
                            <h3>HTTP Headers</h3>
                            <ul>
                                @foreach(request()->headers as $header => $value)
                                    @if($header == 'cookie')
                                        <li>
                                            <strong>{{ $header }}</strong>:
                                            {{ substr(implode(', ', $value), 0, 75) . '...' }}
                                        </li>
                                    @else
                                        <li>
                                            <strong>{{ $header }}</strong>:
                                            {{ implode(', ', $value) }}
                                        </li>
                                    @endif
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection