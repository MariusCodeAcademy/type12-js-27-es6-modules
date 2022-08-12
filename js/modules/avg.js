const calcAvg = (numArr) => {
  const avg = numArr.reduce((total, sk) => total + sk, 0) / numArr.length;
  console.log('avg ===', +avg.toFixed(2));
  return avg;
};

export default calcAvg;
