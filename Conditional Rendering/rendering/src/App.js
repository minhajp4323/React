

function App() {
  let isLoggedin= false;
  return (
    <div className="App">
      {isLoggedin ?<h1>Welcome to website</h1>:<h1>Please login</h1>  }
    </div>
  );
}

export default App;
