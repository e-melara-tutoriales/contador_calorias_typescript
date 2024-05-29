import { useState, ChangeEvent } from "react";
import { categories } from "../data/categories";

import type { Activity } from "../types";

export default function Form() {
  const list = categories;

  const [activity, setActivity] = useState<Activity>({
    name: '',
    activity: 1,
    calories: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { id, value } = e.target;
    const isFieldNumber = ['activity', 'calories'].includes(id)
    setActivity({
      ...activity,
      [id]: isFieldNumber ? parseInt(value) : value,
    })
  }

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity">Categotia: </label>
        <select
          name="activity"
          id="activity"
          value={activity.activity}
          onChange={handleChange}
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        >
          {list.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name">Actividad: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={activity.name}
          onChange={handleChange}
          placeholder="Ej: Comida, Jugo de Naraja, etc."
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories">Calorias: </label>
        <input
          type="number"
          name="calories"
          id="calories"
          onChange={handleChange}
          value={activity.calories}
          placeholder="Calorias: ej: 300 a 500"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
        />
      </div>
      <button
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
      >
        {"Guardar Comida o Guardar Calorias"}
      </button>
    </form>
  );
}
