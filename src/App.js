/*
 * @Author: c_kai c_kai@ctrip.com
 * @Date: 2023-03-13 14:42:39
 * @LastEditors: c_kai c_kai@ctrip.com
 * @LastEditTime: 2023-03-13 16:50:18
 * @FilePath: /react-cli/react-app/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: c_kai c_kai@ctrip.com
 * @Date: 2023-03-13 14:42:39
 * @LastEditors: c_kai c_kai@ctrip.com
 * @LastEditTime: 2023-03-13 16:49:08
 * @FilePath: /react-cli/react-app/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import logo from './logo.svg';
import './App.css';
import Header from './container/header'

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
