import UseLocalStorage from "./UseLocal";

export default function LightDarkMode(){
    const [theme,setTheme]=UseLocalStorage("theme","dark")
    function handleclick(){
        setTheme(theme==='light' ? 'dark':"light")
    }
    console.log(theme);
    return(
        <div>
            <div data-theme={theme}>
                <p>Hello World</p>
                <button onClick={handleclick}>Change Theme</button>
            </div>
        </div>
    )
}