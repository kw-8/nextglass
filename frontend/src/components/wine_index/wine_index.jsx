import React from 'react';
import WineIndexItem from './wine_index_item'

class WineIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllWines()
  }

  render() {
    const {wines} = this.props
    //essentially just loading the first 20 wines but in a way that can be triggered/incremented with state in the future
    let i = 20;
    const wineArray = wines.slice(0, this.props.currentPage * i);
    return <div className="wine-index">
      {
        wineArray.map((wine) => {
          return <WineIndexItem key={wine.id} title={wine.title} description={wine.description} tags={wine.tags} />
        })
      }
      <button className="load-more-wines" onClick={() => {}}>Load More Wine</button>
    </div>
  }
}

export default WineIndex