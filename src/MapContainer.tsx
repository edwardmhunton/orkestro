import React from "react";

export class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return <div>Map will go here</div>;
  }
}

export default GoogleApiComponent({
  apiKey: __GAPI_KEY__
})(MapContainer);
