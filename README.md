# URL Shortener - Frontend

This is the frontend for a URL shortener application built with React.

## 🚀 Features
- Shorten long URLs instantly.
- Displays expiration date (7-day validity).
- Shows total click count for shortened URLs.
- Copy shortened URL with one click.
- Smooth animations using **Framer Motion**.

## 🛠️ Tech Stack
- React.js (Vite)
- Axios (for API requests)
- Framer Motion (for animations)
- CSS (or styled-components)

## 📂 Folder Structure
```
📦 src
 ┣ 📂 components
 ┃ ┣ 📜 InputForm.jsx  # Form component for URL input
 ┃ ┣ 📜 ShortenedUrl.jsx # Displays the shortened URL
 ┣ 📂 hooks
 ┃ ┣ 📜 useShortenUrl.js  # Custom hook for API interaction
 ┣ 📂 styles
 ┃ ┣ 📜 styles.css  # Main CSS file
 ┣ 📜 App.jsx  # Main component
 ┣ 📜 main.jsx  # React entry point
```

## 📦 Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/url-shortener-frontend.git
   cd url-shortener-frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your backend API URL:
   ```env
   REACT_APP_URL=http://localhost:5000
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔗 API Endpoints
This frontend interacts with a backend that provides these endpoints:
- **POST `/shorten`** → Creates a shortened URL.
- **GET `/:shortUrl`** → Redirects to the original URL.
- **GET `/stats/:shortUrl`** → Fetches click statistics.

## ✅ Usage
1. Enter a URL in the input field and click "Shorten".
2. Copy the shortened link with one click.
3. View total clicks and expiration date.

## 🏗️ Future Enhancements
- User authentication for saved links.
- Custom short URL alias option.
- Dark mode support.

## 🤝 Contributing
Feel free to submit pull requests or open issues for enhancements!

## 📜 License
MIT License. See [LICENSE](LICENSE) for details.

