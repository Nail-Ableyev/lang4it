import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {Routes, Route} from "react-router-dom"
import Flipper from "./components/Flipper";
import NotFound from "./components/NotFound";
import Dashboard from './components/Dashboard/Dashboard';
import Flip2Match from './components/Flip2Match';


function App() {

    const mainScreenList =
        [
            {
                id: "symbols",
                size: 2,
                title: "$ymbols & sign$",
                type: "wordWordFlip"
            },
            {
              id: "instructions",
              size: 3,
              title: "Instructions",
              type: "wordPicFlip"
          },
            {
                id: "colors",
                size: 1,
                title: "Colors",
                tag: "new",
                type: "colors"
            },
            // {
            //     id: "layout",
            //     size: 3,
            //     title: "Layout",
            //     type: "wordPicFlip"
            // },
            // {
            //     id: "grid",
            //     size: 1,
            //     title: "Grid",
            //     type: "wordPicFlip"
            // },
            {
                id: "loginPass",
                size: 1,
                title: "Login & Password",
                type: "LoginPass"
            }

        ]

    const mainListToRender = mainScreenList.map(item => (<Route key={item.id}  path={`/${item.id}`} element={<Flipper type={item.type} id={item.id}/>}/>))





  return (
    <div>
      <Header/>
        <Routes>
            <Route  path="/" element={<Main mainScreenList={mainScreenList}/>}/>
            {mainListToRender}
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/flip2match" element={<Flip2Match/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>


    </div>
  );
}

export default App;
