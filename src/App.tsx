import React from 'react';
import MaterialButton from "./components/materialUI/MaterialButton";
import BasicGrid from "./components/materialUI/BasicGrid";
import CustomStyles from "./components/materialUI/CustomVariable";
import IconLabelButtons from "./components/materialUI/IconLabelButtons";
import TemporaryDrawer from "./components/materialUI/TemporaryDrawer";
import VirtualizedList from "./components/materialUI/VirtualizedList";

function App() {
  return (
    <div>
        <VirtualizedList/>
        <TemporaryDrawer/>
        <IconLabelButtons/>
        <CustomStyles/>
        <MaterialButton/>
        <BasicGrid/>
    </div>
  );
}

export default App;
