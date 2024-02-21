const testInDocker = (arr) => {
  const filter = arr.reduce((accum, currfile) => {
    const lastFile = currfile.split("/").pop();
    if (lastFile.match(/\.test.js/)) {
      accum.push(lastFile);
    }
    return accum;
  }, []);
  return `docker exec -t -e NODE_ENV=test -w /backend-app node-app npm run test:app ${filter.join(" ")}`;
};

module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "npm --prefix ../ run format",
    "npm run lint",
    testInDocker,
  ],
};
