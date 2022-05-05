import React, {useState, useEffect} from "react"
import "../LoginPass.css"
import { ReactComponent as Lock } from '../img/lock.svg'
import correctSound from "../sounds/access_granted.ogg"
import wrongSound from "../sounds/access_denied.ogg"
function LoginPass (){

    const correct = new Audio(correctSound);
    const wrong = new Audio(wrongSound);


    const color = getComputedStyle(document.documentElement).getPropertyValue('--c');

    function setColor (newColor){
        document.documentElement.style.setProperty('--c', newColor);
    }

    const [loginActual, setLoginActual] = useState("login");
    const [passActual, setPassActual] = useState("pass");



    const [loginEntered, setLoginEntered] = useState("");
    const [passEntered, setPassEntered] = useState("");

    const [level, setLevel] = useState(1);
    const [solved, setSolved] = useState(false)

    const loginCharSet="abcdefghijklmnopqrstuvwxyz0123456789";
    const passCharSet="abcdefghijklmnopqrstuvwxyz0123456789#&*_=";

    function handleclick(){
        if (loginActual === loginEntered && passActual === passEntered){
            setSolved(true)
            setColor("green")
            correct.play()
        }
        else {
            setColor("red")
            wrong.play()

        }
    }

    function createLoginInfo(length, characters){
            let result="";
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
           }
           return result;
    }

    function upgradeLevel(){
        setColor("white")
        setSolved(false)
        setLevel( level + 1)
        setLoginEntered("")
        setPassEntered("")
    }

    function playSound(line){
        const spaced = line.split('').join(' ');
        let utterance = new SpeechSynthesisUtterance(spaced);
        utterance.lang = 'en-US'
        utterance.rate = 0.8
        speechSynthesis.speak(utterance);
    }

    useEffect(()=>{
        setLoginActual(createLoginInfo(level+4,loginCharSet));
        setPassActual(createLoginInfo(level+4,passCharSet))
    },[level])


    return(
        <div className="containerPass">
            <div className="mainPass">
                <Lock/>
                <form>
                    <h1>Level {level}</h1>
                    <input 
                        type="text" 
                        placeholder="Login"
                        id="login"
                        value={loginEntered}
                        onChange={(e) => setLoginEntered(e.target.value)}
                        autoFocus
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Password"
                        id="pass"
                        value={passEntered}
                        onChange={(e) => setPassEntered(e.target.value)}
                    />
                </form>

                <button className="buttonPass" onClick={()=>playSound(loginActual)}>Say Login</button>
                <button className="buttonPass" onClick={()=>playSound(passActual)}>Say Password</button>


                <button 
                    className="buttonPass "
                    onClick={()=>handleclick()}
                >
                    Submit
                </button>
                <button 
                    className={!solved ? "buttonPass hidden" : "buttonPass visible"}
                    onClick={()=>upgradeLevel()}
                >
                    Next
                </button>


            </div>
        </div>
        
    )
}

export default LoginPass