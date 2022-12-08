import React from 'react'

function Greeting() {
  return (
    <div className='greeting-wrapper'>
        <h2>Hi Everyone! Welcome to Quizipedia!</h2>
        <p><b>Background:</b> This Web Application fetches data from The Open Trivia Database (<em>opentdb.com</em>). According to their site, they provide over 4,000 verified questions and over 9,500 pending questions to choose from.</p>
        <p><b>Instructions:</b> For those that haven never played this game before, the objective is quite simple. After clicking start you will be provided with 10 questions and multiple answers to choose from. All you have to do is select the one you think is right. The correct answer will be highlighted (along with the incorrect one should you choose that) and there is a scoreboard to keep track of how many answers you've successfully picked. Good luck and have fun :)</p>
    </div>
  )
}

export default Greeting