## FAESP CONTROLE DAS MATERIAS DE TEOLOGIA

Sistema para controle das materias e conteudos de teologia, da Faesp Extensão Pinheiros. Será possivel realizar o cadastro de novos alunos, alterar os dados, e adicionar materias cursadas pelos alunos, para assim mantermos um controle total, das materias por aluno.

#### Materias cadastradas do Basico em Teologia
- Introdução a Bibliologia;
- Panorama do A. Testamento I;
- Panorama do A. Testamento II;
- Homiletica;
- Doutrina de Deus (Teontologia);
- Cristologia;
- Pneumatologia;
- Apologética (R. Comparados);
- Hermenêutica;
- Panorama do N. Testamento I;
- Panorama do N. Testamento II;
- Eclesiologia;
- Missiologia;
- Antropologia e Hamartiologia;
- Soteriologia;
- Escatologia;

#### Materias cadastradas do Medio em Teologia
- Geografia e Arqueologia Biblica;
- Angelologia;
- Educação Cristã;
- Teologia do Ministério;
- Principios de Liderança;
- Ética Cristão;
- Hístoria de Israel;
- Introdução a Teologia;
- História da Igreja;
- História do Pentecostalismo;

#### Tecnologias utilizadas
- Golang version ***gol1.22.1 windows/amd64***
- DynamoDB AWS
- SQS Queue AWS
- API Gateway
- IDE VSCode

#### Operações REST da aplicação

##### Para cadastrar um novo aluno
```
curl --request POST \
  --url http://localhost:8090/persons \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.4.5' \
  --data '{
  "Nome": "Mateus de Macedo Souza",
  "CPF": "123.456.789-00",
  "Email": "lucas.macedo-souza@live.com",
  "Telefone": "(11) 91234-5678",
  "Endereco": "Rua Padre Gonçalo Leite, 123",
  "Logradouro": "Bairro Paulo XI",
  "Numero": 123,
  "Curso": "Teologia Basico",
  "Materias": [
    "História da Igreja",
    "Teologia Sistemática",
		"Cristologia"
  ],
  "Notas": {
    "História da Igreja": 8.5,
    "Teologia Sistemática": 9.0,
		"Cristologia": 10
  }
}
'
```

##### Para consultar todos os alunos
```
curl --request GET \
  --url http://localhost:8090/ \
  --header 'User-Agent: insomnia/8.6.1'
```

##### Para consultar um aluno por nome
```
curl --request GET \
  --url http://localhost:8090/persons/Mateus%20de%20Macedo%20Souza \
  --header 'User-Agent: insomnia/8.6.1'
```

##### Para deletar um aluno
```
curl --request DELETE \
  --url http://localhost:8090/persons/Mateus%20de%20Macedo%20Souza \
  --header 'User-Agent: insomnia/8.6.1'
```

##### Para alterar informações do aluno
```
curl --request PATCH \
  --url http://localhost:8090/persons/Mateus%20de%20Macedo%20Souza \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.6.1' \
  --data '{
  "Nome": "Mateus de Macedo Souza",
  "CPF": "123.456.789-00",
  "Email": "mateus.macedo-souza@itau-unibanco.com.br",
  "Telefone": "(11) 91234-5678",
  "Endereco": "Rua Padre Gonçalo Leite, 123",
  "Logradouro": "Bairro Paulo XI",
  "Numero": 123,
  "Curso": "Teologia Basico",
  "Materias": [
    "História da Igreja",
    "Teologia Sistemática",
		"Cristologia"
  ],
  "Notas": {
    "História da Igreja": 8.5,
    "Teologia Sistemática": 9.0,
		"Cristologia": 10
  }
}
'
```

#### Arquitetura de solução
