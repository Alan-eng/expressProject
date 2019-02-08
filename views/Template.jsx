const React = require('react')

class Template extends React.Component {
    render() {
        return (
        <div>
            Hello from {this.props.name}
            <br />
            <button>Strange Button</button>
        </div>)
    }
}

module.exports = Template
