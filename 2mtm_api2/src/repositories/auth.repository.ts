import * as express from "express";
import { AuthUserModel } from "../mongoose/schemas/user.schema";
import * as bcrypt from "bcrypt";
import { SECRET_JWT_CODE, SECRET_JWT_REFRESH_TOKEN_CODE } from "../app";
import AuthUtils from "../utils/auth.utils";
import { AuthSessionResponse } from "../models/auth-session-response";
import { ValidSessionResult } from "../interfaces/auth/auth-session.interface";
import { RefreshTokenModel } from "../mongoose/schemas/refresh-token.schema";

This is a placeholder for auth.repository.ts
