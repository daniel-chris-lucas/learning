// JSX
{
	render: function() {
		return <div>
			Hello World!
		</div>
	}
}

// Compile to JS
{
	render: function() {
		return React.createElement('div', null, 'Hello World!');
	}
}