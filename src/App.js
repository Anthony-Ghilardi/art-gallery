import {useState, useEffect} from 'react'
import Gallery from './Gallery';
import './App.css';
import ButtonBar from './ButtonBar';

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }
  
  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => {
        console.log(resData);
        setData(resData);
      })
  }, [artId])
  
      return (
        <>
          <div>
          <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
          </div>
          <div>
            <ButtonBar props={{ handleIterate }} />
          </div>
        </>
      )
}

export default App;