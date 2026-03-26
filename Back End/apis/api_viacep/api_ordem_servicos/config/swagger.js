import { request, response } from "express"

const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API Ordem de Serviços',
        description: 'API para gerenciamento de usuários, departamentos e ordens de serviço',
        version: '1.0.0'
    },

    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor local'
        }
    ],

    tags: [
        { name: "Usuários", description: "Operações com usuários" },
        { name: "Departamentos", description: "Operações com departamentos" },
        { name: "Ordem de Serviço", description: "Operações com ordens de serviço" }
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

        // ================= DEPARTAMENTOS =================
        "/departamentos": {
            get: {
                tags: ["Departamentos"],
                summary: "Listar departamentos",
                responses: {
                    200: {
                        description: "Lista de departamentos",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Departamentos" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Departamentos"],
                summary: "Cadastrar departamento",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Cadastro_Departamento" }
                        }
                    }
                },
                responses: {
                    201: { description: "Departamento criado" }
                }
            }
        },

        "/departamentos/{id_departamento}": {
            put: {
                tags: ["Departamentos"],
                summary: "Atualizar departamento",
                parameters: [
                    {
                        name: "id_departamento",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Departamento" }
                        }
                    }
                },
                responses: {
                    200: { description: "Departamento atualizado" }
                }
            },

            patch: {
                tags: ["Departamentos"],
                summary: "Atualizar parcialmente departamento",
                parameters: [
                    {
                        name: "id_departamento",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Parcial_Departamento" }
                        }
                    }
                },
                responses: {
                    200: { description: "Atualizado parcialmente" }
                }
            },

            delete: {
                tags: ["Departamentos"],
                summary: "Deletar departamento",
                parameters: [
                    {
                        name: "id_departamento",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                responses: {
                    200: { description: "Departamento removido" }
                }
            }
        },

        // ================= ORDEM DE SERVIÇO =================
        "/ordem_servicos": {
            get: {
                tags: ["Ordem de Serviço"],
                summary: "Listar ordens de serviço",
                responses: {
                    200: {
                        description: "Lista de ordens",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: { $ref: "#/components/schemas/Lista_Ordem_Servico" }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                tags: ["Ordem de Serviço"],
                summary: "Cadastrar ordem de serviço",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Cadastro_Ordem_Servico" }
                        }
                    }
                },
                responses: {
                    201: { description: "Ordem criada" }
                }
            }
        },

        "/ordem_servicos/{id_ordem}": {
            put: {
                tags: ["Ordem de Serviço"],
                summary: "Atualizar ordem",
                parameters: [
                    {
                        name: "id_ordem",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Ordem_Servico" }
                        }
                    }
                },
                responses: {
                    200: { description: "Ordem atualizada" }
                }
            },

            patch: {
                tags: ["Ordem de Serviço"],
                summary: "Atualização parcial",
                parameters: [
                    {
                        name: "id_ordem",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: { $ref: "#/components/schemas/Atualizacao_Parcial_Ordem_Servico" }
                        }
                    }
                },
                responses: {
                    200: { description: "Atualizado parcialmente" }
                }
            },

            delete: {
                tags: ["Ordem de Serviço"],
                summary: "Deletar ordem",
                parameters: [
                    {
                        name: "id_ordem",
                        in: "path",
                        required: true,
                        schema: { type: "integer" }
                    }
                ],
                responses: {
                    200: { description: "Ordem deletada" }
                }
            }
        }
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

            Lista_Departamentos: {
                type: "object",
                properties: {
                    id: { type: "integer" },
                    nome: { type: "string" },
                    descricao: { type: "string" }
                }
            },

            Cadastro_Departamento: {
                type: "object",
                properties: {
                    nome: { type: "string" },
                    descricao: { type: "string" }
                }
            },

            Atualizacao_Departamento: {
                type: "object",
                properties: {
                    nome: { type: "string" },
                    descricao: { type: "string" }
                }
            },

            Atualizacao_Parcial_Departamento: {
                type: "object",
                properties: {
                    nome: { type: "string" },
                    descricao: { type: "string" }
                }
            },

            Lista_Ordem_Servico: {
                type: "object",
                properties: {
                    id: { type: "integer" },
                    nr_ordem: { type: "integer" },
                    titulo: { type: "string" },
                    descricao: { type: "string" },
                    prioridade: { type: "string" },
                    status: { type: "string" },
                    data: {
                        type: "string",
                        format: "date"
                    }
                }
            },

            Cadastro_Ordem_Servico: {
                type: "object",
                properties: {
                    nr_ordem: { type: "integer" },
                    titulo: { type: "string" },
                    descricao: { type: "string" },
                    prioridade: { type: "string" },
                    status: { type: "string" },
                    data: {
                        type: "string",
                        format: "date"
                    }
                }
            },

            Atualizacao_Ordem_Servico: {
                type: "object",
                properties: {
                    nr_ordem: { type: "integer" },
                    titulo: { type: "string" },
                    descricao: { type: "string" },
                    prioridade: { type: "string" },
                    status: { type: "string" },
                    data: {
                        type: "string",
                        format: "date"
                    }
                }
            },

            Atualizacao_Parcial_Ordem_Servico: {
                type: "object",
                properties: {
                    nr_ordem: { type: "integer" },
                    titulo: { type: "string" },
                    descricao: { type: "string" },
                    prioridade: { type: "string" },
                    status: { type: "string" },
                    data: {
                        type: "string",
                        format: "date"
                    }
                }
            }
        }
    }
}

export default documentacao
