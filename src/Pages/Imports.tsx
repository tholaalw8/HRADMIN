import { Button, Select, Space, Table, Modal, Form, Radio, Input } from "antd"
import  React,{useState} from 'react'
import { PageTitle } from "../components/pageTitle"
import { ClearOutlined, ContainerOutlined, DeleteOutlined, DownloadOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons"
import Search from "antd/es/input/Search"
import { CreateItem } from "./Consumable/CreateItem"
import { EditItem } from "./Consumable/EditItem"





interface Values {
    title: string;
    description: string;
    modifier: string;
  }
  
  interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
  }

  interface CollectionEditFormProps {
    EditOpen: boolean;
    onEdit: (values: Values) => void;
    onEditModalCancel: () => void;
  }
  
  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    open,
    onCreate,
    onCancel,
  }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        style={{minWidth: 700}}
        open={open}
        title="Create New Consumable Item"
        okText="Create Item"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        {/* <CreateItem/> */}

      </Modal>
    );
  };


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
        {/* <EditItem/> */}

      </Modal>
    );
  };








export const Imports = () => {
    const [open, setOpen] = useState(false);
    const [EditOpen, setEditOpen] = useState(false);

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        setOpen(false);
      };


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
            title: 'File',
            dataIndex: 'file'
        },
        {
            key: '2',
            title: 'created',
            dataIndex: 'created'
        },
        {
            key: '3',
            title: 'Size',
            dataIndex: 'size'
        },
       
     {
            key: '13',
            title: 'Actions',
            dataIndex: 'actions',
            render: (_ : any, record:any) => (
                     <div>
                        <Button
                      icon = { <ContainerOutlined />}
                      style={{marginRight:5, color: "green"}}
                      onClick={ ()=> setEditOpen(true)}
                     > Process </Button>
                      <span />
                     <Button icon ={<ClearOutlined />} style={{color: "red"}} /> 
                     
                     </div>
                     
                     
            )
                  
            

          
        }
    ]

    const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
    const onSearch = (value: string) => 2;

    return (

        <div>

        <PageTitle> Imports </PageTitle>

    
            
        <Space size={200} style={{display: "flex", justifyContent: "flex-end", marginBottom: 10, marginRight: 20}}>
        <Button
         
         shape="round"
         onClick={() => {
            setOpen(true);
          }}
         style={{paddingInline:20, marginLeft: 20, height: 40, background: "skyblue"}}  
         icon={<PlusOutlined/>}
        >Select Import file</Button>
             
  </Space>



  <div>
      
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />

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
        >


        </Table>

        </div>
       


    )
}
