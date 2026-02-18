# 💼 Portfólio - Vinícius Pereira

> Portfólio profissional construído com tecnologias modernas do ecossistema React.

[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://www.vinniedev.com.br)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

🔗 **[Ver portfólio ao vivo](https://www.vinniedev.com.br)**

---

## 🎯 Sobre o Projeto

Portfólio pessoal desenvolvido para apresentar meus projetos, habilidades e trajetória como desenvolvedor Front-End. O foco foi criar uma experiência visual moderna e performática, aplicando conceitos de design hierárquico, micro-interações e otimizações de performance.

---

## ⚡ Performance

| Métrica | Score |
|---------|-------|
| **Performance** | 97/100 🟢 |
| **Accessibility** | 94/100 🟢 |
| **Best Practices** | 96/100 🟢 |
| **SEO** | 100/100 🟢 |

**Core Web Vitals:**
- LCP: 2.3s 🟢
- FCP: 1.9s 🟢
- CLS: 0.043 🟢
- TBT: 60ms 🟢

---

## 🛠️ Stack Tecnológica

### **Core**
| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **React** | 19.1.0 | Biblioteca principal para UI |
| **Vite** | 7.0.4 | Build tool e dev server |
| **Tailwind CSS** | 4.1.11 | Estilização com utility-first |

### **Funcionalidades**
| Biblioteca | Versão | Uso |
|------------|--------|-----|
| **EmailJS** | 4.4.1 | Formulário de contato sem backend |
| **Axios** | 1.13.4 | Requisições HTTP para GitHub API |
| **Lucide React** | 0.542.0 | Ícones modernos e otimizados |
| **React Icons** | 5.5.0 | Biblioteca complementar de ícones |
| **Styled Components** | 6.1.19 | Estilização do avatar hexagonal |

### **Qualidade de Código**
| Ferramenta | Versão | Uso |
|------------|--------|-----|
| **ESLint** | 9.30.1 | Linting e padronização |
| **PostCSS** | 8.5.6 | Processamento de CSS |
| **Autoprefixer** | 10.4.21 | Compatibilidade cross-browser |

---

## ✨ Funcionalidades

- [x] **Hero Section** com typing animation
- [x] **Integração com GitHub API** para listar projetos dinamicamente
- [x] **Animações sequenciais** nos cards de projeto (typing + reveal de ícones)
- [x] **Formulário de contato** com EmailJS (sem backend)
- [x] **Design responsivo** mobile-first
- [x] **Avatar hexagonal** com styled-components
- [x] **Grid pattern e glow effects** em backgrounds
- [x] **Gradientes animados** com keyframes
- [x] **Fontes customizadas** (Space Grotesk + Inter)
- [x] **Variáveis de ambiente** (.env) para credenciais sensíveis

---

## 🎨 Design System

### **Paleta de Cores**
```css
--emerald-custom: #04ff8c  /* Cor primária */
--cyan-custom: #06b6d4     /* Acento secundário */
--purple-custom: #a855f7    /* Acento terciário */
```

### **Tipografia**
- **Títulos**: Space Grotesk (700, 900)
- **Corpo**: Inter (300, 400, 600, 700, 900)

### **Animações**
- `gradient-shift`: 8s ease infinite
- `typing-effect`: 20ms por caractere
- `reveal`: 150ms delay entre ícones

---

## 📂 Estrutura do Projeto

```
src/
├── assets/
│   └── images/           → Imagens estáticas
├── components/
│   ├── common/
│   │   ├── ButtonCta.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── StackComponent.jsx
│   ├── Projects/
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectItem.jsx
│   │   ├── ProjectImage.jsx
│   │   ├── ProjectTechStack.jsx
│   │   └── ProjectLinks.jsx
│   ├── sections/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Header/
│   │   └── Hero/
│   └── ViniciusAvatar/
│       └── Vinicius.jsx
├── data/
│   └── TechSkills.jsx    → Dados das tecnologias
├── hooks/
│   ├── useProjects.js    → Busca projetos do GitHub
│   └── useTypingAnimation.js → Animação de digitação
├── services/
│   └── githubService.js  → Axios config para GitHub API
├── utils/
│   └── formatters.js     → Funções utilitárias
└── App.jsx
```

---

## 🚀 Como Executar Localmente

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/ViniciusGCP94/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
npm install
```

### **Configuração**
Crie um arquivo `.env` na raiz do projeto:
```bash
# GitHub API (opcional - para filtrar repositórios)
VITE_GITHUB_TOKEN=seu_token_aqui

# EmailJS (obrigatório para formulário de contato)
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

### **Executar**
```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

---

## 🎯 Decisões Técnicas

### **Por que React 19?**
Versão mais recente com melhorias de performance e novos hooks. Preparado para o futuro do React.

### **Por que Vite 7?**
- Build até 10x mais rápido que Webpack
- Hot Module Replacement instantâneo
- Configuração mínima

### **Por que Tailwind 4?**
- Syntax moderna com `@theme` e `@layer`
- Performance otimizada (CSS sob demanda)
- Integração nativa com Vite

### **Por que EmailJS?**
Portfólio não precisa de backend completo. EmailJS resolve o problema do formulário de contato de forma elegante e gratuita.

### **Por que integração com GitHub API?**
Projetos se atualizam automaticamente. Cada vez que faço push de um projeto novo com a tag `portfolio`, ele aparece no site — zero manutenção manual.

---

## 🔐 Variáveis de Ambiente

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `VITE_GITHUB_TOKEN` | Não | Token pessoal do GitHub (aumenta rate limit) |
| `VITE_EMAILJS_SERVICE_ID` | Sim | ID do serviço EmailJS |
| `VITE_EMAILJS_TEMPLATE_ID` | Sim | ID do template de email |
| `VITE_EMAILJS_PUBLIC_KEY` | Sim | Chave pública do EmailJS |

> ⚠️ **NUNCA** commite o arquivo `.env` — ele está no `.gitignore`

---

## 📈 Melhorias Futuras

- [ ] Modo dark/light com toggle
- [ ] Testes unitários com Jest
- [ ] Animações com Framer Motion
- [ ] Blog integrado com Markdown
- [ ] Seção de experiências/timeline
- [ ] Gráfico de contribuições do GitHub

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar como inspiração!

---

## 👨‍💻 Autor

**Vinícius Pereira**

Desenvolvedor Front-End focado em React, apaixonado por criar interfaces que as pessoas realmente gostam de usar.

- [![Portfolio](https://img.shields.io/badge/Portfolio-vinniedev.com.br-04ff8c?style=for-the-badge)](https://www.vinniedev.com.br)
- [![GitHub](https://img.shields.io/badge/GitHub-ViniciusGCP94-100000?style=for-the-badge&logo=github)](https://github.com/ViniciusGCP94)
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-vinicius--gcp-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/vinicius-gcp)
- [![Email](https://img.shields.io/badge/Email-viniciusgcp94@gmail.com-D14836?style=for-the-badge&logo=gmail)](mailto:viniciusgcp94@gmail.com)

---

<div align="center">
  <sub>Construído com 💚 e muito ☕ usando React 19, Vite 7 e Tailwind 4</sub>
</div>