import { request, response } from "express"

const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API Ordem de Serviços',
        description: 'API para gerenciamento de usuários e produtos',
        version: '1.0.0'
    },

    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor local'
        },
        {
              url: ' https://api-produtos-theta.vercel.app',
            description: 'API Vercel'
        }
       
    ],

    tags: [
        { name: "Usuários", description: "Operações com usuários" },
        { name: "produtos", description: "Operações com produtos" },

    ],

    paths: {

        // ================= USUÁRIOS =================
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: "Listar usuários",
                responses: {
                    200: {
                        description: "Lista de usuários",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Usuarios" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Usuários"],
                summary: "Cadastrar usuário",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Cadastro_Usuario" }
                        }
                    }
                },
                responses: {
                    201: { description: "Usuário criado com sucesso" },
                    400: { description: "Dados inválidos" },
                    500: { description: "Erro no servidor" }
                }
            }
        },

        "/usuarios/{id_usuario}": {
            put: {
                tags: ["Usuários"],
                summary: "Atualizar usuário",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Usuario" }
                        }
                    }
                },
                responses: {
                    200: { description: "Usuário atualizado" },
                    404: { description: "Usuário não encontrado" }
                }
            },

            patch: {
                tags: ["Usuários"],
                summary: "Atualizar parcialmente usuário",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Parcial_Usuario" }
                        }
                    }
                },
                responses: {
                    200: { description: "Usuário atualizado parcialmente" }
                }
            },

            delete: {
                tags: ["Usuários"],
                summary: "Deletar usuário",
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                responses: {
                    200: { description: "Usuário deletado" }
                }
            }
        },
        "/login": {
            post: {
                tags: ["Usuários"],
                summary: "Realizar login",
                description: "Autentica um usuario e retorna seus dados",
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Resposta_Login" }
                        }
                    },
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Login_Usuario" }
                        }
                    }
                },
                responses: {
                    200: { description: "Login realizado com sucesso" }
                }
            },
        },

        // ================= produtos =================
        "/produtos": {
            get: {
                tags: ["produtos"],
                summary: "Listar produtos",
                responses: {
                    200: {
                        description: "Lista de produtos",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_produtos" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["produtos"],
                summary: "Cadastrar produto",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Cadastro_produto" }
                        }
                    }
                },
                responses: {
                    201: { description: "produto criado" }
                }
            }
        },

        "/produtos/{id_departamento}": {
            put: {
                tags: ["produtos"],
                summary: "Atualizar produto",
                parameters: [
                    {
                        name: "id_produto",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_produto" }
                        }
                    }
                },
                responses: {
                    200: { description: "produto atualizado" }
                }
            },

            patch: {
                tags: ["produtos"],
                summary: "Atualizar parcialmente produto",
                parameters: [
                    {
                        name: "id_produto",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Parcial_produto" }
                        }
                    }
                },
                responses: {
                    200: { description: "Atualizado parcialmente" }
                }
            },

            delete: {
                tags: ["produtos"],
                summary: "Deletar produto",
                parameters: [
                    {
                        name: "id_produto",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                responses: {
                    200: { description: "produto removido" }
                }
            }
        },

    },

    components: {
        schemas: {

            Lista_Usuarios: {
                type: "object",
                properties: {
                    id: { type: "integer", example: 1 },
                    nome: { type: "string", example: "João" },
                    email: { type: "string", example: "joao@email.com" }
                }
            },

            Cadastro_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string" },
                    email: { type: "string" },
                    senha: { type: "string" }
                }
            },

            Atualizacao_Usuario: {
                type: "object",
                required: ["nome", "email", "senha"],
                properties: {
                    nome: { type: "string" },
                    email: { type: "string" },
                    senha: { type: "string" }
                }
            },

            Atualizacao_Parcial_Usuario: {
                type: "object",
                properties: {
                    nome: { type: "string" },
                    email: { type: "string" },
                    senha: { type: "string" }
                }
            },

            Lista_produtos: {
                type: "object",
                properties: {
                    id: { type: "integer" },
                    nome: { type: "string" },
                    descricao: { type: "string" },
                    preco: { type: "string" },
                    linkImagem: { type: "string" },
                    linkProduto: { type: "string" },
                    frete: { type: "string" },
                }
            },

            Cadastro_produto: {
                type: "object",
                properties: {
                    nome: { type: "string" },
                    descricao: { type: "string" },
                    preco: { type: "string" },
                    id: { type: "string" },
                    linkImagem: { type: "string" },
                    linkProduto: { type: "string" },
                    frete: { type: "string" },
                }
            },

            Atualizacao_produto: {
                type: "object",
                nome: { type: "string" },
                descricao: { type: "string" },
                preco: { type: "string" },
                id: { type: "string" },
                linkImagem: { type: "string" },
                linkProduto: { type: "string" },
                frete: { type: "string" },
            }
        },

        Atualizacao_Parcial_produto: {
            type: "object",
            nome: { type: "string" },
            descricao: { type: "string" },
            preco: { type: "string" },
            id: { type: "string" },
            linkImagem: { type: "string" },
            linkProduto: { type: "string" },
            frete: { type: "string" },
        }
    },
    resposta_Login: {
        type: 'object',
        properties: {
            message: { type: 'string', example: 'login realizado com sucesso' },
            usuario: {
                type: 'object',
                properties: {
                    id_usuario: { type: "integer", example: 1 },
                    id_usuario: { type: "string", example: "ricardo2@email.com" },
                    id_usuario: { type: "string", example: "Senha123" }
                }
            }

        }
    },
    Login_Usuarios: {
        type: "object",
        required: "",
        properties: {
            id: { type: "integer", example: 1 },
            nome: { type: "string", example: "João" },
            email: { type: "string", example: "joao@email.com" },
            senha: { type: "string", example: "123" }
        }
    },
    Resposta_Login: {
        type: "object",
        required: "",
        properties: {
            message: { type: 'string', example: 'Login realizado' },
            usuario: {
                type: 'object',
                properties: {
                    id_usuario: { type: "integer", example: 1 },
                    email: { type: "string", example: "joao@email.com" },
                    senha: { type: "string", example: "123" }
                }
            }
        }
    },


}


export default documentacao


