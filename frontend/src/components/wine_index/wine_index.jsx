import React from 'react';
import { useLocation, useParams } from 'react-router';
import WineIndexItem from './wine_index_item'

class WineIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllWines()
    this.props.getCollections()
  }

  render() {
    const {wines} = this.props
    //essentially just loading the first 20 wines but in a way that can be triggered/incremented with state in the future
    let i = 20;
    const wineArray = wines.slice(0, this.props.currentPage * i);
    return <div className="wine-index">
      {
        wineArray.map((wine) => {
          return <WineIndexItem 
          id={wine._id} 
          title={wine.title} 
          description={wine.description} 
          tags={wine.tags} 
          updateCollection={this.props.updateCollection}
          usersCollections={this.props.collections}
           />
        })
      }
    </div>
  }
}

export default WineIndex