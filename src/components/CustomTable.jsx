import { Table } from 'antd'

const columuns = [
    {
        title:"ID",
        dataIndex:"key"
    },
    {
        title:"Name",
        dataIndex:"name"
    },
    {
        title:"Surname",
        dataIndex:"surname"
    },
    {
        title:"Age",
        dataIndex:"age"
    },
    {
        title:"Action",
        dataIndex:"action"
    },
]

function CustomTable({data}) {
  return (
    <Table columns={columuns} dataSource={data}/>
  )
}

export default CustomTable