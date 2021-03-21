<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Welcome to CodeIgniter 4 + React.js!</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<style> .navbar{margin-bottom: 20px;} </style>
</head>
<body>
<div class="container" style="padding:20px;">
	<h1 style="text-align:center;">
		<a href="/users"> Test - Laravel React </a>
	</h1>
	<hr>

  <form method="POST" action="{{route('register')}}">
      @csrf
      <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input name="name" type="text" class="form-control @error('name') is-invalid @enderror" id="name" aria-describedby="nameHelp" value="{{old('name')}}">
            @error('name')
            <span class="invalid-feedback" role="alert">
                {{$message}}
            </span>
            @enderror
        </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input name="email" type="email" class="form-control @error('email') is-invalid @enderror" id="email" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          @error('email')
          <span class="invalid-feedback" role="alert">
              {{$message}}
          </span>
          @enderror
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input name="password" type="password" class="form-control @error('password') is-invalid @enderror"" id="password">
        @error('password')
          <span class="invalid-feedback" role="alert">
              {{$message}}
          </span>
          @enderror
      </div>
      <div class="mb-3">
          <label for="password_confirmation" class="form-label">Password confirmation</label>
          <input name="password_confirmation" type="password_confirmation" class="form-control @error('password_confirmation') is-invalid @enderror"" id="password_confirmation">
          @error('password_confirmation')
          <span class="invalid-feedback" role="alert">
              {{$message}}
          </span>
          @enderror
        </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

</div>
</body>
</html>
