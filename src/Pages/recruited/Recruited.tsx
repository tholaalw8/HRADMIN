import { Button, Select, Space, Table, Modal, Form, Radio, Input, Popconfirm } from "antd"
import  React,{useState} from 'react'
import { PageTitle } from "../../components/pageTitle"
import { DeleteOutlined, DownloadOutlined, EditOutlined, PlusOutlined, UndoOutlined } from "@ant-design/icons"
import Search from "antd/es/input/Search"

import { EditItem } from "./EditItem"





interface Values {
    title: string;
    description: string;
    modifier: string;
  }
  
 

  interface CollectionEditFormProps {
    EditOpen: boolean;
    onEdit: (values: Values) => void;
    onEditModalCancel: () => void;
  }
  
  


  const CollectionEditForm: React.FC<CollectionEditFormProps> = ({
    EditOpen,
    onEdit,
    onEditModalCancel,
  }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        style={{minWidth: 700}}
        open={EditOpen}
        title="Edit Consumable Item"
        okText="Edit Item"
        cancelText="Cancel"
        onCancel={onEditModalCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onEdit(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <EditItem/>

      </Modal>
    );
  };








export const Recruited = () => {
    const [open, setOpen] = useState(false);
    const [EditOpen, setEditOpen] = useState(false);

    

    const onEdit = (values: any) => {
      console.log('Recieved values of form: ', values)
      setEditOpen(false);
    }



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
            title: 'Iulaan No.',
            dataIndex: 'category'
        },
        {
            key: '3',
            title: 'No. Of Applicants',
            dataIndex: 'model'
        },
        {
            key: '4',
            title: 'Status ',
            dataIndex: 'item'
        }, {
            key: '5',
            title: 'Attended',
            dataIndex: 'total'
        }
        , {
            key: '6',
            title: 'Remaining',
            dataIndex: 'remaining'
        } 
        , {
            key: '',
            title: 'Remaining',
            dataIndex: 'remaining'
        } ,
     {
            key: '13',
            title: 'Actions',
            dataIndex: 'actions',
            render: (_ : any, record:any) => (
                     <div>
                        <Popconfirm   title="Are you sure delete this Item?" okText="Yes" cancelText="No">   <Button icon ={<UndoOutlined />
                    } style={{color: "red"}} 
                      onClick={()=> {console.log("You clicked delete Button! ")}}
                    >Send Back</Button> </Popconfirm>
                                             <span />
                      <Button
                      icon = { <EditOutlined />}
                      style={{marginRight:5, color: "green"}}
                      onClick={ ()=> setEditOpen(true)}
                      title="Process"
                     >Process</Button>
                   
                     
                     </div>
                     
                     
            )
                  
            

          
        }
    ]

    const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
    const onSearch = (value: string) => 2;

    return (

        <div>

        <PageTitle> Recruited </PageTitle>

      

        <div style={{display:"flex", justifyContent: "flex-end", marginRight: 20, marginBottom: 10}}><Search placeholder="Enter consumable details" onSearch={onSearch} style={{width: 400}} 
             allowClear /></div>
            


  <div>
      
      
 <CollectionEditForm
        EditOpen={EditOpen}
        onEdit={onEdit}
        onEditModalCancel={() => {
          setEditOpen(false);
        }}
      /> 

    </div>


        <Table
        columns={columns}
        dataSource={data}
        style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
        >


        </Table>

        </div>
       


    )
}
