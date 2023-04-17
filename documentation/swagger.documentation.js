export const swaggerDocument =
{
    "openapi": "3.0.2",
    "info": {
      "title": "Earth Wiki Api",
      "version": "1.0.0",
      "description": "",
      "contact": {
        "url": "https://github.com/Gui-Luz/earth-wiki"
      },
      "tags": [
        {
          "name": "Users",
          "description": "Endpoints related to users"
        },
        {
          "name": "Auth",
          "description": "Basic authorization endpoint"
        }
      ],
    },
    "servers": [
      {
        "url": "http://localhost:3000",
        "description": "Development server"
      }
    ],
    "paths": {
      "/auth": {
        "post": {
          "summary": "Authenticate a user using Basic Authentication",
          "tags": ["Auth"],
          "description": "This endpoint authenticates a user using Basic Authentication. The user must provide a valid username and password in the Authorization header.",
          "consumes": [
            "application/json"
          ],
          "produces": [
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "Authentication successful. Returns a token for subsequent API requests.",
              "schema": {
                "type": "object",
                "properties": {
                  "token": {
                    "type": "string"
                  }
                }
              }
            },
            "401": {
              "description": "Authentication failed. Invalid credentials.",
              "schema": {
                "type": "object",
                "properties": {
                  "message": {
                    "type": "string"
                  }
                }
              }
            }
          },
          "security": [
            {
              "BasicAuth": []
            }
          ],
        }
      },
      "/users": {
        "get": {
          "summary": "Get all users",
          "tags": ["Users"],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          "security": [
            {
              "BearerAuth": []
            }
          ],
        },
        "post": {
          "summary": "Create a new user",
          "tags": ["Users"],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "User created",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          },
        }
      },
      "/users/{id}": {
        "get": {
          "summary": "Get a user by ID",
          "tags": ["Users"],
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful response",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            },
            "404": {
              "description": "User not found"
            },
          },
          "security": [
            {
              "BearerAuth": []
            }
          ],
        },
        "put": {
          "summary": "Update a user",
          "tags": ["Users"],
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "User updated",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            },
            "404": {
              "description": "User not found"
            },
          },
          "security": [
            {
              "BearerAuth": []
            }
          ],
        },
        "delete": {
          "summary": "Delete a user",
          "tags": ["Users"],
          "parameters": [
            {
              "in": "path",
              "name": "id",
              "required": true,
              "schema": {
                "type": "integer"
              }
            }
          ],
          "responses": {
            "204": {
              "description": "User deleted"
            },
            "404": {
              "description": "User not found"
            }
          },
          "security": [
            {
              "BearerAuth": []
            }
          ],
        }
      }
    },
    "components": {
        "schemas": {
            "User": {
                "type": "object",
                "properties": {
                    "username": {
                      "type": "string",
                      "example": "jonesalbert.1985"
                    },
                    "email": {
                      "type": "string",
                      "example": "jonesalbert@earth.com"
                    },
                    "firstName": {
                        "type": "string",
                        "example": "Albert"
                    },
                    "lastName": {
                        "type": "string",
                        "example": "Jones"
                    },
                    "password": {
                      "type": "string",
                      "example": "albertjoneskey"
                  },
                }
            },
        },
        "securitySchemes": {
          "BasicAuth": {
            "type": "http",
            "scheme": "basic",
            "in": "header",
            "description": "Basic authorization"
          },
          "BearerAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",
            "description": "JWT Authorization header using the Bearer scheme. Example: 'Bearer {token}'"
          },
        }
    }
}