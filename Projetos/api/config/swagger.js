const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API de Financeira',
        description: 'Documentação da API de Grenciamento Financeiro',
        version: '1.0.0'
    },
    servers: [
        { url: 'http://localhost:3000', description: 'localhost' }
    ],
    tags: [
        { name: 'Usuários', description: 'Operações relacionadas aos usuários' },
        { name: "Categorias", description: "Operações relacionadas as categorias" },
        { name: "transacoes", description: "Operações relacionadas as transacoes" },
        { name: "Subcategorias", description: "Operações relacionadas as subcategorias" }
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
                    201: {
                        description: "Usuário atualizado com sucesso!"
                    },
                    404: {
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Usuário não encontrado" }
                            }
                        }
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
                        description: "Usuário não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Usuário não encontrado" }
                            }
                        }
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
                description: "Autentica um usuario e retorna id e nome",
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
                    400: { description: "Email e senha são obrigatorios" },
                    401: { description: "Credenciais inválidas" },
                    500: {
                        description: "Erro interno no servidor"
                    }
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
                summary: 'Atualizar todos os dados do Categoria',
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
                    201: {
                        description: "Categoria atualizado com sucesso!"
                    },
                    404: {
                        description: "Categoria não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Categoria não encontrado" }
                            }
                        }
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
                        description: "ID do Categoria a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Categoria removido com sucesso!"
                    },
                    404: {
                        description: "Categoria não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Categoria não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/transacoes": {
            get: {
                tags: ["transacoes"],
                summary: "Listar todos os transações",
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
            post: {
                tags: ["transacoes"],
                summary: "Cadastrar transacoes",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_transacoes"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Transações cadastrada com sucesso!"
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },
        "/transacoes/{id_transacao}": {
            put: {
                tags: ['transacoes'],
                summary: 'Atualizar todos os dados de Transacoes',
                description: 'Atualiza todos os dados de uma Transacao existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_transacao",
                        in: "path",
                        required: true,
                        description: "ID da Transacao a ser atualizada",
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
                            schema: { $ref: "#/components/schemas/Atualizar_Transacao" }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Transação atualizado com sucesso!"
                    },
                    404: {
                        description: "Transação não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Transação não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ['transacoes'],
                summary: 'Remover Transações',
                description: 'Remove transação existente pelo ID',
                parameters: [
                    {
                        name: "id_transacao",
                        in: "path",
                        required: true,
                        description: "ID do Transação a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Transação removido com sucesso!"
                    },
                    404: {
                        description: "Transação não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "Transação não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/transacoes/tipo/{tipo}": {
            get: {
                tags: ["transacoes"],
                summary: "Listar todos os transações",
                parameters: [
                    {
                        name: "tipo",
                        in: "path",
                        required: true,
                        description: "Tipo transação (E = Entrada / S = saida",
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

        "/subcategorias": {
            get: {
                tags: ["Subcategorias"],
                summary: "Listar todos as subcategorias",
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso!",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: '#/components/schemas/Listar_Subcategoria' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Subcategorias"],
                summary: "Cadastrar subcategorias",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Cadastrar_subcategorias"
                            }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Subcategorias cadastrada com sucesso!"
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
                summary: 'Atualizar todos os dados de Subcategoria',
                description: 'Atualiza todos os dados de uma subcategoria existente, é necessário enviar todos os campos',
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da subcategoria a ser atualizada",
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
                            schema: { $ref: "#/components/schemas/Atualizar_Subcategoria" }
                        }
                    }
                },
                responses: {
                    201: {
                        description: "Subcategoria atualizada com sucesso!"
                    },
                    404: {
                        description: "Subcategoria não encontrada",
                        content: {
                            "application/json": {
                                example: { message: "Subcategorias não encontrada" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            },
            delete: {
                tags: ['Subcategorias'],
                summary: 'Remover subcategorias',
                description: 'Remove subcategoria existente pelo ID',
                parameters: [
                    {
                        name: "id_subcategoria",
                        in: "path",
                        required: true,
                        description: "ID da subcategoria a ser removido",
                        schema: {
                            type: 'integer',
                            example: 1
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Subcategoria removido com sucesso!"
                    },
                    404: {
                        description: "Subcategoria não encontrado",
                        content: {
                            "application/json": {
                                example: { message: "subcategoria não encontrado" }
                            }
                        }
                    },
                    500: {
                        description: "Erro interno no servidor"
                    }
                }
            }
        },

        "/transacoes/subcategorias/{subcategoria}": {
            get: {
                tags: ["transacoes"],
                summary: "Listar todos as subcategorias",
                parameters: [
                    {
                        name: "subcategoria",
                        in: "path",
                        required: true,
                        description: "subcategoria de transação (laticinios / confeitaria",
                        schema: { type: "string", example: "laticinios" }
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

        "/transacoes/categoria/{categoria}": {
            get: {
                tags: ["transacoes"],
                summary: "Listar todos os transações",
                parameters: [
                    {
                        name: "categoria",
                        in: "path",
                        required: true,
                        description: "Tipo transação (alimento / bebida",
                        schema: { type: "string", example: "bebida" }
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
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo@email.com" },
                    tipo_acesso: { type: "string", example: "admin" }
                }
            },
            Cadastrar_Usuario: {
                type: 'object',
                properties: {
                    nome: { type: "string", example: "Ricardo" },
                    email: { type: "string", example: "ricardo2@email.com" },
                    senha: { type: "string", example: "Senha123" },
                    tipo_acesso: { type: "string", example: "admin" }
                }
            },
            Atualizar_Usuario: {
                type: 'object',
                required: ["nome", "email", "senha"],
                properties: {
                    nome: { type: "string", example: "Nina" },
                    email: { type: "string", example: "nina@email.com" },
                    senha: { type: "string", example: "Senha123" },
                    tipo_acesso: { type: "string", example: "admin" }
                }
            },
            Login_Usuario: {
                type: 'object',
                properties: {
                    email: { type: "string", example: "ricardo2@email.com" },
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
                            nome: { type: "string", example: "Ricardo" }
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
            Listar_Transacoes: {
                type: 'object',
                properties: {
                    id_transacao: { type: "integer", example: 1 },
                    valor: { type: "number", example: 10.00 },
                    descricao: { type: "string", example: "consulta médica" },
                    data_registro: { type: "string", example: "2026/04/09" },
                    data_vencimento: { type: "string", example: "2026/04/10" },
                    data_pagamento: { type: "string", example: "2026/04/11" },
                    tipo: { type: "string", enum: ["E", "S"], example: "E" },
                    nome_categoria: { type: "string", example: "saúde" }
                }
            },
            Cadastrar_transacoes: {
                type: 'object',
                properties: {
                    valor: { type: "number", example: 10.00 },
                    descricao: { type: "string", example: "consulta médica" },
                    data_registro: { type: "string", example: "2026/04/09" },
                    data_vencimento: { type: "string", example: "2026/04/10" },
                    data_pagamento: { type: "string", example: "2026/04/11" },
                    tipo: { type: "string", enum: ["E", "S"], example: "E" },
                    nome_categoria: { type: "string", example: "saúde" }
                }
            },
            Atualizar_Transacao: {
                type: 'object',
                properties: {
                    valor: { type: "number", example: 10.00 },
                    descricao: { type: "string", example: "consulta médica" },
                    data_registro: { type: "string", example: "2026/04/09" },
                    data_vencimento: { type: "string", example: "2026/04/10" },
                    data_pagamento: { type: "string", example: "2026/04/11" },
                    tipo: { type: "string", enum: ["E", "S"], example: "E" },
                    nome_categoria: { type: "string", example: "saúde" }
                }
            },
            Listar_Subcategoria: {
                type: 'object',
                properties: {
                    id_subcategoria: { type: "integer", example: 1 },
                    ativo: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 }
                }
            },
            Cadastrar_subcategorias: {
                type: 'object',
                properties: {
                    ativo: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 }
                }
            },
            Atualizar_Subcategoria: {
                type: 'object',
                properties: {
                    ativo: { type: "boolean", example: true },
                    id_categoria: { type: "integer", example: 1 }
                }
            }
        }
    }
}

export default documentacao