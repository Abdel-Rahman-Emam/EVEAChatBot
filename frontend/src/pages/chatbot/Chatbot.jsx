import {useState} from 'react'
import Header from '../../components/header/Header'
import Topbar from '../../components/topbar/Topbar'
import './chatbot.css'
import ReactScrollableFeed from 'react-scrollable-feed'

const Chatbot = () => {
  let mess = ''
  const test1 = () => {

    mess = newtextmsg
    if (document.getElementById('user-input').value!==''){


    //create JSON object of message then append it to list of message history
    const id = Math.floor(Math.random()*100000) + 1
    const newMsg = {id:id, text:mess, bot:false}
    setMessages([...message, newMsg])
    }

  }



//Message History
const [message, setMessages] = useState([

])

  const [newtextmsg, setnewtextmsg] = useState('')
  //const [bot, setbot] = useState(false)

  const handleclick=(e)=>{
    e.preventDefault()
    document.getElementById('user-input').value=''
  }

  return (
    <>
    <Topbar/>
    <div className="main">
      <ReactScrollableFeed className= "chatArea">
      <Header msg = {mess} MesHist={message}/>
        <form className="dock" onSubmit={handleclick}>
        <input className = "typing" value = {newtextmsg} onChange={(e)=>setnewtextmsg(e.target.value)} id="user-input"></input>
        <button className = "sub" onClick={test1} id="submit">⇝</button>
        </form>


      </ReactScrollableFeed>
    </div>
    </>
  );
}


export default Chatbot;
