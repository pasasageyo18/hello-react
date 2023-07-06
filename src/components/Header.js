import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.daftar}</h1>
        <h1>{this.state.dataList}</h1>
      </div>
    );
  }
}

export default Header;
