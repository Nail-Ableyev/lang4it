import React, {useState, useEffect} from "react"
import "../LoginPass.css"
import { ReactComponent as Lock } from '../img/lock.svg'
import { ReactComponent as Sound } from '../img/volume.svg'
import correctSound from "../sounds/access_granted.ogg"
import wrongSound from "../sounds/access_denied.ogg"
function LoginPass (){

    const correct = new Audio(correctSound);
    const wrong = new Audio(wrongSound);

    function setColor (newColor){
        document.documentElement.style.setProperty('--c', newColor);
    }

    const [loginActual, setLoginActual] = useState("");
    const [passActual, setPassActual] = useState("");

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
        const spaced = line.split('').join('!').toLowerCase();
        let utterance = new SpeechSynthesisUtterance(spaced);
        utterance.lang = 'en-US'
        utterance.rate = 0.5
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
                    <div className="for-input">
                        <input 
                            type="text" 
                            placeholder="Login"
                            id="login"
                            value={loginEntered}
                            onChange={(e) => setLoginEntered(e.target.value)}
                            autoFocus
                        />
                        <button type="button" className="buttonPass buttonRound" onClick={()=>playSound(loginActual)}><Sound/></button>

                        <input 
                            type="password" 
                            placeholder="Password"
                            id="pass"
                            value={passEntered}
                            onChange={(e) => setPassEntered(e.target.value)}
                        />

                        <button type="button" className="buttonPass buttonRound" onClick={()=>playSound(passActual)}><Sound/></button>
                    </div>
                </form>

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