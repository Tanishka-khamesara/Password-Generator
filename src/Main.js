import { useCallback, useState } from 'react';


function Main() {
    const [length, setLength] = useState(0);
    const [uppercase, setUppercase] = useState(false);
    const [lowercase, setLowercase] = useState(false);
    const [special, setSpecial] = useState(false);
    const [number, setNumber] = useState(false);
    const[Password,setPassword]=useState()


    const generatePassword = useCallback(() => {
        let str = "";
        let passout = "";
        if (length==0 || length<8 ||length>50) {
            alert("please enter length in range")
        }
        else if (uppercase == false && lowercase == false && number == false && special == false) {
            alert("please select atleast one checkbox");
        }

        if (uppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) str += "abcdefghijklmnopqrstuvwxyz";
        if (special) str += "!@#$%^&*()_+=-{}|[]\\:;\"'<>,.?/";
        if (number) str += "0123456789";

        for (let i = 0; i < length; i++){
            const Randomindex = Math.floor(Math.random()*str.length);
            // console.log(Randomindex);
            passout += str.charAt(Randomindex);
        }
        console.log(passout);
        setPassword(passout);



    },[length,uppercase,lowercase,number])
    return (
        <div>
            <h1>Password Generator</h1>
            <div class="output">{Password}</div>
            <div style={{display:"flex", justifyContent:"space-between" }}>
                <p>Select Password length(**8-50 characters**)</p>
                <input type="number" onChange={(e) => {
                    setLength(e.target.value)
                
                }} />
            </div>
            <div>
                <input type="checkBox" value="uppercase" id="uppercase" name="uppercase" checked={uppercase} onClick={(e)=>{setUppercase(e.target.checked)}} />
                <label for="uppercase">Include upper case</label><br></br>
                <input type="checkBox" value="lowercase" id="lowercase" name="lowercase" checked={lowercase} onClick={(e)=>{setLowercase(e.target.checked)}} />
                <label for="lowercase">Include lower case</label><br></br>
                <input type="checkBox" value="numbers" id="numbers" name="numbers" checked={number} onClick={(e)=>{setNumber(e.target.checked)}}/>
                <label for="numbers">Include numbers</label><br></br>
                <input type="checkBox" value="special" id="special" name="special" checked={special} onClick={(e)=>{setSpecial(e.target.checked)}}/>
                <label for="special">Include symbols</label><br></br>
            </div>
            <button onClick={generatePassword}>Generate Password</button>
        </div>
    )
}
export default Main;
