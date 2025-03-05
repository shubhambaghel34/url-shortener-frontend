import { useState } from "react";
import axios from "axios";

const useShortenUrl = () => {
  const [shortUrl, setShortUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { shortUrl, loading, error, shortenUrl };
};

export default useShortenUrl;
