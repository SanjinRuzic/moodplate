const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080'

export async function apiFetch(path, opts = {}) {
  const url = `${API_BASE}${path}`
  const headers = opts.headers || {}
  const fetchOpts = { ...opts, headers }
  if (opts.body && !(opts.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json'
    fetchOpts.body = JSON.stringify(opts.body)
  }
  // Only include credentials if explicitly requested via opts.credentials
  if (opts.credentials) fetchOpts.credentials = opts.credentials

  const res = await fetch(url, fetchOpts)
  const text = await res.text()
  let parsed
  try { parsed = JSON.parse(text) } catch { parsed = text }
  if (!res.ok) {
    const err = new Error(parsed && parsed.message ? parsed.message : `Request failed: ${res.status}`)
    err.status = res.status
    err.body = parsed
    throw err
  }
  return parsed
}

export default { apiFetch }

