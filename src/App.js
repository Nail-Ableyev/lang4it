import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {Routes, Route} from "react-router-dom"
import Flipper from "./components/Flipper";
import NotFound from "./components/NotFound";


function App() {

    const mainScreenList =
        [
            {
                id: "family",
                size: 1,
                title: "Family",
                type: "custom"
            },
            {
                id: "symbols",
                size: 2,
                title: "$ymbols & sign$",
                tag: "upd",
                type: "wordWordFlip"
            },
            {
                id: "colors",
                size: 1,
                title: "Colors",
                type: "colors"
            },
            {
                id: "layout",
                size: 3,
                title: "Layout",
                type: "wordPicFlip"
            },
            {
                id: "grid",
                size: 1,
                title: "Grid",
                type: "wordPicFlip"
            },
            {
                id: "spacing",
                size: 3,
                title: "Spacing",
                tag: "new",
                type: "wordPicFlip"
            }

        ]

    const mainListToRender = mainScreenList.map(item => (<Route key={item.id}  path={`/${item.id}`} element={<Flipper type={item.type} id={item.id}/>}/>))





  return (
    <div>
      <Header/>
        <Routes>
            <Route  path="/" element={<Main mainScreenList={mainScreenList}/>}/>
                {mainListToRender}
            <Route path="*" element={<NotFound/>}/>
        </Routes>


    </div>
  );
}

export default App;
