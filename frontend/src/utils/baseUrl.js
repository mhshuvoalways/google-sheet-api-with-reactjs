export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://brainy-foal-threads.cyclic.app"
    : "http://localhost:5000";

export default baseUrl;
