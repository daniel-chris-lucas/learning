var formatTime = require('minutes-seconds-milliseconds');
var React = require('react-native');
var {
    Text,
    View,
    TouchableHighlight,
    AppRegistry,
    StyleSheet
} = React;

var StopWatch = React.createClass({
    getInitialState: function () {
        return {
            timeElapsed: null
        }
    },

    render: function () {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.timerWrapper}>
                        <Text style={styles.timer}>
                            {formatTime(this.state.timeElapsed)}
                        </Text>
                    </View>
                    <View style={styles.buttonWrapper}>
                        {this.startStopButton()}
                        {this.lapButton()}
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text>
                        I am a list of Laps
                    </Text>
                </View>
            </View>
        );
    },
    startStopButton: function () {
        return (
            <TouchableHighlight
                underlayColor="gray"
                onPress={this.handleStartPress}
                style={[styles.button, styles.startButton]}
            >
                <Text>
                    Start
                </Text>
            </TouchableHighlight>
        );
    },
    lapButton: function () {
        return (
            <View style={styles.button}>
                <Text>
                    Lap
                </Text>
            </View>
        );
    },
    handleStartPress: function () {
        var startTime = new Date();

        setInterval(() => {
            this.setState({
                timeElapsed: new Date() - startTime
            });
        }, 30);
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1, // Fill the entire screen
        alignItems: 'stretch'
    },
    header: {
        flex: 1
    },
    footer: {
        flex: 1
    },
    timerWrapper: {
        flex: 5, // Takes 5/8ths of available space
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        flex: 3, // Takes 3/8th of available space
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    timer: {
        fontSize: 60
    },
    button: {
        borderWidth: 2,
        height: 100,
        width: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    startButton: {
        borderColor: '#00cc00'
    }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
