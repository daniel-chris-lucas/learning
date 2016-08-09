## Introduction To Properties

How to add properties (parameters) to components.

Basic Component :

```
class App extends React.Component {
    render() {
        let txt = this.props.txt;
        return <h1>{txt}</h1>

        // Could also be written
        // return <h1>{this.props.txt}</h1>
    }
};
```

Set the value of txt :

```
ReactDOM.render(
    <App txt="this is the props value" />,
    document.getElementById('app')
);
```

Optionally specify the props that are allowed by the component :

```
App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};
```

Optionally set default values for the props :

```
App.defaultProps = {
    txt: 'this is the default txt'
};
```
