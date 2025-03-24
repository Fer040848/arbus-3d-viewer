
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ApiKeyInputProps {
  onSave: (apiKey: string) => void;
}

const ApiKeyInput = ({ onSave }: ApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onSave(apiKey.trim());
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Configurar API Key</h2>
      <p className="text-gray-600 mb-6">
        Para usar este chat, necesitas una API key de Anthropic. Puedes obtener una en{' '}
        <a 
          href="https://console.anthropic.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          console.anthropic.com
        </a>.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="apiKey">API Key de Anthropic</Label>
          <Input
            id="apiKey"
            type="password"
            placeholder="sk-ant-api03-..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full"
          />
        </div>
        
        <Button type="submit" className="w-full" disabled={!apiKey.trim()}>
          Guardar API Key
        </Button>
        
        <p className="text-xs text-gray-500 mt-2">
          Tu API key se guardará localmente en tu navegador y no será compartida con ningún servidor.
        </p>
      </form>
    </div>
  );
};

export default ApiKeyInput;
