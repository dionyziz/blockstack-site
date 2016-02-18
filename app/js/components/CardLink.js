'use strict'

import {Component, PropTypes}  from 'react'
import {Link} from 'react-router'

class CardLink extends Component {  
  static propTypes: {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    imageSrc: PropTypes.string,
    href: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="card" style={{ maxWidth: '20rem' }}>
          <Link to={this.props.href} style={{ color: 'black', textDecoration: 'none' }}>
            { this.props.imageSrc ?
            <img src={this.props.imageSrc}
              style={{ height: '180px', width: '100%', display: 'block' }}
              className="card-img-top" alt="Card image cap" />
            : null }
            <div className="card-block">
              <h3 className="card-title">
                {this.props.title}
              </h3>
              {this.props.body ?
              <p className="card-text">
                {this.props.body}
              </p>
              : null }
            </div>
          </Link>
        </div>
      </div>
    )
  }

}

export default CardLink