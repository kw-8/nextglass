import React from 'react';
import WineIndexItem from './wine_index_item'

class WineIndex extends React.Component {
  constructor(props) {
    super(props)

    this.handscroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.props.fetchAllWines()
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    console.log("congrats on scrolling")
  }

  render() {
    const {wines} = this.props
    let i = 20;
    const wineArray = wines.slice(0, this.props.currentPage * i);
    return <div className="post-index">
      {
        wineArray.map((wine) => {
          return <WineIndexItem title={wine.title} description={wine.description} tags={wine.tags} />
        })
      }
      <button className="load-more-wines">Load More Wine</button>
    </div>
  }
}

export default WineIndex