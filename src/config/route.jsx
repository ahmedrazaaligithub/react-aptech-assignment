import React from 'react'
import Container from '../components/container'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import QuizOne from '../pages/quizOne'
import QuizTwo from '../pages/quizTwo'
import PlanetsMap from '../pages/planet'
import FeedbackForm from '../pages/feedbackForm'
import TodoList from '../pages/todoList'
import LetterWords from '../pages/letterWords'
import Props from '../pages/props'

const Approute = () => {
  return (
    <Container>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-w-o-a" element={<QuizOne />} />
        <Route path="/quiz-w-a" element={<QuizTwo />} />
        <Route path="/planets" element={<PlanetsMap />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/letters&words" element={<LetterWords />} />
        <Route path="/props" element={<Props />} />

      </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default Approute
