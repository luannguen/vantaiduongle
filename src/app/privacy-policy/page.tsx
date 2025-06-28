import { COMPANY_INFO } from '@/lib/company-metadata';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Chính sách bảo mật - ${COMPANY_INFO.name.vi}`,
    description: 'Chính sách bảo mật thông tin cá nhân và dữ liệu khách hàng của Vận Tải 62 Dương Lê',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-sm p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Chính sách bảo mật</h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">
                            Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Cam kết bảo mật</h2>
                            <p className="text-gray-700 mb-4">
                                {COMPANY_INFO.name.vi} cam kết bảo vệ quyền riêng tư và thông tin cá nhân của khách hàng.
                                Chính sách này giải thích cách chúng tôi thu thập, sử dụng, bảo vệ và chia sẻ thông tin
                                của bạn khi sử dụng dịch vụ vận tải của chúng tôi.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Thông tin chúng tôi thu thập</h2>

                            <div className="text-gray-700 space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">2.1 Thông tin cá nhân</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Họ tên đầy đủ</li>
                                    <li>Số điện thoại</li>
                                    <li>Địa chỉ email</li>
                                    <li>Địa chỉ liên hệ (gửi/nhận hàng)</li>
                                    <li>Số CMND/CCCD (nếu cần thiết)</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900">2.2 Thông tin hàng hóa</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Loại hàng hóa</li>
                                    <li>Khối lượng, kích thước</li>
                                    <li>Giá trị hàng hóa</li>
                                    <li>Yêu cầu đặc biệt</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900">2.3 Thông tin kỹ thuật</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Địa chỉ IP</li>
                                    <li>Loại trình duyệt</li>
                                    <li>Thời gian truy cập website</li>
                                    <li>Vị trí GPS (khi theo dõi đơn hàng)</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Mục đích sử dụng thông tin</h2>
                            <div className="text-gray-700">
                                <p className="mb-4">Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Cung cấp dịch vụ:</strong> Thực hiện vận chuyển hàng hóa theo yêu cầu</li>
                                    <li><strong>Liên hệ:</strong> Thông báo tình trạng đơn hàng, xác nhận thông tin</li>
                                    <li><strong>Thanh toán:</strong> Xử lý thanh toán và xuất hóa đơn</li>
                                    <li><strong>Hỗ trợ khách hàng:</strong> Giải đáp thắc mắc và xử lý khiếu nại</li>
                                    <li><strong>Cải thiện dịch vụ:</strong> Phân tích và nâng cao chất lượng dịch vụ</li>
                                    <li><strong>Marketing:</strong> Gửi thông tin khuyến mãi (chỉ khi có đồng ý)</li>
                                    <li><strong>Tuân thủ pháp luật:</strong> Đáp ứng yêu cầu của cơ quan nhà nước</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Bảo vệ thông tin</h2>
                            <div className="text-gray-700 space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">4.1 Biện pháp kỹ thuật</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Mã hóa SSL cho website</li>
                                    <li>Tường lửa bảo vệ hệ thống</li>
                                    <li>Backup dữ liệu định kỳ</li>
                                    <li>Cập nhật bảo mật thường xuyên</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900">4.2 Biện pháp quản lý</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Phân quyền truy cập dữ liệu</li>
                                    <li>Đào tạo nhân viên về bảo mật</li>
                                    <li>Ký cam kết bảo mật với nhân viên</li>
                                    <li>Kiểm tra, giám sát thường xuyên</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Chia sẻ thông tin</h2>
                            <div className="text-gray-700 space-y-4">
                                <p>Chúng tôi không bán, trao đổi hay chuyển giao thông tin cá nhân cho bên thứ ba, ngoại trừ:</p>

                                <h3 className="text-xl font-semibold text-gray-900">5.1 Đối tác dịch vụ</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Công ty bảo hiểm (để xử lý bồi thường)</li>
                                    <li>Ngân hàng (để xử lý thanh toán)</li>
                                    <li>Đối tác logistics (khi cần thiết)</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900">5.2 Yêu cầu pháp lý</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Cơ quan công an, tòa án</li>
                                    <li>Cơ quan thuế</li>
                                    <li>Cơ quan quản lý vận tải</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900">5.3 Đồng ý của khách hàng</h3>
                                <p>Trong trường hợp khách hàng đồng ý bằng văn bản.</p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Quyền của khách hàng</h2>
                            <div className="text-gray-700">
                                <p className="mb-4">Bạn có các quyền sau đối với thông tin cá nhân của mình:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Quyền truy cập:</strong> Yêu cầu xem thông tin cá nhân được lưu trữ</li>
                                    <li><strong>Quyền sửa đổi:</strong> Yêu cầu cập nhật, chỉnh sửa thông tin</li>
                                    <li><strong>Quyền xóa:</strong> Yêu cầu xóa thông tin (trong một số trường hợp)</li>
                                    <li><strong>Quyền hạn chế:</strong> Hạn chế việc xử lý thông tin</li>
                                    <li><strong>Quyền phản đối:</strong> Phản đối việc sử dụng thông tin cho mục đích marketing</li>
                                    <li><strong>Quyền khiếu nại:</strong> Khiếu nại đến cơ quan có thẩm quyền</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookie và công nghệ theo dõi</h2>
                            <div className="text-gray-700 space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">7.1 Sử dụng Cookie</h3>
                                <p>Website của chúng tôi sử dụng cookie để:</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Ghi nhớ tùy chọn của bạn</li>
                                    <li>Cải thiện trải nghiệm người dùng</li>
                                    <li>Phân tích lưu lượng truy cập</li>
                                    <li>Hiển thị nội dung phù hợp</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900">7.2 Quản lý Cookie</h3>
                                <p>Bạn có thể tắt cookie thông qua cài đặt trình duyệt, tuy nhiên điều này có thể ảnh hưởng đến một số tính năng của website.</p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Lưu trữ thông tin</h2>
                            <div className="text-gray-700 space-y-4">
                                <h3 className="text-xl font-semibold text-gray-900">8.1 Thời gian lưu trữ</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Thông tin giao dịch: 5 năm (theo quy định pháp luật)</li>
                                    <li>Thông tin liên hệ: Cho đến khi khách hàng yêu cầu xóa</li>
                                    <li>Dữ liệu website: 2 năm</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-900">8.2 Vị trí lưu trữ</h3>
                                <p>Dữ liệu được lưu trữ tại:</p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Máy chủ tại Việt Nam</li>
                                    <li>Dịch vụ cloud đáng tin cậy</li>
                                    <li>Hệ thống backup an toàn</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Trẻ em</h2>
                            <p className="text-gray-700">
                                Dịch vụ của chúng tôi không nhắm đến trẻ em dưới 16 tuổi. Chúng tôi không cố ý thu thập
                                thông tin cá nhân từ trẻ em dưới 16 tuổi. Nếu phát hiện trường hợp này, chúng tôi sẽ
                                xóa thông tin ngay lập tức.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Thay đổi chính sách</h2>
                            <p className="text-gray-700 mb-4">
                                Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Mọi thay đổi quan trọng
                                sẽ được thông báo qua:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li>Email đến khách hàng đăng ký</li>
                                <li>Thông báo trên website</li>
                                <li>Tin nhắn SMS (nếu cần thiết)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Liên hệ</h2>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-4">
                                    Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này hoặc muốn thực hiện
                                    quyền của mình, vui lòng liên hệ:
                                </p>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>Công ty:</strong> {COMPANY_INFO.name.vi}</p>
                                    <p><strong>Địa chỉ:</strong> {COMPANY_INFO.contact.address.full}</p>
                                    <p><strong>Điện thoại:</strong> {COMPANY_INFO.contact.phone.primary}</p>
                                    <p><strong>Email:</strong> {COMPANY_INFO.contact.email.primary}</p>
                                    <p><strong>Người phụ trách bảo mật:</strong> Phòng IT - {COMPANY_INFO.contact.email.support}</p>
                                </div>
                            </div>
                        </section>

                        <div className="bg-yellow-50 p-4 rounded-lg mt-8">
                            <p className="text-sm text-gray-600">
                                <strong>Lưu ý:</strong> Chính sách này tuân thủ Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân
                                và các quy định pháp luật hiện hành của Việt Nam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
