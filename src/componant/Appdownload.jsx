import React from 'react'
import './appdownload.css'

const Appdownload = () => {
  const handlePlayStoreClick = () => {
    window.open('https://play.google.com/store', '_blank')
  }

  const handleAppStoreClick = () => {
    window.open('https://www.apple.com/app-store/', '_blank')
  }

  return (
    <div className="app-download" id="app-download">
      <p>For Mobile App Download <br />EatGrid</p>
      <div className="platform">
        <img
          onClick={handlePlayStoreClick}
          src="src/images/play_store.png"
          alt=""
          style={{ cursor: 'pointer' }}
        />
        <img
          onClick={handleAppStoreClick}
          src="src/images/app_store.png"
          alt=""
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  )
}

export default Appdownload
