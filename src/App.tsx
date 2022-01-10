import React from 'react';
import MaterialButton from "./components/materialUI/MaterialButton";
import BasicGrid from "./components/materialUI/BasicGrid";
import CustomStyles from "./components/materialUI/CustomVariable";
import IconLabelButtons from "./components/materialUI/IconLabelButtons";
import TemporaryDrawer from "./components/materialUI/TemporaryDrawer";
import VirtualizedList from "./components/materialUI/VirtualizedList";
import Hello from "./components/awesome/Hello";
import Example from "./components/winter/Example";
import CommentList from "./components/higher/CommentList";
import BlogPost from "./components/higher/BlogPost";
import HocReal from "./components/higher/AwesomeCommentList";
function App() {
  return (
    <div>
        {/*<Hello/>*/}
        <Example/>
        <CommentList />
        <br/>
        <br/>
        <BlogPost id={'1'}/>
        <br/>
        <br/>
        <HocReal/>
        {/*<ComponentFoo name={'hello'} x={1} y={2}/>*/}
        {/*<VirtualizedList/>*/}
        {/*<TemporaryDrawer/>*/}
        {/*<IconLabelButtons/>*/}
        {/*<CustomStyles/>*/}
        {/*<MaterialButton/>*/}
        {/*<BasicGrid/>*/}
    </div>
  );
}

export default App;
