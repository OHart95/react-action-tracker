const express = require('express')
const router = express.Router()

let actions = [
  { id: 1, title: 'Review fire door spec', status: 'New', owner: 'Ollie' },
  { id: 2, title: 'Update process map', status: 'In Progress', owner: 'Sarah' },
  { id: 3, title: 'Prepare monthly report', status: 'Completed', owner: 'James' }
]

// READ ALL
router.get('/', (req, res) => {
  res.json(actions)
})

// READ ONE
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const action = actions.find(a => a.id === id)

  if (!action) {
    return res.status(404).json({ message: 'Not found' })
  }

  res.json(action)
})

// CREATE
router.post('/', (req, res) => {
  const { title, status, owner } = req.body

  const newAction = {
    id: actions.length + 1,
    title,
    status,
    owner
  }

  actions.push(newAction)
  res.status(201).json(newAction)
})

// UPDATE
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const { title, status, owner } = req.body

  const action = actions.find(a => a.id === id)

  if (!action) {
    return res.status(404).json({ message: 'Not found' })
  }

  action.title = title ?? action.title
  action.status = status ?? action.status
  action.owner = owner ?? action.owner

  res.json(action)
})

// DELETE
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)

  const exists = actions.some(action => action.id === id)

  if (!exists) {
    return res.status(404).json({ message: 'Action not found' })
  }

  actions = actions.filter(action => action.id !== id)

  res.status(204).send()
})

module.exports = router