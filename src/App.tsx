import { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const emailError =
    email && !email.includes('@') ? 'Неверный формат email' : undefined;

  return (
    <div
      style={{
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 320,
      }}
    >
      <h1>UI Kit</h1>

      <h2>Button</h2>
      <div style={{ display: 'flex', gap: 12 }}>
        <Button onClick={() => alert('Primary!')}>Primary</Button>
        <Button variant="secondary" onClick={() => alert('Secondary!')}>
          Secondary
        </Button>
        <Button size="lg" onClick={() => alert('Large!')}>
          Large
        </Button>
      </div>

      <h2>Input</h2>
      <Input
        id="name"
        label="Имя"
        placeholder="Введите имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        id="email"
        label="Email"
        placeholder="mail@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
      />
    </div>
  );
}