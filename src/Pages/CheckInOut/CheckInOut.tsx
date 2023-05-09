import { Button, Space, Table, } from "antd";
import { PageTitle } from "../../components/pageTitle";
import {useState} from "react"
import { DeleteOutlined, EditOutlined, EnterOutlined, SendOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import { Select, Tag } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';


const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];



export const Checkout = () =>{

    const [data, setData] = useState([
        {id: '1',
        category: 'test category',
        model: 'tesla',
        item: 'Ts-001',
        total: '233',
        remaining: '3545',
    
    }
    ])


    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Category',
            dataIndex: 'category'
        },
        {
            key: '3',
            title: 'Model No.',
            dataIndex: 'model'
        },
        {
            key: '4',
            title: 'Item No. ',
            dataIndex: 'item'
        }, {
            key: '5',
            title: 'Total',
            dataIndex: 'total'
        }
        , {
            key: '6',
            title: 'Remaining',
            dataIndex: 'remaining'
        } 
        ,
        {
            key: '8',
            title: 'Min Qty',
            dataIndex: 'minqty'
        },
         {
            key: '8',
            title: 'Location',
            dataIndex: 'location'
        }
        , {
            key: '13',
            title: 'Actions',
            dataIndex: 'actions',
            render: (_ : any, record:any) => (
                     <div>
                        <Button
                      icon = { <SendOutlined />}
                      style={{ color: "white", background: "maroon", height: 35, }}
                     >  Checkout</Button>
                    
                    <Button 
                    icon={ <EnterOutlined/>}
                    style={{color: "white", background: "green", height: 35, marginLeft: 4}}
                    > Check In</Button>
                     
                     </div>
                     
                     
            )
                  
            

          
        }
    ]

    const onSearch = (value: string) => 2;

    return (

        <div>

        <PageTitle> Check In/Out </PageTitle>

        <div style={{display:"flex", justifyContent: "flex-start", marginLeft: 20, marginBottom: 5}}><Search placeholder="Enter consumable details" onSearch={onSearch} style={{width: 400}} 
             allowClear /></div>
            
        <Space size={200} style={{display: "flex", justifyContent: "flex-end", margin: 4, marginRight: 20}}>

             <Select
    mode="multiple"
    
    defaultValue={['gold', 'cyan']}
    style={{ width: '100%', minWidth: 200, }}
    options={options}
  />

        </Space>
           


        <Table
        columns={columns}
        dataSource={data}
        >


        </Table>

        </div>
       


    )
}