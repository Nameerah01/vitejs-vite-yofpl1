import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Message from './component/Message'
import Counter from './component/Counter'
import FunctionClick from './component/FunctionClick'
import EventBind from './component/EventBind'
import ParentComponent from './component/ParentComponent'
import UserGreeting from './component/UserGreeting'
import NameList from './component/NameList'
import Stylesheet from './component/Stylesheet'
import Form from './component/Form'
import LifecycleA from './component/LifecycleA'
import FragmentDemo from './component/FragmentDemo'
import Table from './component/Table'
import PureComp from './component/PureComp'
import RegComp from './component/RegComp'
import ParentComp from './component/ParentComp'
import Hero from './component/Hero'
import ErrorBoundary from './component/ErrorBoundary'
import ClickCounter from './component/ClickCounter'
import HoverCounter from './component/HoverCounter'
import HookCounter from './component/HookCounter'
import HookCounterTwo from './component/HookCounterTwo'
import HookCounterThree from './component/HookCounterThree'
import HookCounterFour from './component/HookCounterFour'
import ClassCounterOne from './component/ClassCounterOne'
import HookCounterOne from './component/HookCounterOne'
import ClassMouse from './component/ClassMouse'
import HookMouse from './component/HookMouse'
import IntervalClassCounter from './component/IntervalClassCounter'
import IntervalHookCounter from './component/IntervalHookCounter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <IntervalHookCounter/>
      </header>
    </div>
  )
}

export default App
