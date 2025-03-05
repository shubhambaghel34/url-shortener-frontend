import React, { useState } from "react";
import useShortenUrl from "../hooks/useShortenUrl";
import "../style.css";
import { motion } from "framer-motion";
const InputForm = () => {
  const [url, setUrl] = useState("");
  const {
    shortUrl,
    expiresAt,
    clicks,
    copied,
    loading,
    error,
    shortenUrl,
    copyToClipboard,
  } = useShortenUrl();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      shortenUrl(url);
    }
  };

  return (
    <div className="container">
    <h2 className="title">Paste the URL to be shortened</h2>
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="input"
      />
      <button type="submit" className="button" disabled={loading}>
        {loading ? "Shortening..." : "Shorten"}
      </button>
    </form>
  
    {shortUrl && (
      <motion.div 
        className="shortened-url"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} 
      >
        <p className="text-green-600 font-semibold">Shortened URL:</p>
        <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          {shortUrl}
        </a>
  
        {expiresAt && (
          <p className="text-gray-600 text-sm mt-1">
            🔔 This link will expire on <strong>{new Date(expiresAt).toLocaleDateString()}</strong>.
          </p>
        )}
  
        <p className="text-gray-700 font-medium mt-2">
          🔢 Total Clicks: <strong>{clicks}</strong>
        </p>
  
        <p className="text-red-600 font-bold">
          🔔 This link will remain active for 7 days.
        </p>
  
        <motion.button
          onClick={copyToClipboard}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`px-3 py-1 rounded-md ${copied ? "bg-green-500 text-white" : "bg-gray-300 text-black"}`}
        >
          {copied ? "Copied!" : "Copy"}
        </motion.button>
      </motion.div> 
    )}
  
    {error && (
      <motion.p 
        className="error"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {error}
      </motion.p>
    )}
  </div>
  );
};

export default InputForm;
