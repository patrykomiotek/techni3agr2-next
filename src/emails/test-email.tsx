// import { Button, Html, Section, Text } from '@react-email/components';
import * as React from 'react';

type Props = {
  content: string;
};

export default function TestEmail({ content = 'Lorem Ipsum' }: Props) {
  return (
    <div>
      <div>
        <p>{content}</p>
      </div>
      <button
        style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
      >
        Click me!
      </button>
    </div>
  );
}
