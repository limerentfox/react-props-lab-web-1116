const React = require('react')

class Spaceship extends React.Component {

    render() {
        return (
            <div>
              <h1>{this.props.name}</h1>

              <p><strong>Speed: </strong>{this.props.speed}</p>
              <p><strong>hasRockets: </strong>{this.props.hasRockets}</p>
              <p><strong>Colors: </strong>{this.props.colors}</p>

            </div>
        )
    }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship
