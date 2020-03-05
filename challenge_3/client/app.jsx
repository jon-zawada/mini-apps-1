
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentForm: 0
    }
    this.changeForm = this.changeForm.bind(this);
    this.backForm = this.backForm.bind(this);
  }

  changeForm(){
    var newState = this.state.currentForm + 1;
      this.setState({
        currentForm: newState
      })
  }
  backForm(){
    var backState = this.state.currentForm -1;
    this.setState({
      currentForm: backState
    })
  }

  render(){
      if(this.state.currentForm === 0) {
        return(
          <button onClick={this.changeForm}>Check Out</button>
        )
      } else if(this.state.currentForm === 1){
        return(
          <AccountCreation changeForm={this.changeForm} backForm={this.backForm}/>
        )
      } else if(this.state.currentForm === 2) {
        return(
          <Address changeForm={this.changeForm} backForm={this.backForm}/>
        )
      } else if(this.state.currentForm === 3) {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    var name = event.target.name
    var value = event.target.value
    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <div>
      <h3>Account Creation</h3>
      <div className='Name'>
        <form method='POST'>
            <div>
              <label>Enter your name here: </label>
              <input type="text" name='name' id='name' value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div className='Email'>
              <label>Enter your email here: </label>
              <input type="text" name='email' id='email' value={this.state.email} onChange={this.handleChange}/>
            </div>
            <div className='Password'>
              <label>Enter your password here: </label>
              <input type="text" name='password' id='password' value={this.state.password} onChange={this.handleChange}/>
            </div>
        </form>
      </div>
      <br/>
      <Back backForm={this.props.backForm}/>
      <Next changeForm={this.props.changeForm}/>
      </div>
    )
  }
}

/////////////////////////////////////////////NEW COMPONENT/////////////////////////////////////////////
class Address extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: '',
        phone: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  render(){
    return(
      <div>
        <h3>Address and Phone Number</h3>
        <div>
          <form>
            <div>
            <label>Address 1: </label>
            <input type='text' name='line1' value={this.state.line1} onChange={this.handleChange}/>
            </div>
            <div>
            <label>Address 2: </label>
            <input type='text' name='line2' value={this.state.line2} onChange={this.handleChange}/>
            </div>
            <div>
            <label >City: </label>
            <input type='text' name='city' value={this.state.city} onChange={this.handleChange}/>
            </div>
            <div>
            <label>state: </label>
            <input type='text' name='state' value={this.state.state} onChange={this.handleChange}/>
            </div>
            <div>
            <label>Zip Code: </label>
            <input type='text' name='zip' value={this.state.zip} onChange={this.handleChange}/>
            </div>
            <div>
            <label>Phone Number: </label>
            <input type='text' name='phone' value={this.state.phone} onChange={this.handleChange}/>
            </div>
          </form>
        </div>
        <Back backForm={this.props.backForm}/>
        <Next changeForm={this.props.changeForm}/>
      </div>
    )
  }
}


















var Next = (props) => (
  <button onClick={props.changeForm}>Next Page</button>
)

var Back = (props) => (
  <button onClick={props.backForm}>Previous Page</button>
)



var Test = (props) => (
  <div>THIS TESTS MY NEXT BUTTON</div>
)


ReactDOM.render(<App/>, document.getElementById('app'));

// export default App;