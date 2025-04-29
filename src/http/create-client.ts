interface CreateClientRequest {
  idEndereco: string
  tipoPessoa: string
  sexo: string
  dataNascimento: Date
  nomeCompleto: string
  cpf: string
  rg: string
  filiacao: string
  observacao?: string | null
  celular1: string
  celular2?: string | null
  telefone1?: string | null
  telefone2?: string | null
}

export async function createClientRequest({
  idEndereco,
  tipoPessoa,
  sexo,
  dataNascimento,
  nomeCompleto,
  cpf,
  rg,
  filiacao,
  observacao,
  celular1,
  celular2,
  telefone1,
  telefone2,
}: CreateClientRequest) {
  await fetch('http://localhost:3333/create-client', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      idEndereco,
      tipoPessoa,
      sexo,
      dataNascimento,
      nomeCompleto,
      cpf,
      rg,
      filiacao,
      observacao,
      celular1,
      celular2,
      telefone1,
      telefone2,
    }),
  })
}