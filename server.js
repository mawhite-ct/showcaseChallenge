const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = 3000

// --- Static assets (built React app) ---
app.use(express.static(path.join(__dirname, 'dist')))

// --- Video streaming with range request support ---
app.get('/videos/:filename', (req, res) => {
  const filename = req.params.filename
  if (!/^[a-zA-Z0-9._-]+$/.test(filename)) {
    return res.status(400).send('Invalid filename')
  }

  const filePath = path.join(__dirname, 'persistent', 'videos', filename)
  if (!fs.existsSync(filePath)) {
    return res.status(404).send('Video not found')
  }

  const stat = fs.statSync(filePath)
  const fileSize = stat.size

  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, '').split('-')
    const start = parseInt(parts[0], 10)
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
    const chunkSize = end - start + 1

    const stream = fs.createReadStream(filePath, { start, end })
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize,
      'Content-Type': 'video/mp4',
    })
    stream.pipe(res)
  } else {
    res.writeHead(200, {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
      'Accept-Ranges': 'bytes',
    })
    fs.createReadStream(filePath).pipe(res)
  }
})

// --- File downloads ---
app.get('/downloads/:filename', (req, res) => {
  const filename = req.params.filename
  if (!/^[a-zA-Z0-9._-]+$/.test(filename)) {
    return res.status(400).send('Invalid filename')
  }

  const filePath = path.join(__dirname, 'persistent', 'downloads', filename)
  if (!fs.existsSync(filePath)) {
    return res.status(404).send('File not found')
  }

  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
  res.setHeader('Content-Type', 'application/octet-stream')
  fs.createReadStream(filePath).pipe(res)
})

// --- SPA catch-all ---
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
