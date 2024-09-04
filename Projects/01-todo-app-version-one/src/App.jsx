

function App() {
 

  return <center class='todo-container'>
    <h1>To Do App</h1>
    <div class="row">
    <div class="col-sm">
      <input type="text" placeholder="Enter to do here"></input>
    </div>
    <div class="col-sm">
      <input type="date"></input>
    </div>
    <div class="col-sm">
      <button type="button" class="btn btn-success" >Add</button>
    </div>
  </div>

  
  <div class="row">
    <div class="col-sm">
      Buy Milk
    </div>
    <div class="col-sm">
      04/10/2023
    </div>
    <div class="col-sm">
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>


  <div class="row">
    <div class="col-sm">
      Go to College
    </div>
    <div class="col-sm">
      04/10/2023
    </div>
    <div class="col-sm">
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>

  </center>
    
  
}

export default App
