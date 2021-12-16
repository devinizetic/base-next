export function isErrorParser(error: unknown): error is Error {
  return error instanceof Error;
}
