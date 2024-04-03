import goalsImage from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList';
import Header from "./components/Header";
import { useState } from "react";
import NewGoal from './components/NewGoal';

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoals: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary
      };
      return [...prevGoals, newGoals];
    });
  }

  function deleteGoalHandler(id: number) {
    setGoals((prevGoals) => prevGoals.filter(goal => goal.id !== id));
  }

  return <main>
    <Header image={{ src: goalsImage, alt: "A list of image." }} >
      <h1>Your Course Goals</h1>
    </Header>
    <NewGoal onAddGoal={addGoalHandler} />
    <CourseGoalList goals={goals} onDelete={deleteGoalHandler} />

  </main>;
}
