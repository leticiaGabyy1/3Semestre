const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API de Financeira',
        description: 'Documentação da API de Gerenciamento Financeiro',
        version: '1.0.0'
    },
    servers: [
        { url: 'http://localhost:3000', description: 'localhost' }
    ],
    tags: [
        { name: 'Usuários', description: 'Operações relacionadas aos usuários' },
        { name: "Categorias", description: "Operações relacionadas as categorias" },
        { name: "Subcategorias", description: "Operações relacionadas as subcategorias" },
        { name: "Transacoes", description: "Operações relacionadas as transacoes" }
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar todos os usuários",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Usuarios' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ['Usuários'],
                summary: 'Cadastrar novo usuário',
                description: "Recebe nome, email, senha para cadastrar novo usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Usuário cadastrado com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/usuarios/{id_usuario}": {
            put: {
                tags: ['Usuários'],
                summary: 'Atualizar todos os dados do usuário',
                description: 'Atualiza todos os dados de um usuário existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser atualizado",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Usuario" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Usuário atualizado com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ['Usuários'],
                summary: 'Remover Usuário',
                description: 'Remove usuário existente pelo ID',
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuário a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Usuário removido com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/login": {
            post: {
                tags: ['Autenticação'],
                summary: 'Realizar Login',
                description: "Autentica um usuário e retorna id e nome",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Login_Usuario"
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Login realizado com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Resposta_Login"
                                }
                            }
                        }
                    },
                    400: { description: "Email e senha são obrigatórios" },
                    401: { description: "Credenciais inválidas" },
                    500: { description: "Erro interno no servidor" }
                }
            }
        },

        "/categorias": {
            get: {
                tags: ["Categorias"],
                summary: "Listar todas as Categorias",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Categorias' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Categorias"],
                summary: "Cadastrar Categorias",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Categorias"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Categoria cadastrada com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/categorias/{id_categoria}": {
            put: {
                tags: ['Categorias'],
                summary: 'Atualizar todos os dados da Categoria',
                description: 'Atualiza todos os dados de uma Categoria existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_categoria",
                        in: "path",
                        required: true,
                        description: "ID da categoria a ser atualizada",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Categoria" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Categoria atualizada com sucesso!"
                    },
                    404: {
                        description: "Categoria não encontrada"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ['Categorias'],
                summary: 'Remover Categoria',
                description: 'Remove categoria existente pelo ID',
                parameters: [
                    {
                        name: "id_categoria",
                        in: "path",
                        required: true,
                        description: "ID da categoria a ser removida",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Categoria removida com sucesso!"
                    },
                    404: {
                        description: "Categoria não encontrada"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/subcategorias": {
            get: {
                tags: ["Subcategorias"],
                summary: "Listar todas as subcategorias",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_SubCategorias' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Subcategorias"],
                summary: "Cadastrar Subcategorias",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_SubCategorias"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Subcategoria cadastrada com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/subcategorias/{id_subcategoria}": {
            put: {
                tags: ['Subcategorias'],
                summary: 'Atualizar todos os dados da Subcategoria',
                description: 'Atualiza todos os dados de uma Subcategoria existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da Subcategoria a ser atualizada",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_SubCategorias" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Subcategoria atualizada com sucesso!"
                    },
                    404: {
                        description: "Subcategoria não encontrada"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ['Subcategorias'],
                summary: 'Remover Subcategoria',
                description: 'Remove subcategoria existente pelo ID',
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da subcategoria a ser removida",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Subcategoria removida com sucesso!"
                    },
                    404: {
                        description: "Subcategoria não encontrada"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/transacoes": {
            get: {
                tags: ["Transacoes"],
                summary: "Listar todas as transações",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                }
                            }
                        }
                    }
                }
            },
            /** POST ADICIONADO AQUI **/
            post: {
                tags: ["Transacoes"],
                summary: "Cadastrar nova Transação",
                description: "Cadastra uma nova transação financeira",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_Transacoes"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Transação cadastrada com sucesso!"
                    },
                    400: {
                        description: "Dados inválidos"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/transacoes/tipo/{tipo}": {
            get: {
                tags: ["Transacoes"],
                summary: "Listar transações por tipo (Entrada/Saída)",
                parameters: [
                    {
                        name: "tipo",
                        in: "path",
                        required: true,
                        description: "Tipo da transação (E = Entrada / S = Saída)",
                        schema: { type: "string", enum: ["E", "S"], example: "S" }
                    }
                ],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                }
                            }
                        }
                    }
                }
            }
        },

        "/transacoes/categorias/{categoria}": {
            get: {
                tags: ["Transacoes"],
                summary: "Listar transações por categoria",
                parameters: [
                    {
                        name: "categoria",
                        in: "path",
                        required: true,
                        description: "Nome da categoria",
                        schema: { type: "string", example: "Alimento" }
                    }
                ],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                }
                            }
                        }
                    }
                }
            }
        },

        "/transacoes/subcategoria/{subcategoria}": {
            get: {
                tags: ["Transacoes"],
                summary: "Listar transações por subcategoria",
                parameters: [
                    {
                        name: "subcategoria",
                        in: "path",
                        required: true,
                        description: "Nome da subcategoria",
                        schema: { type: "string", example: "Lacteos" }
                    }
                ],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                }
                            }
                        }
                    }
                }
            }
        },

        "/transacoes/{id_transacao}": {
            put: {
                tags: ['Transacoes'],
                summary: 'Atualizar todos os dados da Transação',
                description: 'Atualiza todos os dados de uma transação existente',
                parameters: [
                    {
                        name: "id_transacao",
                        in: "path",
                        required: true,
                        description: "ID da transação a ser atualizada",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizar_Transacoes" }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Transação atualizada com sucesso!"
                    },
                    404: {
                        description: "Transação não encontrada"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ['Transacoes'],
                summary: 'Remover Transação',
                description: 'Remove transação existente pelo ID',
                parameters: [
                    {
                        name: "id_transacao",
                        in: "path",
                        required: true,
                        description: "ID da transação a ser removida",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Transação removida com sucesso!"
                    },
                    404: {
                        description: "Transação não encontrada"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/transacoes/periodo": {
            get: {
                tags: ["Transacoes"],
                summary: "Listar transações por período",
                parameters: [
                    {
                        name: "inicio",
                        in: "query",
                        required: true,
                        description: "Data de início do período",
                        schema: { type: "string", example: "10/04/2026" }
                    },
                    {
                        name: "fim",
                        in: "query",
                        required: true,
                        description: "Data de fim do período",
                        schema: { type: "string", example: "13/04/2026" }
                    }
                ],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Transacoes' }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

   components: {
        schemas: {
            Listar_Usuarios: {
                type: 'object',
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "Leticia" },
                    email: { type: "string", example: "leticia1@email.com" },
                    tipo_acesso: { type: "string", example: "admin" }
                }
            },
            Cadastrar_Usuario: {
                type: 'object',
                properties: {
                    nome: { type: "string", example: "Leticia" },
                    email: { type: "string", example: "leticia1@email.com" },
                    senha: { type: "string", example: "Senha123" },
                    tipo_acesso: { type: "string", example: "admin" }
                }
            },
            Atualizar_Usuario: {
                type: 'object',
                required: ["nome", "email", "senha"],
                properties: {
                    nome: { type: "string", example: "luana" },
                    email: { type: "string", example: "luana@email.com" },
                    senha: { type: "string", example: "Senha123" },
                    tipo_acesso: { type: "string", example: "admin" }
                }
            },
            Login_Usuario: {
                type: 'object',
                properties: {
                    email: { type: "string", example: "leticia@email.com" },
                    senha: { type: "string", example: "Senha123" }
                }
            },
            Resposta_Login: {
                type: 'object',
                properties: {
                    message: { type: 'string', example: 'Login realizado com sucesso' },
                    usuario: {
                        type: 'object',
                        properties: {
                            id_usuario: { type: "integer", example: 1 },
                            nome: { type: "string", example: "Leticia" }
                        }
                    }
                }
            },
            Listar_Categorias: {
                type: 'object',
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "name" },
                    descricao: { type: "string", example: "name" },
                    cor: { type: "string", example: "#fff" },
                    icone: { type: "string", example: "icone" },
                    tipo: { type: "string", example: "E" }
                }
            },
            Cadastrar_Categorias: {
                type: 'object',
                properties: {
                    nome: { type: "string", example: "name" },
                    descricao: { type: "string", example: "name" },
                    cor: { type: "string", example: "#fff" },
                    icone: { type: "string", example: "icone" },
                    tipo: { type: "string", example: "E" }
                }
            },
            Atualizar_Categoria: {
                type: 'object',
                properties: {
                    nome: { type: "string", example: "name" },
                    descricao: { type: "string", example: "name" },
                    cor: { type: "string", example: "#fff" },
                    icone: { type: "string", example: "icone" },
                    tipo: { type: "string", example: "E" }
                }
            },
            Listar_SubCategorias: {
                type: 'object',
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "name" }
                }
            },
            Cadastrar_SubCategorias: {
                type: 'object',
                properties: {
                    nome: { type: "string", example: "name" },
                    id_categoria: {
                        type: "integer",
                        example: 1,
                        description: "ID da categoria pai"
                    }
                }
            },
            Atualizar_SubCategorias: {
                type: 'object',
                properties: {
                    nome: { type: "string", example: "name" },
                    id_categoria: { type: "integer", example: 1 }
                }
            },
            Listar_Transacoes: {
                type: 'object',
                properties: {
                    id_transacao: { type: "integer", example: 1 },
                    valor: { type: "number", example: 10.00 },
                    descricao: { type: "string", example: "consulta medica" },
                    data_resgistro: { type: "string", example: "10/04/2026" },
                    data_vencimento: { type: "string", example: "10/04/2026" },
                    data_pagamento: { type: "string", example: "10/04/2026" },
                    tipo: { type: "string", enum: ["E", "S"], example: "E" },
                    nome_categoria: { type: "string", example: "Saude" },
                    nome_subcategoria: { type: "string", example: "Consulta Medica" }
                }
            },
            Cadastrar_Transacoes: {
                type: 'object',
                properties: {
                    valor: { type: "number", example: 150.00 },
                    descricao: { type: "string", example: "Pagamento de conta" },
                    data_resgistro: { type: "string", example: "10/04/2026" },
                    data_vencimento: { type: "string", example: "15/04/2026" },
                    data_pagamento: { type: "string", example: "10/04/2026" },
                    tipo: { type: "string", enum: ["E", "S"], example: "S" },
                    id_categoria: { type: "integer", example: 3 },
                    id_subcategoria: { type: "integer", example: 7 }
                }
            },
            Atualizar_Transacoes: {
                type: 'object',
                properties: {
                    valor: { type: "number", example: 200.00 },
                    descricao: { type: "string", example: "consulta medica" },
                    data_resgistro: { type: "string", example: "10/04/2026" },
                    data_vencimento: { type: "string", example: "10/04/2026" },
                    data_pagamento: { type: "string", example: "10/04/2026" },
                    tipo: { type: "string", enum: ["E", "S"], example: "E" },
                    nome_categoria: { type: "string", example: "Saude" },
                    nome_subcategoria: { type: "string", example: "Consulta Medica" }
                }
            }

        }
    }
}

export default documentacao