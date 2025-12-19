/**
 * useCaseRegistry - Đăng ký các use case để reuse
 */
export const useCaseRegistry = [
    {
        id: 'pricing.calculate',
        domain: 'pricing',
        description: 'Tính giá vận chuyển dự kiến',
        input: 'PriceCalculationInput',
        output: 'Result<number>',
        service: 'priceAPI.calculate',
        hook: 'usePriceCalculator',
    },
    {
        id: 'contact.submit',
        domain: 'contact',
        description: 'Gửi yêu cầu báo giá/liên hệ',
        input: 'ContactFormInput',
        output: 'Result<void>',
        service: 'contactAPI.submit',
        hook: 'useContactForm',
    }
];
