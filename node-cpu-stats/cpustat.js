const cpuStats = require('cpu-stats');

cpuStats(100, (error, result) => {
  if (error)
    return console.error('error', error);

  console.info(result[0].cpu);
});
