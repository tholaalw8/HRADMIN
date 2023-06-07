import { PageTitle } from "../../components/pageTitle"
import { DownloadOutlined, } from '@ant-design/icons';
import {
    Button,
    Space,
    Table
  } from 'antd';
  import React, { useState } from 'react';


export const SeeIulaanParticipants: React.FC = () =>{
    
    const [data, setData] = useState([
      {id: '1',
      category: 'test category',
      model: 'tesla',
      item: 'Ts-001',
      total: '233',
      remaining: '3545',
  
  }
  ])



  const [selectedRowKeys, SetSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);


  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      SetSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };


  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    SetSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;






  const columns = [
      {
          key: '1',
          title: 'ID Card No',
          dataIndex: 'id'
      },
      {
          key: '3',
          title: 'Applicant Full Name',
          dataIndex: 'model'
      },
      {
          key: '4',
          title: 'Application Status ',
          dataIndex: 'item'
      }, {
          key: '5',
          title: 'Attachments',
          dataIndex: 'total'
      }
      
      ,
   {
          key: '13',
          title: 'Downloads',
          dataIndex: 'actions',
          render: (_ : any, record:any) => (
                   <div>
                    <Button
                    icon = { <DownloadOutlined />}
                    style={{marginRight:5, color: "green"}}
                    // onClick={ ()=> setEditOpen(true)}
                    title="Process"
                   >Attachements</Button>
                   </div>
          )
      }
  ]

    return (
        <div>
           
     <Space style={{display: "flex",flexDirection: "column"}}>

     <PageTitle> Applicants List</PageTitle>
      
     <div style={{marginBottom: 16}}>
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Send to Filtered
        </Button>
        <span style={{marginLeft: '10px'}}>
          {hasSelected ? `Selected ${selectedRowKeys.length} applicant(s)` : ''}
        </span>
      </div>   


     <Table
        columns={columns}
        dataSource={data}
        style={{minWidth: '110vh', marginBottom: '20vh',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}
        rowSelection={rowSelection}
        >

      </Table>
      
</Space>
     

        </div>
        
    )
}
  