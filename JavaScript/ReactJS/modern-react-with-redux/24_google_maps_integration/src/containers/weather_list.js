import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    emptyTable() {
        return (
            <tr>
                <td colspan="4" className="text-center">
                    <b>Please search for a city</b>
                </td>
            </tr>
        );
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list
            .map(weather => weather.main.temp)
            .map(temp => temp - 273.15);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange" units="°C" /></td>
                <td><Chart data={pressures} color="green" units="hPa" /></td>
                <td><Chart data={humidities} color="blue" humidity="%" /></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (°C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.length > 0
                        ? this.props.weather.map(this.renderWeather)
                        : this.emptyTable
                    }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
