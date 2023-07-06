const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return (
    <div className={`${className}`}>
      <h1>{text}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 class="heading">Boxes</h1>
    <div class="boxes-container">
      <Box className="box-1" text="Small" />
      <Box className="box-2" text="Medium" />
      <Box className="box-3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
