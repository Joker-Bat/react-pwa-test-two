import React, { useState, useEffect } from 'react'
import './app.css'

const App = () => {
  const [customPromptEvent, setCustomPromptEvent] = useState(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      console.log(e)
      if (e) {
        setCustomPromptEvent(e)
      }
    })
  }, [])

  const handleShowPrompt = () => {
    setShowPrompt(true)
  }

  const handleCustomInstall = async () => {
    console.log('CAlled custom install')
    if (customPromptEvent) {
      customPromptEvent.prompt()
      const { outcome } = await customPromptEvent.userChoice
      if (outcome === 'accepted') setCustomPromptEvent(null)

      setShowPrompt(false)
    }
  }

  const handleClosePrompt = () => {
    setShowPrompt(false)
  }

  return (
    <div>
      <h1>Hello World from React</h1>
      <h2>Testing React deployment</h2>

      <button onClick={handleShowPrompt}>Show prompt</button>

      {showPrompt && (
        <div className='prompt'>
          <div className='close-icon' onClick={handleClosePrompt}>
            X
          </div>
          <button onClick={handleCustomInstall}>Install as app</button>
        </div>
      )}
    </div>
  )
}

export default App
