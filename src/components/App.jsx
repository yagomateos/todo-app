import React from 'react'
import Header from './Header'
import MainSection from './MainSection'
import { reducer } from '../stores/reducer'
import { TodoProvider } from '../TodoProvider'

const initialState = {
  todos: [
    {
      text: 'TODO or NOT TODO?',
      completed: false,
      id: 'b967afe24b23'
    },
    {
      text: 'Me encanta esta web APP de Yago',
      completed: true,
      id: '43286487fhsdjasd'
    },
    {
      text: 'Hooooola!',
      completed: false,
      id: '54937fhajd'
    },
    {
      text: 'Muy buenas me puedes añadir',
      completed: true,
      id: '43242341aaaaa'
    },
    {
      text: 'WOW!',
      completed: true,
      id: 'b967afe24a13'
    }
  ],
  visibilityFilter: 'All'
}
const App = () => (
  <TodoProvider initialState={initialState} reducer={reducer}>
    <div>
      <Header />
      <MainSection />
    </div>
  </TodoProvider>
)

export default App
