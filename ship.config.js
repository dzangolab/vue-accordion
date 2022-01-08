module.exports = {
  publishCommand: ({ defaultCommand, tag }) =>
    `${defaultCommand} --access public --tag ${tag}`,
  shouldPrepare: ({releaseType}) => {
    if (releaseType === 'major' || releaseType === 'minor') {
      return true;
    }
  },
};
