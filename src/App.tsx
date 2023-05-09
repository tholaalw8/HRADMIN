import 'antd/dist/reset.css';
import './App.css';
import AppMenu from './components/menu';
import Contents from './components/content';
import {useNavigate} from 'react-router-dom'
import { Headers } from './components/Header';
import { Footer } from './components/Footer';
import { Layout } from 'antd';
import { FontColorsOutlined } from '@ant-design/icons';

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
                  background: "white",
                  display: "flex",
                  justifyContent: "center",
                  height: "6vh",
                  alignItems: "center",
                  
                  
                }}
              > 
              <Headers> DJA Inventory System </Headers></Header>
                
         <Content>
             <Contents/>
         </Content>
       
          <Footer />

          </Layout>

    </Layout>
  );
}

export default App;
