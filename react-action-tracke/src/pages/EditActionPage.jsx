import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { apiGet, apiPut } from '../services/api'

function EditActionPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('New')
  const [owner, setOwner] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadAction() {
      try {
        const data = await apiGet(`/actions/${id}`)
        setTitle(data.title)
        setStatus(data.status)
        setOwner(data.owner)
      } catch (err) {
        setError('Failed to load action')
      } finally {
        setLoading(false)
      }
    }

    loadAction()
  }, [id])

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    try {
      await apiPut(`/actions/${id}`, {
        title,
        status,
        owner
      })

      navigate('/')
    } catch (err) {
      setError('Failed to update action')
    }
  }

  if (loading) {
    return <p>Loading action...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>Edit Action</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <label>Title</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label>Status</label>
          <br />
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label>Owner</label>
          <br />
          <input
            type="text"
            value={owner}
            onChange={(event) => setOwner(event.target.value)}
          />
        </div>

        <button type="submit">Update Action</button>
      </form>
    </div>
  )
}

export default EditActionPage