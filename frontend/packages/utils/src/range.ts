function range(size: number = 0, start: number = 0) {
  return Array.from({ length: size }).map((_, _i) => _i + start);
}
export default range;
