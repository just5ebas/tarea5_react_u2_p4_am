const rootElement = document.getElementById("root");
const element = React.createElement(
  "h2",
  {
    className: "container",
  },
  "Hola Mundo"
);
ReactDOM.render(element, rootElement);
