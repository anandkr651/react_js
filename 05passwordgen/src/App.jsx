import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallow] = useState(false);
  const [charallowed, setcharallow] = useState(false);
  const [password, setpassword] = useState("");

  //useref hook
  const passwordref = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberallowed) str += "0123456789";
    if (charallowed) str += "~!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberallowed, charallowed, setpassword]); //agar yaha pe setpassword --> password agar likhete hai to aap infinite loop mi fash jate hai

  const copypassword = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numberallowed, charallowed, passwordgenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto px-4 my-8 py-3 text-orange-500 shadow-md rounded-lg bg-gray-800">
        <h1 className="text-center text-white text-xl py-3 ">
          password generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copypassword}
            className="bg-blue-700 py-2.5 px-3 text-white shrink-0 outline-none"
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-7">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberinput"
              onChange={() => {
                setnumberallow((prev) => !prev);
              }}
            />
            <label htmlFor="numberinput">number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="numberinput"
              onChange={() => {
                setcharallow((prev) => !prev);
              }}
            />
            <label htmlFor="characterinput">character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
