import type { Activity } from "../types";

export type ActivityActions = { 
  type: 'save-activity', payload: { newActivity: Activity },
} | {
  type: 'set-activeId', payload: { id: Activity['id'] }
}

export type ActivityState = {
  activities: Activity[];
  activityId?: Activity['id'];
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
    case 'set-activeId':
      return {
        ...state,
        activityId: action.payload.id
      }
    default:
      return state;
  }
} 