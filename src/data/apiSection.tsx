import NodeJsIcon from "@/components/icons/NodeJs";
import PythonIcon from "@/components/icons/Python";
import { CreditCard, Database, Lock } from "lucide-react";

export const codeExamples = {
  node: `// Criar um Pix com axios (Node.js)
const axios = require('axios');

const response = await axios.post('https://api.diverse.com.vc/pix', {
  valor: 100.00,
  chave: 'email@cliente.com',
  descricao: 'Pagamento de serviço'
}, {
  headers: {
    'Authorization': 'Bearer SEU_TOKEN_AQUI'
  }
});

console.log(response.data);`,
  python: `# Criar um Pix com requests (Python)
import requests

headers = {
    "Authorization": "Bearer SEU_TOKEN_AQUI"
}
payload = {
    "valor": 100.00,
    "chave": "email@cliente.com",
    "descricao": "Pagamento de serviço"
}
response = requests.post("https://api.diverse.com.vc/pix", json=payload, headers=headers)
print(response.json())`,
  curl: `# Criar um Pix com cURL
curl -X POST https://api.diverse.com.vc/pix \\
  -H "Authorization: Bearer SEU_TOKEN_AQUI" \\
  -H "Content-Type: application/json" \\
  -d '{
    "valor": 100.00,
    "chave": "email@cliente.com",
    "descricao": "Pagamento de serviço"
  }'`
};

export const languages = [
  {
    id: 'node',
    label: 'Node.js',
    icon: <NodeJsIcon width={"32px"} />
  },
  {
    id: 'python',
    label: 'Python',
    icon: <PythonIcon width={"32px"} />
  },
];

export const apiBenefits = [
  {
    id: 'pagamentos',
    title: 'Pagamentos Automatizados',
    desc: 'Integre Pix e boletos diretamente no seu sistema.',
    icon: <CreditCard className="w-6 h-6 text-diverse-pink" />
  },
  {
    id: 'gestao',
    title: 'Gestão em Tempo Real',
    desc: 'Acesse saldos e relatórios financeiros via API.',
    icon: <Database className="w-6 h-6 text-diverse-yellow" />
  },
  {
    id: 'seguranca',
    title: 'Segurança Bancária',
    desc: 'Autenticação OAuth 2.0 e criptografia ponta a ponta.',
    icon: <Lock className="w-6 h-6 text-diverse-black" />
  },
];
