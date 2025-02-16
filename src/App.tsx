
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPageAsync";
import {Suspense} from "react";
import {MainPageAsync} from "./pages/MainPageAsync";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App =() =>{

    const {theme, toggleTheme} = useTheme();

    return(
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/main'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path={'/main'} element={<MainPageAsync/>} />
                    <Route path={'/about'} element={<AboutPageAsync/>} />
                </Routes>
            </Suspense>

        </div>
    )
}


export default App;