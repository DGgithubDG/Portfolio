import logo from './logo.svg';
import './index.css';
import { Link } from "react-router-dom"
import { Navbar } from './Pages/Navbar';

import 'bootstrap/dist/css/bootstrap.css';
import profilepic from './img/profilepic.png';



function App() {
  return (
    <div>
      <Navbar />
      <div className="background">
    <div className="container">
      <h1 className="hometitle">Hey There ! 👋</h1>
      <div className='hometwo'>
      <div className="text-start"> <div class="d-flex justify-content-start"><h1>About  </h1> <h1 className="ten"> Me</h1></div></div>
      </div>

{/* <div className="row1">
<div class="row">
  <div class="col-md-8"><ul>I currently work as a full-stack developer at King J technologies In Naxxar, Malta. I am responsible for the development and functionality of online casinos.Front-end technologies I use are JavaScript with React.js and css.The back-end consists of PHP with Laravel paired along with TSQL. (Feb2023- present)</ul>
  <ul>My favorite project I have worked on is a full-stack web app that allows people to tour east Africa for the cheapest and most convenient ways possible.This was great because i learnt not only about how to make a web app responsive but also about the natural beauty of Africa.</ul>
  <ul></ul> </div>

  <div class="col-md-4 text-end"><img src={profilepic}></img></div>

</div>
</div> */}
<h1 className='text-center'>Denis Getov</h1>
<hr style={{ width: '40%', margin: '0 auto', color: 'white', borderWidth: '2px' }} />
<h6 className='text-center'>
I currently work as a full-stack developer at King J technologies In Naxxar, Malta. I am responsible for the development and functionality of online casinos.Front-end technologies I use are JavaScript with React.js and css.The back-end consists of PHP with Laravel paired along with TSQL. (Feb2023- present)
</h6>
<h6 className='text-center'>
My favorite project I have worked on is a full-stack web app that allows people to tour east Africa for the cheapest and most convenient ways possible.This was great because i learnt not only about how to make a web app responsive but also about the natural beauty of Africa.

</h6>







		<div className="text-center">
<h3 className="home-link">Find Me On</h3>


            

            
<footer class="bg text-center text-dark">
  <div class="container p-4 pb-0">
  <a class="btn btn-primary" href="https://www.linkedin.com/in/denis-g-4a449525b/" role="button" >Linkedin</a>
  <a class="btn btn-secondary" href="https://github.com/DGgithubDG" role="button">GitHub</a>



  </div>

  <div class="text-center p-3" >
    © 2023 Copyright: Denis Getov
    <a class="text-white" href="https://denisng.netlify.com/">denisng.netlify.com</a>
  </div>
</footer>
			  </div>
        
  
  
            

       
  
    
       </div>
             
      </div> 
      </div>
//     <div>
//       <div id="stars"></div>
// <div id="stars2"></div>
// <div id="stars3"></div>
// <div id="title">

// </div>
//     </div>
  );
}

export default App;
