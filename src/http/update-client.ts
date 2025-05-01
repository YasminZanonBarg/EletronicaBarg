interface UpdateClientRequest {
  id: string
  idEndereco?: string
  tipoPessoa?: string
  sexo?: string
  dataNascimento?: Date
  nomeCompleto?: string
  cpf?: string
  rg?: string
  filiacao?: string
  observacao?: string | null
  celular1?: string
  celular2?: string | null
  telefone1?: string | null
  telefone2?: string | null
}

export async function updateClientRequest({
  id,
  ...data
}: UpdateClientRequest) {
  await fetch(`http://localhost:3333/update-client/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}