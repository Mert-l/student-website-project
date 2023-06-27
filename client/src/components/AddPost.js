
import { NavLink } from "react-router-dom";
import axios from 'axios';
import React, {useState, useEffect} from "react";

function AddPost(props) {

    const [ post, setPost ] = useState({
		email: '',
		image: '',
		title: '',
        description: '',
        price: ''
	});



const fetchUser = async () => {
    try {
      const response = await axios.post('http://localhost:4000/user/getUser',{_id: props.user._id})
      
      console.log( 'user response: ' ,  response)
    //   setUser(response.data.obj)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser()
      }, []);


    const handleChange = (e) => {
		setPost({ ...post, [e.target.name]: e.target.value });
	};


    const handleSubmit = async (e) => {
        console.log('subitted')
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:4000/post/post', {

            title: post.title,
            image: post.image,
            price: post.price,
            description: post.description,
           // email: response.data.obj.email  // problem
           email: props.user.email

            } );

           console.log( 'post response:' ,  response);
           
      

        } catch(err){
            console.log(err);
        }

    }





  return (
    <div  className='container_post_creating' >  
      
      <div className='features' >

            <div  className='types' >
                <button>g</button>
                <button>g</button>
                <button>g</button>
                <button>g</button>

            </div>
            <form classNmae='features'  onSubmit={handleSubmit} onChange={handleChange}  >

          
                <input placeholder='image'  name='image' /> 
                <input placeholder='title'  name='title' /> 
                <input placeholder='description'  name='description' />
                <input placeholder='price' name='price'  /> 

                    <div className='two_buttons' >
                        <button>post</button>
                        <button>save</button>

                    </div>
            </form>

      </div>







    </div>
  )
}

export default AddPost;