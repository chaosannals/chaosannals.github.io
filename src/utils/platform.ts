export function isMd(): boolean {
  const r =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  console.log("isMd", r, navigator.userAgent);
  return r;
}
