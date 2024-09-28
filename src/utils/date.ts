export const formatDuration = (s: number) => {
  return [
    parseInt(String(s / 60 / 60)),
    parseInt(String(s / 60)) % 60,
    parseInt(String(s % 60)),
  ]
    .join(":")
    .replace(/\b(\d)\b/g, "0$1");
};
