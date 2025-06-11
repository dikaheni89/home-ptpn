import packageJson from "../../package.json";

export const APP_NAME = process.env.APP_NAME || "";
export const APP_DESCRIPTION = process.env.APP_DESCRIPTION || "";
export const APP_OWNER = process.env.APP_OWNER || "";
export const APP_OWNER_URL = process.env.APP_OWNER_URL;
export const DATABASE_APP_URL = process.env.DATABASE_APP_URL || "";
export const AUTH_SECRET = process.env.AUTH_SECRET || "";
export const APP_BASE_PATH =
  process.env.APP_BASE_PATH?.replace(/\/$/, "") || "";
export const APP_VERSION = packageJson.version;
export const PORT = process.env.PORT || 3000;
export const KODE_WILAYAH_PROVINSI = process.env.KODE_WILAYAH_PROVINSI || "";
export const URL_DASHBOAD = process.env.URL_DASHBOARD || "";
export const TOKEN_DASHBOARD = process.env.TOKEN_DASHBOARD || "";
export const URL_CCTV = process.env.URL_CCTV || "";
export const CUACA_PROVINSI = process.env.CUACA_PROVINSI || "";
export const TOKEN_SPLP = process.env.TOKEN_SPLP || "";
export const USERNAME_SPLP = process.env.USERNAME_SPLP || "";
export const PASSWORD_SPLP = process.env.PASSWORD_SPLP || "";
export const GRANT_TYPE_SPLP = process.env.GRANT_TYPE_SPLP || "";
export const AUTH_SPLP = process.env.AUTH_SPLP || "";
export const URL_TOKEN_SPLP = process.env.URL_TOKEN_SPLP || "";
