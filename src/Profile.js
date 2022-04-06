import React, { Component } from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervall: null,
      timer: 0,
    };
  }

  // this method will execute each time the state updates the value of the timer so the component will be mounted each time
  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }
  // this method will reset the timer to 0 whenever the component is unmounted (in our case hidden)
  componentWillUnmount() {
    clearInterval(this.state.intervall);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.props;

    // --------------start of css styling -------------------//
    let style_for_card = {
      width: "300px",
      height: "400px",
      background: "white",
      borderRadius: " 15px",
      boxShadow: "0px 1px 10px 1px black",
    };

    let style_for_upper_container = {
      height: "100px",
      background: "linear-gradient(to left , blue , red)",
    };

    let style_for_image = {
      background: "white",
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      padding: "5px",
      transform: "translate(95px , 45px)",
    };
    let style_for_lower_container = {
      marginTop: "60px",
      height: "auto",
      background: "white",
      textAlign: "center",
      fontFamily: "Roboto , sans-serif",
    };
    // ------------end of csss styling--------------//

    return (
      <div className="Card" style={style_for_card}>
        <div className="upper_container" style={style_for_upper_container}>
          <div className="image_container">
            <img
              src={imgSrc}
              alt=""
              width="100px"
              height="100px"
              style={style_for_image}
            />
          </div>
        </div>
        <div className="lower_container" style={style_for_lower_container}>
          <h3
            style={{
              margin: "0px",
              padding: "0px",
              color: "#8e00b9",
              fontWeight: "600px",
              fontSize: "1.5rem",
              marginBottom: "5px",
            }}
          >
            {fullName}
          </h3>
          <h4
            style={{
              margin: "0px",
              padding: "0px",
              color: "#2f2d2e",
              fontWeight: "700px",
              fontSize: "1.2rem",
            }}
          >
            {profession}
          </h4>
          <p
            style={{
              margin: "1rem",
              padding: "0px",
              color: "#2f2d2e",
              fontWeight: "300px",
              textAlign: "justify",
            }}
          >
            {bio}
          </p>
          <h3 className="timer">{this.state.timer}</h3>
        </div>
      </div>
    );
  }
}
