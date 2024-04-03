import { FC } from 'react';
import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';

type CourseGoalListProps = {
    goals: CGoal[];
    onDelete: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDelete }) => {
    return (
        <ul>
            {goals.map(goal => <li key={goal.id}> <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}><p>{goal.description}</p></CourseGoal></li>)}

        </ul>
    )
}

export default CourseGoalList