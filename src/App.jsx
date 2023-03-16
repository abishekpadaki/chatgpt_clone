import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'
// const API_KEY = import.meta.env.VITE_Open_AI_Key 

function App() {
  const [prompt, setPrompt] = useState('')
  const configuration = new Configuration({
    apiKey: '',
  });
  // const openai = new OpenAIApi(configuration);

  const generateImage = async() => {
    // const res = await openai.createImage({
    //   prompt: prompt,
    //   n: 1,
    //   size: '1024x1024',
    // });
    // console.log(res.data.data[0].url)
    console.log('ip')
  }
  
  return (
      <div className='app-main'>
        <h3>What would you like AbIks to generate?</h3>
        <input className='app-input' onChange={(e) => setPrompt(e.target.value)}>
        <button onClick={generateImage()}>Generate Image</button>
        </input>   
    </div>
  )
}

export default App
