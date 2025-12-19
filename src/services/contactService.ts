import { Result, ErrorCodes, ContactFormInput } from '../data/types';

export const contactAPI = {
    submit: async (data: ContactFormInput): Promise<Result<void>> => {
        try {
            // Giả lập gọi API
            console.log('Submitting contact form:', data);

            // Validate sơ bộ
            if (!data.name || !data.phone) {
                return Result.failure('Tên và số điện thoại là bắt buộc', ErrorCodes.VALIDATION_ERROR);
            }

            // Giả lập delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            return Result.success(undefined);
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : 'Lỗi không xác định';
            return Result.failure('Lỗi khi gửi form: ' + message, ErrorCodes.SERVER_ERROR);
        }
    }
};
