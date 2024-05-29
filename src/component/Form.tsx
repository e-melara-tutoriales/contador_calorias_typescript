import { categories } from "../data/categories";

export default function Form() {
  const list = categories;

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category">Categotia: </label>
        <select
          name="category"
          id="category"
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
        <label htmlFor="activity">Actividad: </label>
        <input
          type="text"
          name="activity"
          id="activity"
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
