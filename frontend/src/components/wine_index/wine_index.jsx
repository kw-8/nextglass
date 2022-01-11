import React from 'react';
import WineIndexItem from './wine_index_item'

class WineIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllWines()
    this.props.getCollections()
  }

  render() {
    const {wines} = this.props

    if (!wines) return (<img className="loading-gif" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/be585d49104437.58ab53277e681.gif"></img>);
    //essentially just loading the first 20 wines but in a way that can be triggered/incremented with state in the future
    return <div className="wine-index">
      {
        wines.map((wine) => {
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