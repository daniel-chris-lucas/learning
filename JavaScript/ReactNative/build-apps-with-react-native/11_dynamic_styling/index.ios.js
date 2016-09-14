// Import some code we need
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

// Create a react component
var Weekdays = React.createClass({
    render: function () {
        return <View style={styles.container}>
            {this.days()}
        </View>
    },
    days: function () {
        var dayItems = [];

        for (var i = 0; i < 7; i++) {
            var day = Moment().add(i, 'days').format('dddd');
            dayItems.push(
                <DayItem key={i} day={day} daysUntil={i} />
            );
        }

        return dayItems;
    }
});

// Style the React component
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function () {
    return Weekdays;
});
