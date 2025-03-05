import React from "react";


export default function ShortenedUrl({ shortUrl }) {
  if (!shortUrl) return null; 

  return (
    <div className="mt-4">
      <p className="text-green-600 font-semibold">Shortened URL:</p>
      <a 
        href={shortUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {shortUrl}
      </a>
    </div>
  );
}