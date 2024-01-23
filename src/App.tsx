import { useState } from 'react'
import Header from './components/Header'
import goalsImg from './assets/goals.jpg'
import CourseGoalList from './components/CourseGoalList'

export type CourseGoal = {
  title: string
  description: string
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        title: 'Learn react + TS',
        description: 'Learn in depth',
        id: Math.random()
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your course goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  )
}