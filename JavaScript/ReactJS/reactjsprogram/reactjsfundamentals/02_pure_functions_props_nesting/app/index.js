var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
    name: 'Daniel Lucas',
    username: 'daniel-chris-lucas',
    image: 'https://avatars1.githubusercontent.com/u/2169418?v=3&s=460'
};

/*
 * Focused
 * Independant
 * Reusable
 * Small
 * Testable
 */

// Standard Components
/*var ProfilePic = React.createClass({
    render: function () {
        return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
    }
});

var ProfileLink = React.createClass({
    render: function () {
        return (
            <div>
                <a href={'https://github.com/' + this.props.username}>
                    {this.props.username}
                </a>
            </div>
        )
    }
});

var ProfileName = React.createClass({
    render: function () {
        return (
            <div>{this.props.name}</div>
        )
    }
});

var Avatar = React.createClass({
    render: function () {
        return (
            <div>
                <ProfilePic imageUrl={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        )
    }
});*/

// Stateless Components
var ProfilePic = function (props) {
    return <img src={props.imageUrl} style={{height: 100, width: 100}} />
};

var ProfileLink = function (props) {
    return (
        <div>
            <a href={'https://github.com/' + props.username}>
                {props.username}
            </a>
        </div>
    )
};

var ProfileName = function (props) {
    return (
        <div>{props.name}</div>
    )
};

var Avatar = function (props) {
    return (
        <div>
            <ProfilePic imageUrl={props.user.image} />
            <ProfileName name={props.user.name} />
            <ProfileLink username={props.user.username} />
        </div>
    )
};

ReactDOM.render(
    <Avatar user={USER_DATA} />,
    document.getElementById('app')
);