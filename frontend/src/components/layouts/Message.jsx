import React from 'react';

export default function Message({variant,
    childern}) {
  return <div className={`alert alert-$
    {variant}`}>(children)</div>;
}
