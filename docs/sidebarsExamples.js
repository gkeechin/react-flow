const examples = [
  'overview',
  'edges',
  'horizontal',
  'validation',
  'custom-node',
  'interaction',
  'provider',
  'stress',
  'hidden',
  'edge-types',
];

module.exports = {
  examples: examples.map((ex) => ({
    type: 'doc',
    id: ex,
  })),
};
