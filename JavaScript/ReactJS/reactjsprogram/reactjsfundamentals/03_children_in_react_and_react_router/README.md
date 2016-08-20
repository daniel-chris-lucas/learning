## this.props.children in React and React Router

Gain access to data inside a component:

```xml
<Link>
    This is some text
</Link>
```

To read the text from inside the Link component use

```js
{this.props.children}
```

Checkout Main.js for Sentry implementation for logging errors.