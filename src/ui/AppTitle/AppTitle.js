import React from 'react';

export const AppTitle = (props) => {
  const { tag, text } = props;

  return React.createElement(
    tag,
    {
      role: tag,
    },
    text
  );
};
