
import './App.css';
import Card from './component/Card';

function App() {
  return (
    <div className="App">
        <div className='card '>
        <Card 
        name="Thor ragnarok"
        img="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Chris_Hemsworth_as_Thor.jpg/220px-Chris_Hemsworth_as_Thor.jpg"
        bg="https://wallpapercave.com/wp/klLMJUx.jpg"
        head="2012,Devid Ayer"
        para=" Thor is a 2011 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Paramount Pictures,[a] it is the fourth film in the Marvel Cinematic Universe (MCU).  "
        btn="119 min"
        /> 
        <Card
        name="Iron Man"
        img="https://img.mensxp.com/media/content/2022/Oct/Iron-Man-Is-Coming-Back-To-The-MCU1200_6346be1cb1125.jpeg"
        bg="https://rare-gallery.com/uploads/posts/348655-4k-wallpaper.jpg"
        head="2008,Jon Favreau"
        para="Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby."
        btn="126 min"
        // style={{backgroundImage: URL(`https://rare-gallery.com/uploads/posts/348655-4k-wallpaper.jpg`) }}
        /> 
        </div>
          
    </div>
  );
}

export default App;
