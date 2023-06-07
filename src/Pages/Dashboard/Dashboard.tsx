import { Card, Layout, Space, Statistic, Typography } from "antd";
import { GenericModalForm } from "../../components/GenericCreateModalForm";
import { PageTitle } from "../../components/pageTitle";
import { CreateItem } from "../Applications/CreateItem";
import { CheckOutlined, InboxOutlined, PullRequestOutlined, ReconciliationFilled, ReconciliationOutlined, SendOutlined, ShoppingCartOutlined, SwapOutlined } from "@ant-design/icons";
import { HistoryTable } from "./Historytable";




interface DashboardItemProps {
    title: string;
    value: number;
    item?:any
    mystyle?:any
}





export const Dashboard = () =>{

    const DashboardItem:React.FC<DashboardItemProps> = ({title, value,item,mystyle}) => {
        return (
            <Card style={{marginLeft: 15}}>
            <Space direction="horizontal">
                <div style={{height: 50, width: 50, fontSize: 30, display: "flex", justifyContent: "center"}}> <div style={mystyle}>{item}</div></div>
                <Statistic title={title} value={value} />
            </Space>
            </Card>
        )
    }


    return (
        <div> 
            <PageTitle> Dashboard </PageTitle> 
         <Layout style={{margin: 20}}>
            <Space direction="horizontal" >
                
                   <DashboardItem title="Checkins Today" value={233}  item={<InboxOutlined/> }  mystyle={{color: "green"}}/>
                   <DashboardItem title="Check Outs  Today" value={233} item={<ShoppingCartOutlined/>} mystyle={{color: "red"}}/>
                   <DashboardItem title="Transfer Orders Today" value={233} item={<SwapOutlined/>} mystyle={{color: "navy"}}/>
                   <DashboardItem title="Request Orders Today" value={233} item={<ReconciliationOutlined/>} mystyle={{color: "skyblue"}}/>
                   
            </Space>
          
          
           <div style={{marginTop: 40, margin:20, maxWidth: "110vh"}}>
           <Typography.Title level={5}>Activity History </Typography.Title> 
           <HistoryTable/>
           </div>
          
            
            

            </Layout>

           
        </div> 
    );
  
    
}