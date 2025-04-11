import { useState } from 'react';

export default function Form({ initialValues, onSubmit }) {
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }} className="space-y-4">
      <input type="text" name="title" placeholder="Title"
        className="w-full border p-2 rounded" value={form.title}
        onChange={handleChange} required />
      <textarea name="content" placeholder="Content"
        className="w-full border p-2 rounded h-40" value={form.content}
        onChange={handleChange} required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
