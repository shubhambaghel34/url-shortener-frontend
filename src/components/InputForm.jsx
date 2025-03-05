import React, { useState } from "react";
import useShortenUrl from "../hooks/useShortenUrl";

const InputForm = () => {
  const [url, setUrl] = useState("");
  const { shortUrl, loading, error, shortenUrl } = useShortenUrl();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      shortenUrl(url);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">URL Shortener</h2>
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 flex-1 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Shortening..." : "Shorten"}
        </button>
      </form>

      {shortUrl && (
        <p className="mt-4">
          Shortened URL:{" "}
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {shortUrl}
          </a>
        </p>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default InputForm;
