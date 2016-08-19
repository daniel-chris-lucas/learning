## Pure Functions, Props, and Nesting React Components

React components should respect the FIRST principal. They should be :

- Focused
- Independant
- Reusable
- Small
- Testable

To pass data into a React component, add it as an attribute on the component tag:

```js
<ProfileName name="Daniel" />
```

To retrieve the data inside the component, use `this.props` :

```js
{this.props.name}
```