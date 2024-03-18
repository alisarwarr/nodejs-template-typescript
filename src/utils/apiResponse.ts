import { ApiResponseInterface } from "../interface/ApiResponseInterface";


export const apiResponse = (params: ApiResponseInterface) => {
    const { res, message = "OK", code = 200, err, errors, success = true, data } = params;

    return res.status(code).json({
        success: success,
        statusCode: code,
        message: message,
        errors,
        stack: process.env.NODE_ENV === 'development' ? err?.stack : null,
        data
    });
}