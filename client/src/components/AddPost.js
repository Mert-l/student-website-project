
import { NavLink } from "react-router-dom";
import axios from 'axios';
import React, {useState, useEffect} from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";

function AddPost(props) {

    const [ post, setPost ] = useState({
		email: '',
		image: '',
		title: '',
        description: '',
        price: ''
	});

const [pic, setPic] = useState('');




    const handleChange = (e) => {
		setPost({ ...post, [e.target.name]: e.target.value });
	};


    const handleSubmit = async (e) => {
        console.log('subitted')
        e.preventDefault();

        try{
            debugger
            const response = await axios.post('http://localhost:4000/post/post', {

            title: post.title,
            image: pic,
            price: post.price,
            description: post.description,
           userId: props.user._id

            } );

           console.log( 'post response:' ,  response);
           
      

        } catch(err){
            console.log(err);
        }

    }





  return (
    <div  className='container_post_creating' >  
      
            <div className="pic_stuff">
                {pic=== '' ? <CloudinaryUploadWidget   setPic={setPic}  /> : <img  src={pic} />  }
            </div>

            {/* {pic !== '' &&  <CloudinaryUploadWidget   setPic={setPic}  />   } */}


     

       

            <form className='features'  onSubmit={handleSubmit} onChange={handleChange}  >

            <div  className='types' >
                <button>market</button>
                <button>tutoring</button>
                <button>rentals</button>
                <button>social</button>
            </div>

            <div className='inputs' >
               
                <input placeholder='title'  name='title' /> 
                <input  id='bioo'  placeholder='description'  name='description' />
                <input placeholder='price' name='price'  /> 
                 {/* <input placeholder='image'  name='image' />    */}
            </div>

            <div className='two_buttons' >
                <button>post</button>
                <button>save</button>
               

            </div>

            </form>

      







    </div>
  )
}

export default AddPost;