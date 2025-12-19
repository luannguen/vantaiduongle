import { Result, ErrorCodes, PriceCalculationInput } from '../data/types';

export const priceAPI = {
    calculate: async (data: PriceCalculationInput): Promise<Result<number>> => {
        try {
            // Validate input
            if (!data.truckType) {
                return Result.failure('Loại xe không được để trống', ErrorCodes.VALIDATION_ERROR);
            }

            const basePrices: Record<string, number> = {
                '1-ton': 800000,
                '2-ton': 1200000,
                '5-ton': 2000000,
                '10-ton': 3500000
            };

            const basePrice = basePrices[data.truckType] || 800000;
            const distanceMultiplier = 1.2; // Simplified logic
            const weightMultiplier = parseFloat(data.weight) || 1;

            const total = basePrice * distanceMultiplier * (weightMultiplier / 1000);

            return Result.success(total);
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : 'Lỗi không xác định';
            return Result.failure('Lỗi khi tính giá: ' + message, ErrorCodes.SERVER_ERROR);
        }
    }
};
