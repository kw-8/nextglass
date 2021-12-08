import React from 'react';

class WineIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllWines()
  }

  render() {
    const {wines} = this.props
    let i = 20;
    const wineArray = wines.slice(0, this.props.currentPage * i);
    return <div className="post-index">
      {
        wineArray.map((wine) => {
          return <p>{`${wine.title} :::: ${wine.description} :::: ${wine.tags}`}</p>
        })
      }
      <button onClick={() => {console.log(wines)}}>
      Load More</button>
    </div>
  }
}

export default WineIndex