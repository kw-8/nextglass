import React from "react";
import { withRouter } from "react-router-dom";

class Collection extends React.Component {

  componentDidMount() {
    this.props.getCollection(this.props.match.params.collectionId);
  }

  render() {
    return(
      <div>
        <button onClick={() => console.log(this.props)}>Console log props</button>
      </div>
      // <SuggestedWines/>
    )
  }
}

export default withRouter(Collection);