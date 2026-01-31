import { useState } from "react"

export default function ControlledForm() {
    const [form, setForm] = useState({
        username: "",
        agree: false,
        role: "user",
    })

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Controlled submit:", form)
        alert(`Controlled submit: ${JSON.stringify(form)}`)
    }

    return (
        <div className="card">
            <h2>ControlledForm (useState)</h2>

            <form onSubmit={handleSubmit}>
                <label className="field">
                    Username
                    <input
                        name="username"
                        type="text"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Type your name..."
                    />
                </label>

                <label className="field">
                    Role
                    <select name="role" value={form.role} onChange={handleChange}>
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                        <option value="guest">guest</option>
                    </select>
                </label>

                <label className="field checkbox">
                    <input
                        name="agree"
                        type="checkbox"
                        checked={form.agree}
                        onChange={handleChange}
                    />
                    I agree
                </label>

                <button type="submit">Submit controlled</button>
            </form>

            <p className="muted">Live state: {JSON.stringify(form)}</p>
        </div>
    )
}