import { type FC, type PropsWithChildren } from "react"

// interface CourseGoalProps { title: string, children: ReactNode };

type CourseGoalProps = PropsWithChildren<{
    title: string;
    onDelete: (id: number) => void;
    id: number;
}>;

const CourseGoal: FC<CourseGoalProps> = ({ title, children, onDelete, id }) => {

    return (
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}

export default CourseGoal