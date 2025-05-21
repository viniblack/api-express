# 📦 Calculo de Frete via CEP

Este projeto é uma aplicação full stack que permite consultar o valor do frete a partir de um CEP informado. Desenvolvido como parte de um desafio técnico, ele demonstra habilidades em desenvolvimento backend com Node.js e Express, além de frontend com React e TypeScript.

## 🚀 Funcionalidades

- **Consulta de Frete**: O usuário informa um CEP e recebe o valor do frete correspondente.
- **Validação de CEP**: O sistema valida o formato do CEP antes de processar a consulta.
- **Interface Intuitiva**: Frontend com campo de entrada estilizado em formato OTP para melhor usabilidade.

## 🛠️ Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para construção de APIs RESTful.
- **Axios**: Cliente HTTP para comunicação com APIs externas.

### Frontend

- **React 18 (Next.js)**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **React Hook Form**: Gerenciamento de formulários no React.
- **Zod**: Validação de esquemas de dados.
- **Axios**: Cliente HTTP para requisições ao backend.
- **Tailwind CSS**: Framework de estilos utilitários.
- **Shadcn/ui**: Componentes de interface reutilizáveis.
- **Sonner**: Biblioteca para notificações.

## 📁 Estrutura do Projeto

- `backend/`: Contém a API Express que consome a [API do melhor envio](https://docs.melhorenvio.com.br/reference/introducao-api-melhor-envio) que possibilita alterar a regra de cobrança do frete.
- `frontend/`: Aplicação Next.js que fornece a interface para o usuário.
  - `src/pages/index.tsx`: Página principal com o formulário de consulta de frete.
  - `src/components/ui/`: Componentes reutilizáveis de interface.
  - `src/lib/`: Funções auxiliares e definições de tipos.

## 🔧 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado na máquina.
- Gerenciador de pacotes npm ou yarn.

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/viniblack/api-express.git
   ```

2. Instale as dependências do backend:

   ```bash
   cd api-express/backend
   npm install
   ```

3. Inicie o servidor backend:

   ```bash
   npm run start
   ```

4. Em outro terminal, instale as dependências do frontend:

   ```bash
   cd ../frontend
   npm install
   ```

5. Inicie o servidor frontend:

   ```bash
   npm run dev
   ```

6. Acesse a aplicação no navegador:

   ```
   http://localhost:3000
   ```

## 📝 Desafio Técnico

O desafio envolvia construir uma solução robusta e escalável para cálculo de frete com base em dois CEPs. Optei por separar a aplicação em frontend e backend, garantindo manutenibilidade, e utilizei ferramentas modernas como TypeScript, validação com Zod e estilização com Tailwind CSS para uma boa experiência do usuário.

## 📬 Contato

Caso tenha interesse em discutir mais sobre este projeto ou oportunidades na área de desenvolvimento, estou à disposição!

- **Email**: [viniciusslsantana@gmail.com.com](mailto:viniciusslsantana@gmail.com)
- **LinkedIn**: [linkedin.com/in/viniblack](https://linkedin.com/in/viniblack)

> Este projeto demonstra minha capacidade de resolver desafios reais com boas práticas, organização de código e foco na experiência do usuário. Ideal para contextos que exigem soluções escaláveis e bem estruturadas.
