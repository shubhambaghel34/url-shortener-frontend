import { useState, useEffect } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import ErrorMessage from './components/ErrorMessage'
import useShortenUrl from "./hooks/useShortenUrl";
import ShortenedUrl from './components/ShortenedUrl';
function App() {
  const { shortUrl, error, loading, shortenUrl } = useShortenUrl();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div >
      <h1 className="text-xl font-bold mb-4 text-center">🔗 URL Shortener</h1>

      {/* Input Form */}
      <InputForm shortenUrl={shortenUrl} loading={loading} />

      {/* Display Shortened URL if available */}
      {shortUrl && <ShortenedUrl shortUrl={shortUrl} />}

      {/* Display Error if any */}
      {error && <ErrorMessage error={error} />}
    </div>
  </div>
  )
}

export default App
