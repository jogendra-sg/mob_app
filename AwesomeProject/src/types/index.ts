export interface User {
  email: string;
  token: string;
}

export interface NotificationPayload {
  type?: string;
  screen?: string;
  data?: any;
}

export type AuthStackParamList = {
  Login: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};
