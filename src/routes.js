/* 
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
// import your route components too


const routes = () => {
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={ <h1>probandoooo</h1>} />
                    <Route path="teams" element={<h2>prueba componente especifico</h2>}>
                        <Route path=":teamId" element={<h2>prueba hijo componente expecifico</h2>} />
                        <Route path="new" element={<h2>prueba hijo componente expecifico segundo hijo</h2>} />
                        <Route index element={<h1>Que es esta shiiiiiiiit xD</h1>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>,
        document.getElementById("root")
    );
} */