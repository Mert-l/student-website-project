
import { NavLink } from "react-router-dom";
import axios from 'axios';
import React, {useState, useEffect} from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import UploadImages from './UploadImages';
function AddPost(props) {

    const [ post, setPost ] = useState({
		email: '',
		image: '',
		title: '',
        description: '',
        price: ''
	});

    const [ pic, setPic ] = useState();
const [ pictures, setPictures ] = useState([]);

useEffect(() => {
    fetch_pictures();
}, []);

const fetch_pictures = async () => {
    try {
        const response = await axios.get('http://localhost:5050/pictures/get_all');
        setPictures([ ...response.data.pictures ]);
        console.log(pictures)
    } catch (error) {
        debugger;
    }
};




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

    const cancelPosting = (e) =>{

    //    if(document.getElementById('input').value &&  document.getElementById('bio').value ){
    //     document.getElementById('input').value = '';
    //     document.getElementById('bio').value = '';
    //    }

        setPic('')
       


    }





  return (
    <div  className='container_post_creating' >  
      
            <div className="pic_stuff">
                {/* {pic=== '' ? <CloudinaryUploadWidget   setPic={setPic}  /> : <img id='pic' src={pic} />  } */}
                <UploadImages fetch_pictures={fetch_pictures} />

            {/* {pic !== '' &&  <CloudinaryUploadWidget   setPic={setPic}  />   } */}
            </div>

     

       

            <form className='features'  onSubmit={handleSubmit} onChange={handleChange}  >

            <div  className='types' >
                <button>market</button>
                <button>tutoring</button>
                <button>rentals</button>
                <button>social</button>
            </div>

            <div className='inputs' >
               
                <input placeholder='title'  name='title' id='input' /> 
                <input  id='bioo'  placeholder='description'  name='description' />
                <input placeholder='price' name='price' id='input'  /> 
                 {/* <input placeholder='image'  name='image' />    */}
            </div>

            <div className='two_buttons' >
                <button type='Submit' >post</button>
                <button onClick={cancelPosting}  >cancel</button>
               

            </div>

            </form>

      







    </div>
  )
}

export default AddPost;