export const isValid = (expData: Date, valid: number): boolean => {
  const currDate = new Date();

  var diff = (currDate.getTime() - expData.getTime()) / 1000;
  diff /= 60 * 60;

  var diffHours = Math.abs(Math.floor(diff));

  return diffHours < valid;
};
