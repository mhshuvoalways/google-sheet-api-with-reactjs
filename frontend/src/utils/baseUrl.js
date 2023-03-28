export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://fantastic-swimsuit-fox.cyclic.app"
    : "http://localhost:5000";

export default baseUrl;
