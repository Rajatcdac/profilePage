import React, { useState } from 'react'
import './Mainprofile.css';
import '../src/images/h1.jpeg';


function Profile4() {

const [modal , setModal] = useState(false);

const toggleModal = () => {
    setModal(!modal)
};



  return (
   <div className='container-xxl' >
    <div className = 'MainProfile'>
        <div className='profile-container'>

<div className="top-portion">

<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light " >
<div className="container-fluid">
    <a className="navbar-brand" href="home">PixelSpot</a>

    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    </div>

   

<div>
<form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:'400px' , alignItems: 'center'}}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
</div>

<div>
<button type="button" className="btn btn-outline-success -sm"  style={{width:'150px', height:'38px' , marginLeft:'10px', textAlign:'center', font: 'monospace' }} onClick={toggleModal} >
        <h5>upload</h5>
    </button>

    
{modal && (
    
    <div className="modal">
    <div className="overlay" onClick={toggleModal}></div>
  

    <div className="modal-content">
            <h1>Hello Rajat</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut velit voluptatum ratione sapiente sunt, tenetur quas? Aspernatur inventore porro, commodi perspiciatis, hic similique, atque culpa nostrum esse eligendi provident.
            </p>

            <button className='close-modal' onClick={toggleModal}>Close</button>
        </div>
</div>


)}
   

</div>
    
   


</nav>
</div>
    
    <div className="user-profile-bg-image">
    
        <img  id="prf-bg-img" src="https://images.freeimages.com/images/previews/628/blurry-background-6000-x6000-1641566.jpg" alt="" srcset="" />
    </div>
    <div className="profile-image">
        <img  id="prf-img" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="" srcset="" />
    </div>




</div>
<div >
<div className='edit'>
    <h4><a href="edit" target="_blank" style={{color:'black'}}>edit</a></h4>
</div>

<div className='addimage'>
    <h4><a href="addimage" target="_blank" style={{color:'black'}}>add image</a></h4>
</div>

<div className='username'>
    <h1>Rajat</h1>
</div>


    <div className="right-side">
       <div className='myprofile-all'>
       <h4><a href="all" target="_blank" style={{color:'black'}}>All</a></h4>

       </div>
       
       <div className='myprofile-uploads'>
       <h4><a href="Uploads" target="_blank" style={{color:'black'}}>Uploads</a></h4>
       </div>


       <div className='myprofile-collections'>
       <h4><a href="collection" target="_blank" style={{color:'black'}}>Collections</a></h4>
       </div>

       <div className='myprofile-collections'>
       <h4><a href="downloads" target="_blank" style={{color:'black'}}>Downloads</a></h4>
       </div>
       
        
    </div>

<div className='img'>
<img src= "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" alt='img1' style={{height:'300px', width:'250px', borderRadius:'10px'}}/>
</div>

<div className='img1'>

</div>

<div className='img2'>

</div>

<div className='img3'>

</div>

<div className='img4'>

</div>


   
</div>


        </div>

    </div>
    </div>
  )
}

export default Profile4
