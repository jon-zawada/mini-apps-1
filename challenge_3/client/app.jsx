
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentForm: 0
    }
    this.changeForm = this.changeForm.bind(this);
  }

  changeForm(){
    var newState = this.state.currentForm + 1;
      this.setState({
        currentForm: newState
      })
  }

  render(){
      if(this.state.currentForm === 0) {
        return(
          <button onClick={this.changeForm}>Check Out</button>
        )
      } else if(this.state.currentForm === 1){
        return(
          <AccountCreation changeForm={this.changeForm}/>
        )
      } else if(this.state.currentForm === 2) {
        return(
          <Test/>
        )
      }
  }
}


/////////////////////////////////////////////NEW COMPONENT/////////////////////////////////////////////
class AccountCreation extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    // this.handleChange.bind(this)
  }

  // handleChange(event){
  //   this.setState({

  //   })
  // }

  render(){
    return(
      <div>
      <h3>Account Creation</h3>
      <div className='Name form'>
        <form>
            <div>
              <label>Enter your name here: </label>
              <input type="text" name='name' id='name' value={this.state.name}/>
              {/* onChange={this.handleChange} */}
            </div>
            <div className='Email form'>
              <label>Enter your email here: </label>
              <input type="text" name='email' id='email' value={this.state.email}/>
            </div>
            <div className='Password form'>
              <label>Enter your password here: </label>
              <input type="text" name='password' id='password' value={this.state.password}/>
            </div>
        </form>
      </div>
      <br/>
      <Next changeForm={this.props.changeForm}/>
      </div>
    )
  }
}

var Next = (props) => (
  <button onClick={props.changeForm}>Next Page</button>
)

var Test = (props) => (
  <div>THIS TESTS MY NEXT BUTTON</div>
)


ReactDOM.render(<App/>, document.getElementById('app'));

// export default App;