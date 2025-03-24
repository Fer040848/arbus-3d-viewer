
import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import ChatMessage from '@/components/ChatMessage';
import ApiKeyInput from '@/components/ApiKeyInput';

export type Message = {
  role: 'user' | 'assistant';
  content: string;
  id: string;
};

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(
    localStorage.getItem('anthropic-api-key')
  );
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on first render
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    if (!apiKey) {
      toast.error('Por favor ingresa tu API key de Anthropic');
      return;
    }

    // Add user message
    const userMessage: Message = {
      role: 'user',
      content: input,
      id: Date.now().toString(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-opus-20240229',
          max_tokens: 1024,
          messages: [
            ...messages.map(({ role, content }) => ({ role, content })),
            { role: 'user', content: input }
          ]
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Error al comunicarse con Claude');
      }

      const data = await response.json();
      
      // Add assistant message
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.content[0].text,
        id: Date.now().toString(),
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Ocurrió un error al procesar tu mensaje');
      console.error('Error communicating with Claude:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const saveApiKey = (key: string) => {
    localStorage.setItem('anthropic-api-key', key);
    setApiKey(key);
    toast.success('API key guardada correctamente');
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden flex flex-col h-[70vh] relative">
      {!apiKey && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 bg-white/95 z-50 flex items-center justify-center"
        >
          <ApiKeyInput onSave={saveApiKey} />
        </motion.div>
      )}
      
      <div className="border-b px-4 py-3 bg-gray-50 flex items-center">
        <Bot className="h-5 w-5 text-blue-600 mr-2" />
        <h2 className="font-medium text-gray-800">Chat con Claude</h2>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-500">
            <Bot className="h-12 w-12 mb-3 text-gray-400" />
            <p className="text-center max-w-sm">
              ¡Hola! Soy Claude, un asistente de IA creado por Anthropic. ¿En qué puedo ayudarte hoy?
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </ScrollArea>
      
      <div className="border-t p-3 bg-gray-50">
        <div className="flex space-x-2">
          <Textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje aquí..."
            className="min-h-[60px] resize-none"
            disabled={isLoading || !apiKey}
          />
          <Button 
            onClick={handleSendMessage} 
            disabled={isLoading || !input.trim() || !apiKey}
            className="shrink-0"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Potenciado por Claude de Anthropic
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;
