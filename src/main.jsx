import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './Final/HomePage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,

} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';

import TherapistPage from './Final/TherapistPage.jsx'
import Dream from './Final/Dream.jsx'
import Detox from './Final/Detox.jsx'
import Talk from './Final/Talk.jsx'
import AboutUs from './Final/AboutUs.jsx'
import TherapyPage from './Final/TherapyPage.jsx'
import Blogs from './pages/Blog/Blogs.jsx'
import Ques from './components/Ques/meQues.jsx'
import QuesFamily from './components/Ques/familyQues.jsx'
import QuesFriend from './components/Ques/friendQues.jsx'
import BookSession from './pages/BookSession/BookSession.jsx'

// Validate environment variables on startup
if (!import.meta.env.VITE_GEMINI_API_KEY_DREAM) {
  console.error('Missing VITE_GEMINI_API_KEY_DREAM environment variable');
}
if (!import.meta.env.VITE_GEMINI_API_KEY_QUIZ) {
  console.error('Missing VITE_GEMINI_API_KEY_QUIZ environment variable');
}

const router = createBrowserRouter(
  createRoutesFromElements(


    <Route path='/' element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="book-session" element={<BookSession />} />
      <Route path="therapists" element={<TherapistPage />} />
      <Route path="dream-analyzer" element={<Dream />} />
      <Route path="digital-detox" element={<Detox />} />
      <Route path="talk-with-ai" element={<Talk />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="audio-video-therapy" element={<TherapyPage />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="my-questions" element={<Ques />} />
      <Route path="family-questions" element={<QuesFamily />} />
      <Route path="friend-questions" element={<QuesFriend />} />
    </Route>


  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
)