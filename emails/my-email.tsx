import { Button, Html, Section, Text } from '@react-email/components';
import * as React from 'react';

type Props = {
  content: string;
};

export default function Email({ content = 'Lorem Ipsum' }: Props) {
  return (
    <Html>
      <Section>
        <Text>{content}</Text>
      </Section>
      <Button
        href="https://example.com"
        style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
      >
        Click me!
      </Button>
    </Html>
  );
}
