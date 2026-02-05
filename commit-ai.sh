#!/bin/bash

MODEL="tinyllama"

# Verifica se há arquivos staged
if git diff --staged --quiet; then
  echo "⚠️ Nenhuma alteração staged."
  echo "Use: git add ."
  exit 1
fi

echo
echo "📂 Arquivos que irão para o commit:"
echo "----------------------------------"
git status --short
echo "----------------------------------"
echo

DIFF_STAT=$(git diff --staged --stat)

PROMPT="Responda SOMENTE em português do Brasil.

Crie uma mensagem de commit seguindo o padrão Conventional Commits.
Formato OBRIGATÓRIO:

<tipo>: <mensagem curta>

- explicação do que foi feito
- outra explicação relevante
- impacto da mudança, se houver

Tipos permitidos:
feat, fix, refactor, docs, style, test, chore

Alterações:
$DIFF_STAT
"

echo "⏳ Gerando mensagem de commit..."
echo

COMMIT_MESSAGE=$(echo "$PROMPT" | ollama run $MODEL | head -n 10)

if [ -z "$COMMIT_MESSAGE" ]; then
  echo "❌ Não foi possível gerar a mensagem de commit."
  exit 1
fi

echo "🧠 Commit sugerido:"
echo "----------------------------------"
echo "$COMMIT_MESSAGE"
echo "----------------------------------"
echo

read -p "Deseja usar este commit? (y/n): " CONFIRM

if [[ "$CONFIRM" == "y" ]]; then
  git commit -m "$COMMIT_MESSAGE"
  echo "✅ Commit realizado com sucesso."
else
  echo "❌ Commit cancelado."
fi