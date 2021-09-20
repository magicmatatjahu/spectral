export default function (targetVal) {
  if (targetVal.toLowerCase() !== targetVal) {
    return [
      {
        message: `${targetVal} must be lower-case`
      }
    ];
  }
}
