import { Button, Select, Space, Table, Modal, Form, Radio, Input, Popconfirm } from "antd"
import  React,{useState} from 'react'
import { PageTitle } from "../../components/pageTitle"
import { DeleteOutlined, DownloadOutlined, EditOutlined, EyeFilled, EyeInvisibleTwoTone, PlusOutlined, UndoOutlined } from "@ant-design/icons"
import Search from "antd/es/input/Search"
import { CreateItem } from "./CreateItem"
import { SeeIulaanParticipants } from "./SeeIulaanParticipants"





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
        style={{minWidth: '200vh'}}
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
        <CreateItem/>

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
        style={{minWidth: '130vh'}}
        open={EditOpen}
        title="Applicants"
        okText="ok"
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
        <SeeIulaanParticipants/>

      </Modal>
    );
  };








export const Iulaan = () => {
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
        {iulaanNo: '1',
        date: 'test category',
        description: 'tesla',
        status: 'Ts-001',
        deadline: '233',
        applied: '25'
    
    }
    ])


    const columns = [
        {
            key: '1',
            title: 'Iulaan No.',
            dataIndex: 'iulaanNo'
        },
        {
            key: '2',
            title: 'Date',
            dataIndex: 'date'
        },
        {
            key: '3',
            title: 'Description',
            dataIndex: 'description'
        },
        {
            key: '4',
            title: 'Status ',
            dataIndex: 'status'
        }, {
            key: '5',
            title: 'Deadline',
            dataIndex: 'deadline'
        }
        ,{
          key: '5',
          title: 'Applied',
          dataIndex: 'applied'
      }, {
        key: '13',
        title: 'View More',
        dataIndex: 'actions',
        render: (_ : any, record:any) => (
                 <div>
                   
                  <Button
                  icon = { <EyeFilled />}
                  style={{marginRight:5, color: "green"}}
                  onClick={ ()=> setEditOpen(true)}
                  title="Process"
                 >See Details</Button>
               
                 
                 </div>
                 
                 
        )}
      
     
    ]

    const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
    const onSearch = (value: string) => 2;

    return (

        <div>

        <PageTitle> Applicants List  </PageTitle>

      

        <div style={{display:"flex", justifyContent: "flex-end", marginRight: 20, marginBottom: 10}}><Search placeholder="Enter consumable details" onSearch={onSearch} style={{width: 400}} 
             allowClear /></div>
            


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
        style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
        >


        </Table>

        </div>
       


    )
}
