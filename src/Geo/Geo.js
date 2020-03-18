import React from "react";

export default class Geo extends React.Component {

    url = "http://api.open-notify.org/iss-now.json";

    state = {
        loading: true,
        longitude: null,
        latitude: null
    }

    async componentDidMount() {
        setInterval(() => {
            this.GetPosition()
        }, 2000);
    }


    render() {
        return (
            <div>
                {this.state.loading ? <div>loading .. </div> :   
                    <div>Longitude : {this.state.longitude} Latitude : {this.state.latitude}</div>
                }
            </div>
        )
    }

    async GetPosition () {
        const response = await fetch(this.url);
        const data = await response.json();
        if (data.message === "success") {
            this.setState({ longitude: data.iss_position.longitude, latitude: data.iss_position.latitude, loading: false })
        }
    }
}