import ControlledForm from "./components/ControlledForm"
import UncontrolledForm from "./components/UncontrolledForm"
import PostsFetch from "./components/PostsFetch"
import "./index.css"

export default function App() {
  return (
    <div className="app">
      <h1>Task 40.1 — Controlled / Uncontrolled + Fetch</h1>

      <ControlledForm />
      <UncontrolledForm />
      <PostsFetch />
    </div>
  )
}