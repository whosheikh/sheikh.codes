;(() => {
  const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why did the developer go broke? Because he used up all his cache!",
    "Why do programmers hate nature? It has too many bugs!",
    "Why did the programmer quit his job? Because he didn't get arrays!",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
  ]

  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C1"]

  function displayRandomJoke() {
    const joke = jokes[Math.floor(Math.random() * jokes.length)]
    const color = colors[Math.floor(Math.random() * colors.length)]
    console.log(`%c🃏 ${joke}`, `color: ${color}; font-weight: bold; font-size: 14px;`)
  }

  function initJokes() {
    console.log("%cWelcome to Sheikh Likhon's website!", "color: #4CAF50; font-weight: bold; font-size: 16px;")
    console.log("%cEnjoy some programming jokes while you're here:", "color: #2196F3; font-size: 14px;")

    displayRandomJoke()
    setInterval(displayRandomJoke, 10000)
  }

  initJokes()
})()

