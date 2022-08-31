// ACTION TYPE SAVE_DATE_REMEMBER
export const SAVE_DATE_REMEMBER = 'SAVE_DATE_REMEMBER';

// ACTION CREATOR saveDateRemember
export const saveDateRemember = (value) => ({
  type: SAVE_DATE_REMEMBER,
  value,
});

// ACTION TYPE SAVE_LOCATION_REMEMBER
export const SAVE_LOCATION_REMEMBER = 'SAVE_LOCATION_REMEMBER';

// ACTION CREATOR saveLocationRemember
export const saveLocationRemember = (value) => ({
  type: SAVE_LOCATION_REMEMBER,
  value,
});

// ACTION TYPE SAVE_MEMBERS_REMEMBER
export const SAVE_MEMBERS_REMEMBER = 'SAVE_MEMBERS_REMEMBER';

// ACTION CREATOR saveMembersRemember
export const saveMembersRemember = (value) => ({
  type: SAVE_MEMBERS_REMEMBER,
  value,
});

// ACTION TYPE SAVE_NAME_REMEMBER
export const SAVE_NAME_REMEMBER = 'SAVE_NAME_REMEMBER';

// ACTION CREATOR saveNameRemember
export const saveNameRemember = (value) => ({
  type: SAVE_NAME_REMEMBER,
  value,
});

// ACTION TYPE POST_REMEMBER
export const POST_REMEMBER = 'POST_REMEMBER';

// ACTION CREATOR postRemember
export const postRemember = () => ({
  type: POST_REMEMBER,
});

// ACTION TYPE CLEAN_INPUT_FORM_REMEMBER
export const CLEAN_INPUT_FORM_REMEMBER = 'CLEAN_INPUT_FORM_REMEMBER';

// ACTION CREATOR cleanInputFormRemember
export const cleanInputFormRemember = () => ({
  type: CLEAN_INPUT_FORM_REMEMBER,
});
