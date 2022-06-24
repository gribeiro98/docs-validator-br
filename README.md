# Docs Validador BR

Validações de diversos tipos de dados e documentos brasileiros.

## Features

- Validador CPF
- Validador CEP
- Validador E-mail

## Como instalar

Instalação via npm.

```sh
npm i docs-validador-br
```

## Como utilizar

### Validar CPF

```sh
import { isValidCpf } from 'docs-validator-br';
const  { isValidCpf } from 'dcos-validator-br';

const isValid = isValidCpf('01234567890');
const isValid = isValidCpf('012.345.678-90');
```

### Validar E-mail

```sh
import { isValidEmail } from 'docs-validator-br';
const  { isValidEmail } from 'dcos-validator-br';

const isValid = isValidEmail('teste@teste.com'); 
```

### Validar CEP

```sh
import { isValidCep } from 'docs-validator-br';
const  { isValidCep } from 'dcos-validator-br';

const isValid = isValidCep('86702210'); 
const isValid = isValidCep('86702-210'); 
const isValid = isValidCep('86.702-210'); 
```

## License

MIT

** Aproveite!!! **