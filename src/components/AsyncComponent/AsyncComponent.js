import React from "react";

const AsyncComponent = (importComponent) => {
  return class extends React.Component {
    state = {
      component: null,
    };

    componentDidMount() {
      importComponent().then((component) => {
        this.setState({ component: component.default });
      });
    }

    render() {
      const Component = this.state.component;

      return Component ? (
        <Component {...this.props} />
      ) : (
        <div>Loading component...</div>
      );
    }
  };
};

export default AsyncComponent;
