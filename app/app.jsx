//A component as a function that returns a react virtual DOM element.
//Components created and React.js start with a capital letter...
//To differentiates our custom from the built in DOM components like H1 idv, span and others.
function Application() {
  //returning virtual DOM elements
  return(
    <div>
      <h1>Hello from React</h1>
    <p>I was rendered from the Application component</p>
    </div>
  );
}

ReactDOM.render(<h1>Hello!</h1>, document.getElementById('container'));
