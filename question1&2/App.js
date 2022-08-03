import { useState } from "react"
import './App.css';

function App() {
  const [form, setForm] = useState({
    FirstName : '',
    LastName : '',
    email : '',
    SecurityQuestion:'',
    SecurityAnswer: '',
    Bio : ''
  })

  const [error, setError] = useState({
    FirstName : '',
    LastName : ''
  })


  const onChange = (e)=>{
    const {value,name} = e.target;
    
    setForm((state)=>({
      ...state,
      [name]:value
    }));
  }


  const showData = ()=>{
    console.log("form: ",form);
  }

  const onSubmit =(e)=>{

    e.preventDefault();
    if(form.FirstName.length < 3){
      setError((state)=>({
        ...state,
        FirstName:"Too Short, must be greater than of 3 character."
      }))
      return;
    }else{
      setError((state)=>({
        ...state,
        FirstName:""
      }))
    };
    // if(form.LastName.length < 3){
    //   setError((state)=>({
    //     ...state,
    //     LastName:"Too Short, must be greater than of 3 character."
    //   }))
    //   return;
    // }else{
    //   setError((state)=>({
    //     ...state,
    //     LastName:""
    //   }))
    // };

    showData();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Registration Form</h3>
        <form onSubmit={onSubmit}>
          <label>
            FirstName:
            <input onChange={onChange} name="FirstName" value={form.FirstName}/>
          </label>
          {!!error.FirstName && (
          <div>
            <i>{error.FirstName}</i>
            </div>
          )  
          }
          <hr/>

            <label>
            LastName:
            <input  onChange={onChange} name="LastName" value={form.LastName}/>
            </label>
            {!!error.FirstName && (
          <div>
            <i>{error.FirstName}</i>
            </div>
          )  
          }
          <hr/>

          <label>
            email:
            <input onChange={onChange} name="email" value={form.email}/>
          </label>
          <hr/>

          <label>
            Security Question:
            <select onChange={onChange} name="Security Question">
              <option>Select Security Question</option>
              <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
              <option value="What was the name of your first pet?">What was the name of your first pet?</option>
              <option value="What was the name of your first school?">What was the name of your first school?</option>

            </select>
          </label>
          <hr/>

          <label>
            Security Answer:
            <input onChange={onChange} name="SecurityAnswer" value={form.SecurityAnswer}/>
          </label>
          <hr/>

          <label>
            Bio:
            <textarea onChange={onChange} name="Bio" value={form.Bio}/>
          </label>
          <hr/>
          
          

          <div>
            <button onClick={showData}>Submit</button> <button onClick={showData}>Cancel</button>
          </div>

          
        </form>
      </header>
    </div>
  );
}

export default App;
