#!/bin/bash

MODEL="mistral:7b-instruct"

STATUS=$(git status --short)

if [ -z "$STATUS" ]; then
  echo "⚠️ Nada para commitar."
  exit 1
fi

PROMPT="Crie uma mensagem de commit no padrão Conventional Commits.
Responda SOMENTE em português brasileiro.
Use apenas UMA linha.
Tipos: feat, fix, refactor, docs, style, test, chore.

Arquivos alterados:
$STATUS"

COMMIT_MESSAGE=$(echo "$PROMPT" | ollama run $MODEL)

git commit -m "$COMMIT_MESSAGE"
