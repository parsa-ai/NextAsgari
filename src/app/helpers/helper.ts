const toPersianNumber = (num) => {
  return new Intl.NumberFormat("fa-IR").format(num);
};
export { toPersianNumber };
