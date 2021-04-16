import './global.sass';
import Header from './container/Header/index'
import SecondBlock from './container/SecondBlock/index'
import ThirdBlock from './container/ThirdBlock/index'
import FourthBlock from './container/FourthBlock/index'

import Footer from './container/Footer/index'

function App() {
  return (
    <div>
      <Header />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <Footer />
    </div>
  )
}

export default App;
