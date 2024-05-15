import profile from './profile.jpg'
import './App.css'

function Info() {
    return(
        <div>
    <img src= {profile} className='profile' alt='a girl'/>
    <div className='info'>
        <h1>Astrie Uwumviyimana</h1>
        <br></br>
        <p>Full Stack Developer</p>
    </div>
    
    <div className='contact'>
        <button>Email</button>
        <button>LinkedIn</button>
    </div>
   
    
</div>
    )
    
}

export default Info;


