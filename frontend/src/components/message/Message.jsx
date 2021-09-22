import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import './message.css'
import { useQuery } from 'react-query'

const Message = ({message}) => {

    //React Querry
    const {isLoading, error, data } = useQuery("puppy", async()=> await axios("https://random.dog/woof.json"));


    //API CONFIGS
    const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: 'Cairo', days: '1'},
    headers: {
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        'x-rapidapi-key': 'c3ef9425d0msha87e646d9b5db32p12bf5bjsn9496d7d13d7a'
    }
    }

    const options2 = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country',
        params: {name: 'egypt'},
        headers: {
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
            'x-rapidapi-key': 'baef9d49ddmsh639f6da92592444p140fe2jsn1d951d9f7207'
        }
        };

    //API STATES
    const [currcov, setcov] = useState('')
    const [currw, setw] = useState('')

    let res = ''
    let bgdog = ''
      




    //determine bot response
    var date = new Date();
    if (message.bot == false ){
    if (message.text == 'Help'){
        res = 'Hello, My name is EVEA - your virtual assistant'; 
    } else if (message.text.includes('weather')){
        axios.request(options).then(function (response) {
            setw( response.data.current.temp_c)
        }).catch(function (error) {
            console.error(error);
        });
        res = 'It is currently ' + currw +  '°C'
        bgdog = ''

    } else if (message.text == 'Hello'){
        res = 'Hi!'; 
        bgdog = ''
    } else if (message.text.includes('covid')){
        axios.request(options2).then(function (response) {
            setcov(response.data[0].confirmed);
        }).catch(function (error) {
            console.error(error);
        });
  
        res = 'There are a total of ' + currcov + ' confirmed cases of Covid-19 in Egypt.'; 
        bgdog = ''
    } else if (message.text == 'Abdul'){
        res = 'king shit'; 
        bgdog = ''
    } else if (message.text == 'Dog'){
        if(error){
            res = 'Error: ' + error.message + ', Please try again!'
        }
        if(isLoading){
            res = 'Loading...' 
        }
        res = 'Here is a good boy :)'
        bgdog = data.data.url; 
    } else if (message.text.includes('your name') ||  message.text.includes("you're name")){
        res = "My name is EVEA, and I'll be your virtual assistant for the day :)";
    }else if (message.text.includes("old")|| message.text.includes("age")){
        res = "Silly you, I am a bot I can't age!" || "Lmao";
    }else if (message.text.includes('siri') ||  message.text.includes("cortana")){
        res = "انا اسمي الحقيقي دانيال"
    }else if (message.text.includes('what is the answer to everything?')){
        res = "42"
    }else if (message.text.includes('artist') ||  message.text.includes("singer")){
        res = "Kanye West is my favorite rapper, such a shame he broke up with kim";
    }else if (message.text.includes("what's the time?") ||  message.text.includes("time")){

        res = "The time is currently " + date.toLocaleTimeString("en-us", {timeStyle: "medium"});
    }else if (message.text.includes('you was at the club')){
        res = "yeaH"
    }else if (message.text.includes("date")){
        res = "Today's " + date.toLocaleDateString()
    }else if (message.text.includes('uwu') || message.text.includes('owo')){
        res = "OwO 👉👈"
    }else {
        res = 'Im Sorry I cannot help you with that...'
        bgdog = ''
    }
}



    return (
        <div className='pair'>
        <div className = 'userMessage'>
            {message.text}
        </div>
        <div className = 'botMessage'>
            {res}
            <img className ='dogPic' src={bgdog}/>
        </div>
        </div>
    )
}

export default Message