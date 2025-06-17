export type TErrorSources = {
  path: string;
  message: string;
}[];

export const USER_ROLE = {
  admin: "admin",
  user: "user",
} as const;

export type TUserRole = keyof typeof USER_ROLE;
