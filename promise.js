const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async(promiseOutput) => {
  return new Promise((resolve, reject) => {
    if (promiseOutput == 'marah') {
      const countMarah = (await Promise.all(promiseTheaterIXX, promiseTheaterVGC)).filter(hasil => 'marah')
      return resolve(countMarah);
    }
    else if (promiseOutput == 'tidak marah') {
      const countTidakMarah = (await Promise.all(promiseTheaterIXX, promiseTheaterVGC)).filter(hasil => 'tidak marah')
      return reject(countMarah);
    }
  });
}

module.exports = {
  promiseOutput,
};
