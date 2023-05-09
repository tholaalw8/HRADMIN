import { Form, Modal } from "antd";
import {useState} from "react"



interface Values {
    title: string;
    description: string;
    modifier: string;
  }

interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: Values) => void;
    onCancel: () => void;
    children: string | JSX.Element | JSX.Element[] | (()=> JSX.Element)
  }


export const GenericModalForm: React.FC = () => {

  const [open, setOpen] = useState(true);




    const [form] = Form.useForm();
    return (
      <Modal
        style={{minWidth: 700}}
         open={open}
        title="GENERIC MODAL WINDOW"
        okText="GENERIC OK"
        cancelText="GENERIC CANCEL"
        onCancel={()=> {
          setOpen(false);
        }}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              // onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        
  
      </Modal>
    );
  };