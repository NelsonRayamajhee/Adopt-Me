const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Pet, { name: "tommy", animal: "dog", breed: "bhote" }),
    React.createElement(Pet, {
      name: "mickey",
      animal: "dog",
      breed: "japanese",
    }),
    React.createElement(Pet, {
      name: "jerrry",
      animal: "cat",
      breed: "chinese",
    }),
  ]);
};
const container = document.getElementById("hello");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
