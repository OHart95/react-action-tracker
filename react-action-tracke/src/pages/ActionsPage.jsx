import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiDelete, apiGet } from '../services/api'

function ActionsPage() {
  const [actions, setActions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadActions() {
      try {
        const data = await apiGet('/actions')
        setActions(data)
      } catch (err) {
        setError('Failed to load actions')
      } finally {
        setLoading(false)
      }
    }

    loadActions()
  }, [])

  async function handleDelete(id) {
    try {
      await apiDelete(`/actions/${id}`)
      setActions(prevActions => prevActions.filter(action => action.id !== id))
    } catch (err) {
      setError('Failed to delete action')
    }
  }

  if (loading) {
    return <p>Loading actions...</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <div>
      <h1>Actions</h1>

      {actions.length === 0 ? (
        <p>No actions found.</p>
      ) : (
        actions.map(action => (
          <div
            key={action.id}
            style={{ border: '1px solid #ccc', padding: '12px', marginBottom: '12px' }}
          >
            <h3>
              <Link to={`/actions/${action.id}`}>{action.title}</Link>
            </h3>
            <p>Status: {action.status}</p>
            <p>Owner: {action.owner}</p>

            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <Link to={`/actions/${action.id}/edit`}>Edit</Link>
              <button onClick={() => handleDelete(action.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default ActionsPage