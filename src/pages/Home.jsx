import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import CustomTable from '../components/CustomTable'
import { useNavigate } from 'react-router-dom'

function Home() {
    const HTTP = import.meta.env.VITE_API
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    function  moreBtnClick(id){
        navigate(`/home/${id}`)
        queryClient.invalidateQueries(["singleStudent"])
    }

    function getAllStudents(){
        return axios.get(`${HTTP}/students`).then(res => (
            res.data.map((item, index) => {
                item.key = index + 1
                item.action = <div className='flex items-center space-x-5'>
                    <MoreOutlined onClick={() => moreBtnClick(item.id)} className='cursor-pointer'/>
                    <EditOutlined className='cursor-pointer'/>
                    <DeleteOutlined onClick={() => handleDelete(item.id)} className='cursor-pointer'/>
                </div>
                return item
            })
        ))
    }


    function deleteStudent(id) {
        return axios.delete(`${HTTP}/students/${id}`)
      }
    
      const deleteMutation = useMutation({
        mutationFn: deleteStudent,
        onSuccess: () => {
          queryClient.invalidateQueries(['students']) 
        }
      })
    
      function handleDelete(id) {
          deleteMutation.mutate(id)
      }
    


    const {data = []} = useQuery({
        queryKey:["students"],
        queryFn:getAllStudents
    })


  return (
    <div className='p-5 w-[70%] mx-auto'>
        <CustomTable data={data}/>
    </div>
  )
}

export default Home