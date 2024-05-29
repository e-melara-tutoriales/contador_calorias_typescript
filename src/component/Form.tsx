import { v4 as uuidV4 } from "uuid";
import { useState, ChangeEvent, FormEvent, Dispatch } from "react";

import type { Activity } from "../types";
import { categories } from "../data/categories";
import { ActivityActions } from "../reducers/activity-reducer";

type FormProps = {
  dispatch: Dispatch<ActivityActions>;
};

export default function Form({ dispatch }: FormProps) {
  const list = categories;

  const INITIAL_STATE = {
    id: uuidV4(),
    name: "",
    activity: 1,
    calories: 0,
  };

  const [activity, setActivity] = useState<Activity>(INITIAL_STATE);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    const isFieldNumber = ["activity", "calories"].includes(id);
    setActivity({
      ...activity,
      [id]: isFieldNumber ? parseInt(value) : value,
    });
  };

  const isValidForm = () => {
    const { activity: actividad, calories, name } = activity;
    return !actividad || !calories || !name.trim();
  };

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "save-activity",
      payload: {
        newActivity: activity,
      },
    });
    setActivity({ ...INITIAL_STATE, id: uuidV4() });
  };

  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handlerSubmit}
    >
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
        disabled={isValidForm()}
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
      >
        {activity.activity === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
      </button>
    </form>
  );
}
