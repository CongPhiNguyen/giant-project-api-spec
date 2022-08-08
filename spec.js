var spec = {
  swagger: "2.0",
  info: {
    description: "API giúp thực hiện microservice album",
    version: "1.0",
    title: "Giantproject - Album",
  },
  host: "localhost:3000",
  basePath: "/api/",
  tags: [
    {
      name: "user",
      description: "Các API về user",
    },
    {
      name: "totp",
      description: "Các API về totp",
    },
  ],
  schemes: ["http"],
  paths: {
    "/exist-username": {
      post: {
        tags: ["user"],
        summary: "Kiểm tra username có tồn tại hay không",
        description: "",
        operationId: "hasUsername",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "username",
            required: "true",
            schema: {
              type: "string",
            },
            description: "username cần tìm kiếm",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                error: { type: "boolean", default: "false" },
                find: { type: "boolean", default: "true" },
              },
            },
          },
          404: {
            description: "status: 404 Not Found",
            schema: {
              properties: {
                error: { type: "boolean", default: "false" },
                find: { type: "boolean", default: "false" },
              },
            },
          },
          501: {
            description: "status: 501 Not Implemented",
            schema: {
              properties: {
                error: { type: "boolean", default: "true" },
                find: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/exist-email": {
      post: {
        tags: ["user"],
        summary: "Kiểm tra email có tồn tại hay không",
        description: "",
        operationId: "hasEmail",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "email",
            required: "true",
            schema: {
              type: "string",
            },
            description: "email cần tìm kiếm",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                error: { type: "boolean", default: "false" },
                find: { type: "boolean", default: "true" },
              },
            },
          },
          404: {
            description: "status: 404 Not Found",
            schema: {
              properties: {
                error: { type: "boolean", default: "false" },
                find: { type: "boolean", default: "false" },
              },
            },
          },
          501: {
            description: "status: 501 Not Implemented",
            schema: {
              properties: {
                error: { type: "boolean", default: "true" },
                find: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/check-login-info": {
      post: {
        tags: ["user"],
        summary: "Kiểm tra thông tin đăng nhập có đúng hay không",
        description: "",
        operationId: "checkLoginInfo",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "username",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Username của người dùng",
          },
          {
            in: "formData",
            name: "password",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Mật khẩu của người dùng",
          },
          {
            in: "formData",
            name: "otp",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Mã TOTP",
          },
          {
            in: "formData",
            name: "time",
            required: "true",
            schema: {
              type: "number",
            },
            description: "Thời gian gửi request",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                error: { type: "boolean", default: "false" },
                success: { type: "boolean", default: "true" },
                token: { type: "string" },
              },
            },
          },
          400: {
            description: "status: 400 Information not correct",
            schema: {
              properties: {
                error: { type: "boolean", default: "false" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          501: {
            description: "status: 501 Not Implemented",
            schema: {
              properties: {
                error: { type: "boolean", default: "true" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/sign-up": {
      post: {
        tags: ["user"],
        summary:
          "Kiểm tra thông tin đăng ký có đúng hay không và thực hiện đăng ký",
        description: "",
        operationId: "signUp",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "username",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Username của người dùng",
          },
          {
            in: "formData",
            name: "password",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Mật khẩu của người dùng",
          },
          {
            in: "formData",
            name: "email",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Email của người dùng",
          },
          {
            in: "formData",
            name: "otp",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Mã OTP",
          },
          {
            in: "formData",
            name: "salt",
            required: "true",
            schema: {
              type: "string",
            },
            description: "salt để hash của người dùng",
          },
          {
            in: "formData",
            name: "time",
            required: "true",
            schema: {
              type: "number",
            },
            description: "Thời gian lúc gửi request",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                error: { type: "boolean", default: "false" },
                success: { type: "boolean", default: "true" },
                token: { type: "string" },
              },
            },
          },
          400: {
            description: "status: 400 Information not correct",
            schema: {
              properties: {
                error: { type: "boolean", default: "false" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          501: {
            description: "status: 501 Not Implemented",
            schema: {
              properties: {
                error: { type: "boolean", default: "true" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/verify-user": {
      post: {
        tags: ["user"],
        summary: "Kiểm tra thông tin đăng nhập có đúng hay không",
        description: "",
        operationId: "verifyUser",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "token",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Token JWT",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                error: { type: "boolean", default: "false" },
                username: { type: "string" },
              },
            },
          },
          401: {
            description: "status: 401 Unauthorize token",
            schema: {
              properties: {
                error: { type: "boolean", default: "true" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/make-otp-login": {
      post: {
        tags: ["totp"],
        summary: "Tạo OTP để gửi về cho người dùng khi đăng nhập",
        description: "",
        operationId: "makeOTPLogin",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "username",
            required: "true",
            schema: {
              type: "string",
            },
            description: "username của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 400 Information not correct",
            schema: {
              properties: {
                error: { type: "string", default: "false" },
                success: { type: "boolean", default: "true" },
              },
            },
          },
          401: {
            description: "status: 401 Unauthorize token",
            schema: {
              properties: {
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/make-otp-sign-up": {
      post: {
        tags: ["totp"],
        summary: "Tạo OTP để gửi về cho người dùng khi đăng ký",
        description: "",
        operationId: "makeOTPSignUp",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "username",
            required: "true",
            schema: {
              type: "string",
            },
            description: "username của người dùng",
          },
          {
            in: "formData",
            name: "email",
            required: "true",
            schema: {
              type: "string",
            },
            description: "email của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 400 Information not correct",
            schema: {
              properties: {
                error: { type: "string", default: "false" },
                success: { type: "boolean", default: "true" },
              },
            },
          },
          401: {
            description: "status: 401 Unauthorize token",
            schema: {
              properties: {
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
  },
  securityDefinitions: {
    // Thông tin về api key sử dụng để thực hiện request
    api_key: {
      type: "apiKey", // Thuộc loại api key xác thực
      name: "api_key", // Tên trường chứa api key xác thực
      in: "header", // API key được để trong phần header của request
    },
  },
  returnValues: {
    notFindUsername: {
      properties: {
        error: { type: "boolean", default: "false" },
        find: { type: "boolean", default: "false" },
      },
    },
    findUsername: {
      properties: {
        error: { type: "boolean", default: "false" },
        find: { type: "boolean", default: "true" },
      },
    },
    adminJoinOTP: {
      properties: {
        id: {
          type: "integer",
        },
        username: {
          type: "string",
        },
        password: {
          type: "string",
        },
        passwords: {
          type: "string",
        },
      },
    },
  },
  definitions: {
    user: {
      type: "object",
      properties: {
        id: {
          type: "integer",
        },
        username: {
          type: "string",
        },
        email: {
          type: "string",
        },
        password: {
          type: "string",
        },
        salt: {
          type: "string",
        },
        ownImage: {
          type: "array",
          items: {
            type: "object",
            properties: {
              imageName: { type: "string" },
              imageURL: { type: "string" },
              imageOwnKey: { type: "string" },
            },
          },
        },
        receivedImage: {
          type: "array",
          items: {
            type: "object",
            properties: {
              imageName: { type: "string" },
              imageURL: { type: "string" },
              imageReceivedKey: { type: "string" },
            },
          },
        },
        ownAlbum: {
          type: "array",
          items: {
            type: "object",
            properties: {
              albumName: { type: "string" },
              albumURL: { type: "string" },
              albumOwnKey: { type: "string" },
            },
          },
        },
        receivedAlbum: {
          type: "array",
          items: {
            type: "object",
            properties: {
              albumName: { type: "string" },
              albumURL: { type: "string" },
              albumReceiveKey: { type: "string" },
            },
          },
        },
      },
    },
    otp: {
      type: "object",
      properties: {
        id: { type: "string" },
        username: { type: "string" },
        time: { type: "string" },
        email: { type: "string" },
        otpString: { type: "string" },
      },
    },
  },
};