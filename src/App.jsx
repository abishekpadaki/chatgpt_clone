import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './App.css'
const API_KEY = import.meta.env.VITE_Open_AI_Key 

function App() {
  const configuration = new Configuration({
    apiKey: API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const generateImage = async() => {
    const res = await openai.createImage({
      prompt: "Say this is a test",
      n: 1,
      size: '1024x1024',
    });
    console.log(res.data.data[0].url)
  }
  
  return (
      <div className='app-main'>
        <Input>
        <button onClick={generateImage()}>Generate Image</button>
        </Input>   
    </div>
  )
}

export default App
