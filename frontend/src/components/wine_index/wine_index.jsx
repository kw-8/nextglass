import React from 'react';

class WineIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllWines()
    console.log(this.props)
  }

  render() {
    const {wines} = this.props
    return <div className="post-index">
      {
        wines.map((wine, i) => {
          return <p>{`${wine.title}`}</p>
        })
      }
    </div>
  }
}

export default WineIndex