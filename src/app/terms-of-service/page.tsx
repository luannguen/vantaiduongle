import { COMPANY_INFO } from '@/lib/company-metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Điều khoản sử dụng - ${COMPANY_INFO.name.vi}`,
    description: 'Điều khoản và điều kiện sử dụng dịch vụ vận tải của Vận Tải 62 Dương Lê',
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Điều khoản sử dụng</h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">
                            Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Chấp nhận điều khoản</h2>
                            <p className="text-gray-700 mb-4">
                                Bằng việc sử dụng dịch vụ của {COMPANY_INFO.name.vi}, bạn đồng ý tuân thủ và bị ràng buộc bởi
                                các điều khoản và điều kiện sau đây. Nếu bạn không đồng ý với bất kỳ phần nào của những
                                điều khoản này, vui lòng không sử dụng dịch vụ của chúng tôi.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Dịch vụ vận tải</h2>
                            <p className="text-gray-700 mb-4">
                                {COMPANY_INFO.name.vi} cung cấp dịch vụ vận chuyển hàng hóa bằng xe tải từ 1-10 tấn
                                trên toàn quốc. Chúng tôi cam kết:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Vận chuyển hàng hóa an toàn, đúng hẹn</li>
                                <li>Bảo hiểm toàn diện cho hàng hóa</li>
                                <li>Hỗ trợ khách hàng 24/7</li>
                                <li>Theo dõi đơn hàng real-time</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Trách nhiệm của khách hàng</h2>
                            <div className="text-gray-700 space-y-4">
                                <p><strong>3.1 Thông tin hàng hóa:</strong> Khách hàng phải cung cấp thông tin chính xác về:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Loại hàng hóa, khối lượng, kích thước</li>
                                    <li>Địa chỉ gửi và nhận chính xác</li>
                                    <li>Thông tin liên hệ người gửi/nhận</li>
                                    <li>Yêu cầu đặc biệt (nếu có)</li>
                                </ul>

                                <p><strong>3.2 Hàng hóa cấm vận chuyển:</strong></p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Chất cháy nổ, độc hại</li>
                                    <li>Ma túy, chất kích thích</li>
                                    <li>Vũ khí, đạn dược</li>
                                    <li>Hàng hóa bất hợp pháp theo quy định của pháp luật</li>
                                </ul>

                                <p><strong>3.3 Thanh toán:</strong> Khách hàng có trách nhiệm thanh toán đầy đủ, đúng hạn theo thỏa thuận.</p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Trách nhiệm của công ty</h2>
                            <div className="text-gray-700 space-y-4">
                                <p><strong>4.1 Bảo quản hàng hóa:</strong> Chúng tôi cam kết bảo quản hàng hóa cẩn thận trong quá trình vận chuyển.</p>

                                <p><strong>4.2 Bồi thường:</strong> Trong trường hợp hàng hóa bị mất mát, hư hỏng do lỗi của công ty:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Bồi thường theo giá trị thực tế (có hóa đơn chứng từ)</li>
                                    <li>Tối đa không quá 10 lần cước phí vận chuyển</li>
                                    <li>Thời hạn giải quyết khiếu nại: 15 ngày làm việc</li>
                                </ul>

                                <p><strong>4.3 Miễn trách nhiệm:</strong></p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Thiên tai, bất khả kháng</li>
                                    <li>Hàng hóa không được đóng gói phù hợp</li>
                                    <li>Khách hàng cung cấp thông tin sai lệch</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Giá cước và thanh toán</h2>
                            <div className="text-gray-700 space-y-4">
                                <p><strong>5.1 Báo giá:</strong> Giá cước được báo trước khi thực hiện dịch vụ, dựa trên:</p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Khoảng cách vận chuyển</li>
                                    <li>Khối lượng, thể tích hàng hóa</li>
                                    <li>Loại xe sử dụng</li>
                                    <li>Dịch vụ kèm theo (bốc xếp, bảo hiểm...)</li>
                                </ul>

                                <p><strong>5.2 Hình thức thanh toán:</strong></p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Tiền mặt</li>
                                    <li>Chuyển khoản ngân hàng</li>
                                    <li>Thanh toán qua ví điện tử</li>
                                </ul>

                                <p><strong>5.3 Thời hạn thanh toán:</strong> Khách hàng cá nhân: trả trước hoặc khi giao hàng. Khách hàng doanh nghiệp: theo thỏa thuận hợp đồng.</p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Bảo mật thông tin</h2>
                            <p className="text-gray-700 mb-4">
                                Chúng tôi cam kết bảo mật thông tin cá nhân và thông tin hàng hóa của khách hàng.
                                Thông tin chỉ được sử dụng cho mục đích cung cấp dịch vụ và không được chia sẻ
                                với bên thứ ba mà không có sự đồng ý của khách hàng.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Khiếu nại và giải quyết tranh chấp</h2>
                            <div className="text-gray-700 space-y-4">
                                <p><strong>7.1 Tiếp nhận khiếu nại:</strong></p>
                                <ul className="list-disc list-inside ml-4 space-y-1">
                                    <li>Hotline: {COMPANY_INFO.contact.phone.primary}</li>
                                    <li>Email: {COMPANY_INFO.contact.email.support}</li>
                                    <li>Trực tiếp tại trụ sở: {COMPANY_INFO.contact.address.full}</li>
                                </ul>

                                <p><strong>7.2 Thời hạn khiếu nại:</strong> Trong vòng 7 ngày kể từ khi nhận hàng.</p>

                                <p><strong>7.3 Giải quyết tranh chấp:</strong> Ưu tiên thương lượng, hòa giải. Nếu không đạt được thỏa thuận, tranh chấp sẽ được giải quyết tại Tòa án có thẩm quyền.</p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Điều khoản chung</h2>
                            <div className="text-gray-700 space-y-4">
                                <p><strong>8.1 Sửa đổi điều khoản:</strong> Chúng tôi có quyền sửa đổi các điều khoản này và sẽ thông báo trước 30 ngày.</p>

                                <p><strong>8.2 Luật áp dụng:</strong> Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam.</p>

                                <p><strong>8.3 Hiệu lực:</strong> Điều khoản có hiệu lực kể từ ngày khách hàng sử dụng dịch vụ.</p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Thông tin liên hệ</h2>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="font-semibold text-gray-900 mb-3">{COMPANY_INFO.name.vi}</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>Địa chỉ:</strong> {COMPANY_INFO.contact.address.full}</p>
                                    <p><strong>Điện thoại:</strong> {COMPANY_INFO.contact.phone.primary}</p>
                                    <p><strong>Hotline:</strong> {COMPANY_INFO.contact.phone.secondary}</p>
                                    <p><strong>Email:</strong> {COMPANY_INFO.contact.email.primary}</p>
                                    <p><strong>Website:</strong> {COMPANY_INFO.contact.website.primary}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
