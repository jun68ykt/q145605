import React, { Component } from 'react';
import { Stage, Layer, Text } from 'react-konva';
import ColoredRect from "./ColoredRect";

class App extends Component {

  stageWrapper = React.createRef();

  componentDidMount() {
    const stageWrapperElement = this.stageWrapper.current;
    const canvasElement = stageWrapperElement.getElementsByTagName('canvas')[0];
    canvasElement.className = 'my-canvas';
  }

  render() {
    return (
      <section ref={this.stageWrapper}>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text text="Try click on rect" />
            <ColoredRect />
          </Layer>
        </Stage>
      </section>
    );
  }
}

export default App;
