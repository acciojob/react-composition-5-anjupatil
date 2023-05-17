
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";


const App = () => {
  const tabsSet1 = [
    { title: 'Tab 1', content: 'Content for 1' },
    { title: 'Tab 2', content: 'Content for 2' },
    { title: 'Tab 3', content: 'Content for 3' },
  ];

  const tabsSet2 = [
    { title: 'Tab A', content: 'Content for A' },
    { title: 'Tab B', content: 'Content for B' },
    { title: 'Tab C', content: 'Content for C' },
  ];
  
  return (
    <div className="app">
        {/* Do not remove the main div */}
        <h1>Tabs Example</h1>
        <Tabs tabs={tabsSet1} key="set1" ></Tabs>
        <Tabs tabs={tabsSet1} key="set2" ></Tabs>
    </div>
  )
}

export default App
