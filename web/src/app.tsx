import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Sumamry } from './components/summary'
/*import { EmptyGoals } from './components/empty-goals'*/

export function App() {
  return (
    <Dialog>
      {/*<EmptyGoals />*/}
      <Sumamry />

      <CreateGoal />
    </Dialog>
  )
}
