interface CreateLogin {
  nomeUsuario: string
  senha: string
}

export async function createLogin({ nomeUsuario, senha }: CreateLogin) {
  const response = await fetch('http://localhost:3333/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nomeUsuario,
      senha
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Erro ao fazer login')
  }

  return response.json()
}
