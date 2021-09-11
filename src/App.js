import React, { Component } from 'react';
import ListNama from './component/ListNama';
import ListKesukaan from './component/ListKesukaan';

export default class App extends Component {
  state = {
    listNama: false,
    listKesukaan: false,

  }

  onClickNo = () => {
    alert(`OKKAY CUKUP TAU`);
    this.setState({ listNama: false })
  }

  onClickYes = () => {
    this.setState({ listNama: true })
  }

  onClickNo2 = () => {
    alert(`TERIMA KASIH TELAH MEMBUKA`);
    this.setState({ listKesukaan: false })
  }

  onClickYes2 = () => {
    this.setState({ listKesukaan: true })
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
          <h2 className="row text-center">
            {this.props.title2}
          </h2>
          <div className="row h-100 justify-content-center">
            <button className="btn btn-danger" onClick={this.onClickNo2}>{this.props.no2}</button>
            <button className="btn btn-success" onClick={this.onClickYes2}>{this.props.yes2}</button>
            {this.state.listKesukaan && <ListKesukaan data2={this.props.data2} />}
          </div>
        </div>
      </div>
    )
  }
}
