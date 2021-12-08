import React from 'react';

class WineIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllWines()
  }

  render() {
    return <p>Hello</p>
  }
}

export default WineIndex