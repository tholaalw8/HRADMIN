import { Table } from "antd"
import { useState} from "react"


export const HistoryTable = () => {
   

   



    const [data, setData] = useState([
        {
        dateTime: '23/33/33',
        action: 'checkout',
        qty: '20',
        user: 'Ahmed',
        issuedTo: 'Hameed',
        category: 'General Item',
        location: 'Fen Gudhan',
        item: 'Ts-001',
    },  {
        dateTime: '24/03/33',
        action: 'Check In',
        qty: '30',
        user: 'Ahmed',
        issuedTo: 'Wahid Hakeem',
        category: 'General',
        location: 'DJA Training Hall',
        item: 'Ts-001',
    }
    ])


    const columns = [
        {
            key: '1',
            title: 'Date Time',
            dataIndex: 'dateTime'
        },
        {
            key: '3',
            title: 'Item',
            dataIndex: 'item'
        },
        {
            key: '2',
            title: 'Action',
            dataIndex: 'action'
        },
        
        {
            key: '4',
            title: 'Quantity',
            dataIndex: 'qty'
        }, {
            key: '5',
            title: 'User',
            dataIndex: 'user'
        },
            {
                key:'8',
                title: 'Issued To',
                dataIndex: 'issuedTo'
            }
        , {
            key: '6',
            title: 'Category',
            dataIndex: 'category'
        } , {
            key: '7',
            title: 'Location',
            dataIndex: 'location'
        }
        , 
     
    ]

    return (
            
        

        <div>




        <Table
        columns={columns}
        dataSource={data}
        pagination ={false}
        
        
        >


        </Table>

        </div>
       


    )
}
