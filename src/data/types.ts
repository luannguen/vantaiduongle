export interface PriceCalculationInput {
    origin: string;
    destination: string;
    weight: string;
    truckType: string;
}

export interface ContactFormInput {
    name: string;
    phone: string;
    email: string;
    origin: string;
    destination: string;
    truckType: string;
    cargoType: string;
    message: string;
}

export type Result<T> =
    | { success: true; data: T }
    | { success: false; error: string; code: string };

export const Result = {
    success: <T>(data: T): Result<T> => ({ success: true, data }),
    failure: (message: string, code: string): Result<never> => ({ success: false, error: message, code })
};

export enum ErrorCodes {
    VALIDATION_ERROR = 'VALIDATION_ERROR',
    SERVER_ERROR = 'SERVER_ERROR',
    NOT_FOUND = 'NOT_FOUND',
}
