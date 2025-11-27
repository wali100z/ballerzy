import { useState } from "react";

export default function BecomeMember() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("https://smuknu-vomg9.ondigitalocean.app/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    alert("Tak for din tilmelding!");
  }

  return (
    <div className="member-page">
      <h2>Bliv Medlem</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Navn" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
