import {AlertPayload, BottomMenuPayload} from '@store/types/modal';

export const SHOW_MODAL = '@modal/show';
export const REMOVE_MODAL = '@modal/remove';
export const CLOSE_MODAL = '@modal/close';

export const showModal = (payload: {id: string; customProps?: any}) => ({
  type: SHOW_MODAL,
  payload,
});

export const closeModal = (payload: {id?: string}) => ({
  type: CLOSE_MODAL,
  payload,
});

export const removeModal = (payload: {id?: string}) => ({
  type: REMOVE_MODAL,
  payload,
});

export const SHOW_ALERT = '@alert/show';
export const CLOSE_ALERT = '@alert/close';
export const DISMISS_ALERT = '@alert/dismiss';

export const showAlert = (payload: AlertPayload) => ({
  type: SHOW_ALERT,
  payload,
});

export const closeAlert = () => ({
  type: CLOSE_ALERT,
});

export const dismissAlert = () => ({
  type: DISMISS_ALERT,
});

export const SHOW_BOTTOM_MENU = '@bottom_menu/show';
export const CLOSE_BOTTOM_MENU = '@bottom_menu/close';

export const showBottomMenu = (payload: BottomMenuPayload) => ({
  type: SHOW_BOTTOM_MENU,
  payload,
});

export const closeBottomMenu = () => ({
  type: CLOSE_BOTTOM_MENU,
});