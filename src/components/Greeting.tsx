import React from 'react'

function Greeting() {
  return (
    <div className='greeting-wrapper'>
        <h2>Hi Everyone! Welcome to the game!</h2>
        <p><b>Background:</b> This Web Application fetches data from The Open Trivia Database (<em>opentdb.com</em>). It provides a completely free JSON API that can be used without an API Key, all that needs to be done is to generate a URL and use it to retrieve trivia questions from the site.</p>
        <p><b>Instructions:</b> For those that haven never played this game before, the objective is quite simple. After clicking start you will be provided with 10 questions and multiple answers to choose from. All you have to do is select the one you think is right. The correct answer will be highlighted (along with the incorrect one should you choose that) and there is a scoreboard to keep track of how many answers you've successfully picked. Good luck and have fun :)</p>
    </div>
  )
}

export default Greeting