# Diverse Landing Page

Este é um projeto de landing page para a Diverse. O projeto foi construído com [Next.js](https://nextjs.org) utilizando a abordagem App Router.

## Tecnologias Utilizadas

- **Next.js**: Framework React com renderização híbrida
- **TypeScript**: Tipagem estática para melhor qualidade de código
- **Tailwind CSS**: Framework CSS utilitário para estilização
- **Framer Motion**: Biblioteca para animações fluidas
- **React Hook Form**: Para gerenciamento de formulários
- **Axios**: Cliente HTTP baseado em promessa para o navegador e node.js

## Iniciando o Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

```
src/
├── app/               # Rotas e layouts (App Router)
├── components/        # Componentes reutilizáveis
├── hooks/             # Custom hooks (animações, formulários, etc.)
├── services/          # Serviços de API
├── styles/            # Estilos globais
└── utils/             # Funções utilitárias
```

## Configuração do Backend

### 1. Instale as dependências

```bash
npm install axios
```

### 2. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```
NEXT_PUBLIC_API_URL=https://sandbox.api.norbaas.com.br/
```

### 3. Integração Backend

Tentei deixar configurado para facilitar a integração com backend. A estrutura é a seguinte:

- `services/api.ts`: Configuração do Axios e funções para chamadas à API
- `actions/form.ts`: Server Action que processa o formulário e chama o serviço de API

Para adicionar endpoints ou modificar o comportamento, edite os arquivos:

```tsx
// src/services/api.ts - Adicione novos endpoints aqui
export const novoEndpoint = async (data) => {
  return api.post('/novo-endpoint', data);
};

// src/actions/form.ts - Modifique o processamento de formulário aqui
export async function submitFormData(data: FormData) {
  // ...seu código
}
```
