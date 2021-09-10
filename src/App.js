import React, { Component } from 'react';
import ListNama from './component/ListNama';


export default class App extends Component {
  state = {
    listNama: false,

  }

  onClickNo = () => {
    alert(`OKKAY CUKUP TAU`);
    this.setState({listNama: false})
  }

  onClickYes = () => {
    this.setState({listNama: true})
  }
  

  render() {
    return (
      <div className="container h-100 justify-content-center align-items-center">
        <h2 className="row text-center">
          {this.props.title}
        </h2>
        <div className="row h-100 justify-content-center">
          <button className="btn btn-danger" onClick={this.onClickNo}>{this.props.no}</button>
          <button className="btn btn-success" onClick={this.onClickYes}>{this.props.yes}</button>
          {this.state.listNama && <ListNama data={this.props.data} />}
        </div>
      </div>
    )
  }
}
