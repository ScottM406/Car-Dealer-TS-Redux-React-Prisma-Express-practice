import { useState } from "react"

const ChatBot: React.FunctionComponent = () => {
  const [message, setMessage] = useState<string>("")

  const sendMessage = (e) => {
    e.preventDefault();

    const testDest: any = document.querySelector("#test100")
    testDest.innerText = message;
    setMessage("");
  }

  console.log(message)

  return (
    <div id="chatbot-block">
      <h1>Feel free to ask about anything!</h1>
      <div id="chatbot-response">
        <p id="test100"></p>
      </div>
      <div id="chatbot-prompt">
        <form onSubmit={sendMessage}>
          <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ChatBot;