export const isValidName = (newName: string): boolean => {
  const regex = /^[a-zA-Z0-9\s]+$/;
  return regex.test(newName) && newName.length > 0;
};
