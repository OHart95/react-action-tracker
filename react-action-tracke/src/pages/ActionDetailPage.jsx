import { useParams } from 'react-router-dom'

function ActionDetailPage() {
  const { id } = useParams()

  return (
    <div>
      <h1>Action Detail</h1>
      <p>ID: {id}</p>
    </div>
  )
}

export default ActionDetailPage