import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiPost } from '../services/api'

function CreateActionPage() {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('New')
  const [owner, setOwner] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    setError('')

    try {
      await apiPost('/actions', {
        title,
        status,
        owner
      })

      navigate('/')
    } catch (err) {
      setError('Failed to create action')
    }
  }

  return (
    <div>
      <h1>Create Action</h1>

      {error && <p>{error}</p>}

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

        <button type="submit">Save Action</button>
      </form>
    </div>
  )
}

export default CreateActionPage