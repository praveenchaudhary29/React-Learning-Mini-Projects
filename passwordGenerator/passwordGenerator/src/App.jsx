import React from "react";
import "./App.css";
import { useCallback, useState, useEffect, useRef} from "react";

function App(){
  const [Length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [CharactersAllowed, setCharactersAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const passwordRef = useRef(null);

  const copyPassword = useCallback(()=>{
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const passwordGenerator = useCallback(()=> {
      let pass="" //generated password that will pass into setPassword for UI rendering
      let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
      if (numbersAllowed) str+="1234567890"
      if(CharactersAllowed) str+='!@#$%^&*(){}:<>?/~+-'

      for(let i=1;i<=Length;i++){
         let index= Math.floor(Math.random() * str.length + 1);
         pass += str.charAt(index);
      }
     setPassword(pass); 
        } , [Length, numbersAllowed, CharactersAllowed])

      useEffect(()=>{
      passwordGenerator()
      }, [Length, numbersAllowed, CharactersAllowed])

  return <>
  <div className="w-full max-w-4xl rounded-3xl min-h-[10rem] px-4 text-xl sm:text-2xl text-orange-500 bg-gray-800 mx-auto my-12">
  <h2 className="mx-auto text-2xl sm:text-3xl my-4 text-center text-amber-100">
    Password Generator
  </h2>

  <div className="flex flex-col sm:flex-row items-center rounded-3xl overflow-hidden gap-2 px-2">
    <input
      type="text"
      placeholder="password"
      value={Password}
      className="w-full sm:flex-1 px-4 py-2 bg-white rounded-2xl text-gray-500 border-2 border-gray-800"
      readOnly
      ref={passwordRef}
    />
    <button
      onClick={copyPassword}
      className="outline-none px-4 py-2 rounded-2xl bg-blue-700 text-white"
    >
      Copy
    </button>
  </div>

  <div className="flex flex-col sm:flex-row sm:items-center mx-4 my-4 gap-y-4 sm:gap-x-8 text-base sm:text-lg">
    <div className="flex items-center gap-x-2">
      <input
        type="range"
        min={7}
        max={100}
        value={Length}
        className="cursor-pointer"
        onChange={(e) => {
          setLength(e.target.value);
        }}
      />
      <label>Length: {Length}</label>
    </div>

    <div className="flex items-center gap-x-2">
      <input
        type="checkbox"
        checked={numbersAllowed}
        id="numberInput"
        onChange={() => {
          setNumbersAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="numberInput">Numbers</label>
    </div>

    <div className="flex items-center gap-x-2">
      <input
        type="checkbox"
        checked={CharactersAllowed}
        id="characterInput"
        onChange={() => {
          setCharactersAllowed((prev) => !prev);
        }}
      />
      <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
 </>
}


export default App