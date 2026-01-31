import { useRef } from "react"

export default function UncontrolledForm() {
    const usernameRef = useRef(null)
    const agreeRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            username: usernameRef.current?.value || "",
            agree: Boolean(agreeRef.current?.checked),
        }

        console.log("Uncontrolled submit:", data)
        alert(`Uncontrolled submit: ${JSON.stringify(data)}`)
    }

    return (
        <div className="card">
            <h2>UncontrolledForm (useRef)</h2>

            <form onSubmit={handleSubmit}>
                <label className="field">
                    Username
                    <input ref={usernameRef} type="text" placeholder="Type your name..." />
                </label>

                <label className="field checkbox">
                    <input ref={agreeRef} type="checkbox" />
                    I agree
                </label>

                <button type="submit">Submit uncontrolled</button>
            </form>

            <p className="muted">
                React не контролює значення інпута, читаємо його через ref під час submit.
            </p>
        </div>
    )
}