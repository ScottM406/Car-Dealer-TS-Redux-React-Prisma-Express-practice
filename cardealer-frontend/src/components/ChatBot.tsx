import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import { getVehicles } from "../state/vehiclesSlice";

const key: string = import.meta.env.VITE_GPT_KEY;
const messageLog: string[] = [];

const ChatBot: React.FunctionComponent = () => {
  const [message, setMessage] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [messageLog, setMessageLog] = useState<string[]>([]) *Perhaps switch to useState when scaling up.
  const dispatch = useDispatch<AppDispatch>()
  const vehciles = useSelector((state: RootState) => state.vehicles)
  
  useEffect(() => {
    dispatch(getVehicles)
  }, [vehciles])

  const sendMessage = async (e: any) => {
    e.preventDefault();
    messageLog.push("You: " + message);
    await getGPTReply();
    setMessage("");
  };

  const rejectEmptyMessage = (e:any) => {
    e.preventDefault();
  }

  const getGPTReply = async () => {
    const GPT = new GoogleGenerativeAI(key);
    const model = GPT.getGenerativeModel({ model: "gemini-1.5-flash" });
    const vehiclesStringified = JSON.stringify(vehciles)
    const prompt = `Hello. I am testing a car dealership web project. At the end of this message will be a user's prompt for the car dealership's 'chatbot'. 
    Please answer the question with a friendly sentance or two in the tone of a chatbot answering a question about a vehcile, service, or the website in genreal. 
    He is an object which contains information on the vehicles currently in stock - ${vehiclesStringified}. 
    Please use the information contained in the object to anwser vehicle questions. 
    If the user's prompt is not relevant to the workings of a car dealership or it's website. please respond with a sentence explaining that you only 
    answer questions relating to the dealership. If the prompt is empty or appears to be accidentally submitted early, please respond that you are a
    chatbot and tell the user that you are ready to help with their questions. I have noticed that oftentimes, your response also includes \n\{original prompt}\n\; 
    Please do not return that. The sentance after this one is the user's prompt.` + message;
    const result = await model.generateContent(prompt);
    const resultText = await result.response.text();
    messageLog.push("Chatbot: " + resultText);
  };

  return (
    <>
    <div id="chatbot-container">
      <div className={`collapse ${isOpen ? 'show' : ''} card card-body`} id="chatbot-block">
          <h1>Feel free to ask about anything!</h1>
          <div id="chatbot-response">
            {messageLog.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
          <div id="chatbot-prompt">
            <form onSubmit={ message === "" ? rejectEmptyMessage : sendMessage}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      <button
        id="chatbot-button"
        className="btn btn-primary"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="chatbot-block"
      >
        Click here to chat with us!
      </button>
    </div>
    </>
  );
  };

export default ChatBot;