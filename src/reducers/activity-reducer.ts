import type { Activity } from "../types";

export type ActivityActions = { 
  type: 'save-activity', payload: { newActivity: Activity }
}

type ActivityState = {
  activities: Activity[];
}

export const initialState : ActivityState =  {
  activities: []
}

export const activityReducer = (
  state : ActivityState = initialState,
  action: ActivityActions
) => {
  switch (action.type) {
    case 'save-activity':
      return {
        activities: [...state.activities, action.payload.newActivity]
      }
    default:
      return state;
  }
} 