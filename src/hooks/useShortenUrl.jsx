import { useState } from "react";
import axios from "axios";

const useShortenUrl = () => {
  const [shortUrl, setShortUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expiresAt, setExpiresAt] = useState("");
  const [clicks, setClicks] = useState(0);
  const [copied, setCopied] = useState(false);
  const shortenUrl = async (originalUrl) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/shorten`, 
        { originalUrl },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true  
        }
      );

      if (!response) {
        throw new Error("Failed to shorten URL");
      }
     
      setShortUrl(`${process.env.REACT_APP_URL}/${response?.data?.shortUrl}`);
      setClicks(response?.data?.clicks);
      setExpiresAt(response?.data?.expiresAt);
      setCopied(false); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  const copyToClipboard = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl)
        .then(() => setCopied(true))
        .catch(() => setCopied(false));
    }
  };
  return { shortUrl, expiresAt, clicks, loading, error, shortenUrl,copyToClipboard  };
};

export default useShortenUrl;
