<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Workflow for Swapping Components</title>
</head>
<body>
  <component is="{{ $vueView }}">
    @yield('content')
  </component>

  <script src="/js/main.js"></script>
</body>
</html>
