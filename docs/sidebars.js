module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
    },
    { type: 'doc', id: 'getting-started' },
    { type: 'doc', id: 'styling' },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/react-flow-component-props',
        'api/react-flow-instance',
        'api/nodes',
        'api/edges',
        'api/helper-functions',
        'api/internal-state-actions',
        {
          type: 'category',
          label: 'Components',
          items: [
            'api/components/background',
            'api/components/minimap',
            'api/components/controls',
            'api/components/provider',
          ],
        },
      ],
    },
  ],
};
