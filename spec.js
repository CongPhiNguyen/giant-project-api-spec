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
    {
      name: "image",
      description: "Các API về image",
    },
    {
      name: "album",
      description: "Các API về album",
    },
  ],
  schemes: ["http"],
  paths: {
    // Các api về account và totp
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
    "/lock-account": {
      patch: {
        tags: ["user"],
        summary: "Khóa tạm thời tài khoản người dùng",
        description: "",
        operationId: "lockAccount",
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
            name: "token",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Token JWT của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "boolean",
                  default: "Account locked successfully",
                },
                error: { type: "boolean", default: "false" },
                success: { type: "boolean", default: "true" },
              },
            },
          },
          404: {
            description: "status: 404 Account not found",
            schema: {
              properties: {
                message: { type: "boolean", default: "Account not found" },
                error: { type: "boolean", default: "true" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          400: {
            description: "status: 400 Information not correct",
            schema: {
              properties: {
                message: {
                  type: "boolean",
                  default: "Information not correct",
                },
                error: { type: "boolean", default: "true" },
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
    "/delete-account": {
      delete: {
        tags: ["user"],
        summary: "Xóa tài khoản người dùng",
        description: "",
        operationId: "deleteAccount",
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
            name: "token",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Token JWT của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "boolean",
                  default: "Account deleted successfully",
                },
                error: { type: "boolean", default: "false" },
                success: { type: "boolean", default: "true" },
              },
            },
          },
          404: {
            description: "status: 404 Account not found",
            schema: {
              properties: {
                message: { type: "boolean", default: "Account not found" },
                error: { type: "boolean", default: "true" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          400: {
            description: "status: 400 Information not correct",
            schema: {
              properties: {
                message: {
                  type: "boolean",
                  default: "Information not correct",
                },
                error: { type: "boolean", default: "true" },
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
    "/edit-account": {
      put: {
        tags: ["user"],
        summary: "Chỉnh sửa thông tin tài khoản người dùng",
        description: "",
        operationId: "editAccount",
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
            name: "avatarURL",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Link đến avatar của người dùng",
          },
          {
            in: "formData",
            name: "firstName",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Tên của người dùng",
          },
          {
            in: "formData",
            name: "familyname",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Họ của người dùng",
          },
          {
            in: "formData",
            name: "dateOfBirth",
            required: "true",
            schema: {
              type: "Date",
            },
            description: "Ngày sinh của người dùng",
          },
          {
            in: "formData",
            name: "token",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Token JWT của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "boolean",
                  default: "Account edited successfully",
                },
                error: { type: "boolean", default: "false" },
                success: { type: "boolean", default: "true" },
              },
            },
          },
          404: {
            description: "status: 404 Account not found",
            schema: {
              properties: {
                message: { type: "boolean", default: "Account not found" },
                error: { type: "boolean", default: "true" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          400: {
            description: "status: 400 Information not correct",
            schema: {
              properties: {
                message: {
                  type: "boolean",
                  default: "Information not correct",
                },
                error: { type: "boolean", default: "true" },
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
    "/change-password": {
      patch: {
        tags: ["user"],
        summary: "Thay đổi mật khẩu tài khoản người dùng khi còn nhớ mật khẩu",
        description: "",
        operationId: "changePassword",
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
            name: "oldPassword",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Mật khẩu cũ của người dùng",
          },
          {
            in: "formData",
            name: "newPassword",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Mật khẩu mới của người dùng",
          },
          {
            in: "formData",
            name: "token",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Token JWT của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "boolean",
                  default: "Change password successfully",
                },
                error: { type: "boolean", default: "false" },
                success: { type: "boolean", default: "true" },
              },
            },
          },
          404: {
            description: "status: 404 Account not found",
            schema: {
              properties: {
                message: { type: "boolean", default: "Account not found" },
                error: { type: "boolean", default: "true" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          400: {
            description: "status: 400 Information not correct",
            schema: {
              properties: {
                message: {
                  type: "boolean",
                  default: "Information not correct",
                },
                error: { type: "boolean", default: "true" },
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
    "/forgot-password": {
      patch: {
        tags: ["user"],
        summary: "Tạo mật khẩu mới cho trường hợp người dùng quên mật khẩu",
        description: "",
        operationId: "forgotPassword",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "usernameOrEmail",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Username hoặc email của người dùng",
          },
          {
            in: "formData",
            name: "newPassword",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Mật khẩu mới của người dùng",
          },
          {
            in: "formData",
            name: "otp",
            required: "true",
            schema: {
              type: "string",
            },
            description: "OTP Login được gửi về",
          },
          {
            in: "formData",
            name: "time",
            required: "true",
            schema: {
              type: "Date",
            },
            description: "Thời gian submit của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "boolean",
                  default: "Change password successfully",
                },
                error: { type: "boolean", default: "false" },
                success: { type: "boolean", default: "true" },
              },
            },
          },
          404: {
            description: "status: 404 Account not found",
            schema: {
              properties: {
                message: { type: "boolean", default: "Account not found" },
                error: { type: "boolean", default: "true" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          400: {
            description: "status: 400 Information not correct",
            schema: {
              properties: {
                message: {
                  type: "boolean",
                  default: "Information not correct",
                },
                error: { type: "boolean", default: "true" },
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
          504: {
            description: "status: 504 Timeout",
            schema: {
              properties: {
                message: { type: "string", default: "otp timeout" },
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
            description: "status: 200 OK",
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
    "/get-list-user-information-by-ID": {
      get: {
        tags: ["user"],
        summary: "Lấy thông tin cơ bản của người dùng bằng ID",
        description: "",
        operationId: "getListUserInformationByID",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "id",
            required: "true",
            schema: {
              type: "array",
              items: {
                type: "string",
              },
            },
            description: "Array chứa ID của người dùng",
          },
          {
            in: "formData",
            name: "token",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Token JWT của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Get list user successfully",
                },
                error: { type: "string", default: "false" },
                success: { type: "boolean", default: "true" },
                userInfos: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      id: { type: "string" },
                      name: { type: "string" },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: "status: 401 Unauthorize token",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Token is not correct or expired",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          500: {
            description: "status: 500 Not implemented",
            schema: {
              properties: {
                message: { type: "string", default: "Can't get list user" },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    // Các api về images và albums
    "/upload": {
      post: {
        tags: ["image"],
        summary: "Tải hình ảnh và thông tin hình ảnh lên server",
        description: "",
        operationId: "uploadImage",
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
            name: "token",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Token JWT của người dùng",
          },
          {
            in: "formData",
            name: "image",
            required: "true",
            type: "file",
            description: "file hình ảnh",
          },
          {
            in: "formData",
            name: "imageTitle",
            required: "true",
            type: "string",
            description: "Tên của hình ảnh",
          },
          {
            in: "formData",
            name: "altDes",
            required: "true",
            type: "string",
            description: "Văn bản thay thế của hình ảnh",
          },
          {
            in: "formData",
            name: "parrentAlbums",
            type: "string",
            description: "Thư mục hình ảnh được chọn",
          },
          {
            in: "formData",
            name: "storage",
            type: "string",
            description: "Dung lượng của hình ảnh",
          },
          {
            in: "formData",
            name: "generatedTime",
            type: "string",
            description: "Thời gian khởi tạo của hình ảnh",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Image uploading successfully",
                },
                error: { type: "string", default: "false" },
                success: { type: "boolean", default: "true" },
              },
            },
          },
          401: {
            description: "status: 401 Unauthorize token",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Token is not correct or expired",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          500: {
            description: "status: 500 Fileuploading failed",
            schema: {
              properties: {
                message: { type: "string", default: "Image uploading failed" },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          501: {
            description: "status: 500 Image information not correct",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Image information is not correct",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/:id": {
      get: {
        tags: ["image"],
        summary: "Lấy thông tin hình ảnh bằng id của hình ảnh",
        description: "",
        operationId: "getImageInfoByID",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "id",
            required: "true",
            schema: {
              type: "string",
            },
            description: "id của hình ảnh",
          },
          {
            in: "formData",
            name: "token",
            schema: {
              type: "string",
            },
            description: "JWT của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Image information getting successfully",
                },
                error: { type: "string", default: "false" },
                success: { type: "boolean", default: "true" },
                imageInformation: {
                  type: "object",
                  properties: {
                    id: { type: "string" },
                    imageOwnKey: { type: "string" },
                    imageSharedKey: { type: "string" },
                    ownPeople: { type: "string" },
                    imageTitle: { type: "string" },
                    altDes: { type: "string" },
                    sharedPeople: {
                      type: "array",
                      items: {
                        type: "string",
                      },
                    },
                    parentAlbumArray: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          id: { type: "string" },
                          url: { type: "string" },
                        },
                      },
                    },
                    viewedPeople: { type: "array", items: { type: "string" } },
                    imageURL: { type: "string" },
                    storage: { type: "integer" },
                    generatedAt: { type: "date" },
                    isDelete: { type: "boolean" },
                    createdAt: { type: "date" },
                    updatedAt: { type: "date" },
                  },
                },
              },
            },
          },

          401: {
            description: "status: 401 Unauthorize token",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Token is not correct or expired",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          404: {
            description: "status: 404 Not found",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Image not found",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/get-user-own-image-key": {
      get: {
        tags: ["image"],
        summary: "Lấy thông tin image key sở hữu từ người dùng",
        description: "",
        operationId: "getUserOwnImageKey",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "id",
            required: "true",
            schema: {
              type: "string",
            },
            description: "id của hình ảnh",
          },
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
            name: "token",
            schema: {
              type: "string",
            },
            description: "JWT của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Image ownkey getting successfully",
                },
                error: { type: "string", default: "false" },
                success: { type: "boolean", default: "true" },
                imageOwnKey: { type: "string" },
              },
            },
          },

          401: {
            description: "status: 401 Unauthorize token",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Token is not correct or expired",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          404: {
            description: "status: 404 Not found",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Image ownkey not found",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/get-user-shared-image-key": {
      get: {
        tags: ["image"],
        summary: "Lấy thông tin image key được chia sẻ từ người dùng",
        description: "",
        operationId: "getUserSharedImageKey",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "id",
            required: "true",
            schema: {
              type: "string",
            },
            description: "id của hình ảnh",
          },
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
            name: "token",
            schema: {
              type: "string",
            },
            description: "JWT của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Image sharedkey getting successfully",
                },
                error: { type: "string", default: "false" },
                success: { type: "boolean", default: "true" },
                imageReceivedKey: { type: "string" },
              },
            },
          },

          401: {
            description: "status: 401 Unauthorize token",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Token is not correct or expired",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          404: {
            description: "status: 404 Not found",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Image sharedkey not found",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/add-user-to-viewed": {
      patch: {
        tags: ["image"],
        summary: "Thêm người dùng vào danh sách đã xem hình ảnh",
        description: "",
        operationId: "addUserToViewedImage",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "id",
            required: "true",
            schema: {
              type: "string",
            },
            description: "id của hình ảnh",
          },
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
            name: "token",
            schema: {
              type: "string",
            },
            description: "JWT của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Add user to viewed list OK",
                },
                error: { type: "string", default: "false" },
                success: { type: "boolean", default: "true" },
              },
            },
          },

          401: {
            description: "status: 401 Unauthorize token",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Token is not correct or expired",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          404: {
            description: "status: 404 Not found",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Username or image not found",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          500: {
            description: "status: 500 Not implemented",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Can't add user to image view list",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/delete-own-image-temp": {
      delete: {
        tags: ["image"],
        summary: "Xóa hình ảnh sở hữu (tạm thời)",
        description: "",
        operationId: "deleteOwnImageTemp",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "id",
            required: "true",
            schema: {
              type: "string",
            },
            description: "id của hình ảnh",
          },
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
            name: "imageOwnKey",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Key sở hữu hình ảnh của người dùng",
          },
          {
            in: "formData",
            name: "token",
            schema: {
              type: "string",
            },
            description: "JWT của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Delete temporary image OK",
                },
                error: { type: "string", default: "false" },
                success: { type: "boolean", default: "true" },
              },
            },
          },

          401: {
            description: "status: 401 Unauthorize token",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Token is not correct or expired",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          404: {
            description: "status: 404 Not found",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Username or image not found",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          500: {
            description: "status: 500 Not implemented",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Can't delete image",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
        },
        security: [],
      },
    },
    "/delete-own-image-perm": {
      delete: {
        tags: ["image"],
        summary: "Xóa hình ảnh sở hữu (hoàn toàn)",
        description: "",
        operationId: "deleteOwnImagePerm",
        consumes: ["multipart/form-data"],
        produces: ["application/json"],
        parameters: [
          {
            in: "formData",
            name: "id",
            required: "true",
            schema: {
              type: "string",
            },
            description: "id của hình ảnh",
          },
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
            name: "imageOwnKey",
            required: "true",
            schema: {
              type: "string",
            },
            description: "Key sở hữu hình ảnh của người dùng",
          },
          {
            in: "formData",
            name: "token",
            schema: {
              type: "string",
            },
            description: "JWT của người dùng",
          },
        ],
        responses: {
          200: {
            description: "status: 200 OK",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Delete permantly image OK",
                },
                error: { type: "string", default: "false" },
                success: { type: "boolean", default: "true" },
              },
            },
          },

          401: {
            description: "status: 401 Unauthorize token",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Token is not correct or expired",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          404: {
            description: "status: 404 Not found",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Username or image not found",
                },
                error: { type: "string" },
                success: { type: "boolean", default: "false" },
              },
            },
          },
          500: {
            description: "status: 500 Not implemented",
            schema: {
              properties: {
                message: {
                  type: "string",
                  default: "Can't delete permantly image",
                },
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
        avatarURL: {
          type: "string",
        },
        firstName: {
          type: "string",
        },
        familyName: {
          type: "string",
        },
        dateOfBirth: {
          type: "Date",
        },
        salt: {
          type: "string",
        },
        ownImage: {
          type: "array",
          items: {
            type: "object",
            properties: {
              imageID: { type: "integer" },
              imageOwnKey: { type: "string" },
            },
          },
        },
        receivedImage: {
          type: "array",
          items: {
            type: "object",
            properties: {
              imageID: { type: "integer" },
              imageOwnKey: { type: "string" },
            },
          },
        },
        ownAlbum: {
          type: "array",
          items: {
            type: "object",
            properties: {
              albumID: { type: "integer" },
              albumOwnKey: { type: "string" },
            },
          },
        },
        receivedAlbum: {
          type: "array",
          items: {
            type: "object",
            properties: {
              albumID: { type: "integer" },
              albumReceiveKey: { type: "string" },
            },
          },
        },
        accountState: {
          type: "string",
          default: "normal/locked/deleted",
        },
        createdAt: { type: "Date" },
        updatedAt: { type: "Date" },
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
        createdAt: { type: "Date" },
        updatedAt: { type: "Date" },
      },
    },
    images: {
      type: "object",
      properties: {
        id: { type: "string" },
        imageOwnKey: { type: "string" },
        imageSharedKey: { type: "string" },
        ownPeople: { type: "string" },
        imageTitle: { type: "string" },
        altDes: { type: "string" },
        sharedPeople: {
          type: "array",
          items: {
            type: "string",
          },
        },
        parentAlbumArray: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              url: { type: "string" },
            },
          },
        },
        viewedPeople: { type: "array", items: { type: "string" } },
        imageURL: { type: "string" },
        storage: { type: "integer" },
        generatedAt: { type: "Date" },
        isDelete: { type: "boolean" },
        createdAt: { type: "Date" },
        updatedAt: { type: "Date" },
      },
    },
    albums: {
      type: "object",
      properties: {
        id: { type: "string" },
        albumURL: { type: "string" },
        albumName: { type: "string" },
        albumOwnKey: { type: "string" },
        albumSharedKey: { type: "string" },
        haveAlbums: {
          type: "array",
          item: {
            type: "string",
          },
        },
        haveImages: {
          type: "array",
          item: {
            type: "string",
          },
        },
        description: { type: "string" },
        ownPeople: { type: "string" },
        storage: { type: "integer" },
        sharedPeople: {
          type: "array",
          items: {
            type: "string",
          },
        },
        viewedPeople: { type: "array", items: { type: "string" } },
        isDelete: { type: "boolean" },
        createdAt: { type: "Date" },
        updatedAt: { type: "Date" },
      },
    },
  },
};
