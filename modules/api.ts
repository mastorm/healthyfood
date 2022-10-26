export function agriApi(path: string) {
  const pathWithSlash = path.charAt(0) === "/" ? path : `/${path}`;
  return process.env["AGRIDATA_URL"] + pathWithSlash;
}
