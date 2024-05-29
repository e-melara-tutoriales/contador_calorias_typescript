import { useMemo } from "react";
import type { Activity } from "../types";

type ActivityListProp = {
  activities: Activity[];
};

export default function ActivityList({ activities }: ActivityListProp) {
  const labelActivity = useMemo(() => (activity: Activity['activity']) => {
    return activity === 1 ? 'Comida' : 'Actividad';
  }, []);

  return (
    <>
      <h2 className="text-4xl font-bold text-slate-600 text-center">
        Comidad y Actividades
      </h2>
      {
        activities.map((activity) => (
          <div key={activity.id} className="px-5 py-10 bg-white flex mt-5 justify-between">
            <div className="space-y-2 relative">
              <p
                className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.activity === 1 ? 'bg-lime-500' : 'bg-orange-500' } `}
              >
                {labelActivity(activity.activity)}
              </p>
              <p className="text-2xl font-bold pt-5">{activity.name}</p>
              <p className="font-black text-4xl text-lime-500">
                {activity.calories} {''} <span>Calorias</span>
              </p>
            </div>
            <div className=""></div>
          </div>
        ))
      }
    </>
  );
}
