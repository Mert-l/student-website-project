import React from "react";
import { NavLink } from "react-router-dom";

const LogedIn = () => {
    const navigate = useNavigate();

    const [form, setValues] = useState({
        email: "",
        password: "",
      });
    

    
 
    const handleChange = (e) => {
        setValues({ ...form, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
try{

    const response = await axios.post(`http://localhost:4000/user/logIn`, {
        email: form.email.toLowerCase(),
        password: form.password,
      });
      setMessage(response.data.data);
      if(response.data.ok) {
        let decodedToken = jose.decodeJwt(response.data.token);

      }

      setTimeout(() => {
        props.login(response.data.token);
        navigate("/home");
      }, 2000);      

} catch(err){
    console.log(err);
}

      }

 
    return (
        <div className= 'box' >
            <h2 className= 'sign_in_logo'  >Sign in</h2>

        <form className= 'container' onSubmit = {handleSubmit} onChange={handleChange} >
        <div className= 'three' >
            <input placeholder='email' className= 'box_item' name= 'email' />
            <input placeholder='password' className= 'box_item' name = 'password'/>
            {/* <h4>Forgot password?</h4> */}
        </div>
            <button className= 'box_item' >Log in</button>
            <h4>{message}</h4>
            <NavLink  className= 'box_item2'  to={'/register'}> Create an account    </NavLink> 


        </form>

    </div>

  );
};

export default LogedIn;