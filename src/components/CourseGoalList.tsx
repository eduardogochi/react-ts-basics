import CourseGoal from './CourseGoal'
import { type CourseGoal as CGoal } from '../App'
import InfoBox from './InfoBox'
import { ReactNode } from 'react'

type CourseGoalListprops = {
    goals: CGoal[]
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListprops) {

    if (goals.length === 0) {
        return <InfoBox mode='hint'>You have no goals yet. Start adding some!</InfoBox>
    }

    let warningBox: ReactNode


    if (goals.length >= 4) {
        warningBox = <InfoBox mode='warning' severity='medium'>You have a lot of goals</InfoBox>
    }

    return (
        <>
            {warningBox}
            <ul>
                {goals.map(goal => <li key={goal.id}>
                    <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                        <p>{goal.description}</p>
                    </CourseGoal>

                </li>)}
            </ul>
        </>
    )
}