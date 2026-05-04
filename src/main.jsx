import { createRoot } from 'react-dom/client'
import Homepage from './page/Homepage'
import BTLayout from './page/BTLayout'
import Binding from './page/Binding'
import BTDataBinding from './components/DataBinding/BTDataBinding'
import EventHandler from './page/EventHandler'

createRoot(document.getElementById('root')).render(
    //  homepage
    // <Homepage />
    // <BTLayout />
    // <Binding />
    // <BTDataBinding />
    <EventHandler />

)


// file jsx và js
// jsx là 1 phần mở rộng của js, nó cho phép chúng ta viết code giống như html trong js


// js       jsx
// class -> className
//onclick-> onClick