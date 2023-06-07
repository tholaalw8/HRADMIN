import 'antd/dist/reset.css';
import './App.css';
import AppMenu from './components/menu';
import Contents from './components/content';
import {useNavigate} from 'react-router-dom'
import { Headers } from './components/Header';
import { Footer } from './components/Footer';
import { Layout } from 'antd';


const { Content, Header} = Layout;

function App() {

  const navigate = useNavigate()

  const onClick = (e:any) => {
    if( e.key != undefined){
      navigate(e.key)
    }
    console.log('click loged from parent',  e.key)
  }
 
  return (

    <Layout>
        
        <AppMenu onClick={onClick}/>

         <Layout
              style={{
                 minWidth: "88vw",
                 minHeight: "92vh", 
                 
              }}

         >
              <Header
                style={{
                  background: "linear-gradient(to left, rgba(106, 17, 203, 0.9), rgba(37, 117, 252, 0.9))",
                  display: "flex",
                  justifyContent: "center",
                  height: "6.3vh",
                  alignItems: "center",
                  color: 'white'
                  
                  
                }}
              > 
              <Headers>  DJA Recruitement Portal Panel </Headers></Header>
                
         <Content style={{marginLeft: 20, marginRight: 20}}>
             <Contents/>
         </Content>
       
          <Footer />

          </Layout>

    </Layout>
  );
}

export default App;
