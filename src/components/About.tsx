'use client'

import { motion } from 'framer-motion'
import { Award, Clock, MapPin, Shield, Truck, Users } from 'lucide-react'

const stats = [
    {
        icon: Truck,
        value: "500+",
        label: "Xe tải hoạt động"
    },
    {
        icon: Users,
        value: "10,000+",
        label: "Khách hàng tin tưởng"
    },
    {
        icon: MapPin,
        value: "63",
        label: "Tỉnh thành phủ sóng"
    },
    {
        icon: Award,
        value: "15+",
        label: "Năm kinh nghiệm"
    }
]

const values = [
    {
        icon: Shield,
        title: "Uy tín - Chất lượng",
        description: "Cam kết cung cấp dịch vụ vận tải chất lượng cao, uy tín được khách hàng tin tưởng."
    },
    {
        icon: Clock,
        title: "Nhanh chóng - Đúng hẹn",
        description: "Giao hàng đúng thời gian cam kết, tối ưu hóa tuyến đường và thời gian vận chuyển."
    },
    {
        icon: Users,
        title: "Tận tâm - Chuyên nghiệp",
        description: "Đội ngũ nhân viên được đào tạo bài bản, phục vụ khách hàng tận tâm và chuyên nghiệp."
    }
]

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden bg-[url('/about-bg.jpg')] bg-cover bg-center bg-no-repeat">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-indigo-900/85" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Về Vận Tải 62 Dương Lê
                    </h2>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Với hơn 15 năm kinh nghiệm trong lĩnh vực vận tải đường bộ,
                        Vận Tải 62 Dương Lê đã trở thành đối tác tin cậy của hàng nghìn doanh nghiệp trên toàn quốc.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-8 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                <stat.icon className="w-8 h-8 text-blue-300" />
                            </div>
                            <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                            <p className="text-blue-100 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Company Story */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
                    >
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Câu chuyện của Vận Tải 62 Dương Lê
                        </h3>
                        <div className="space-y-4 text-blue-100">
                            <p>
                                Bắt đầu từ một công ty vận tải nhỏ với chỉ 5 chiếc xe tải,
                                Vận Tải 62 Dương Lê đã phát triển thành một trong những công ty vận tải
                                hàng đầu Việt Nam với mạng lưới phủ sóng toàn quốc.
                            </p>
                            <p>
                                Được sáng lập bởi anh Dương Lê với tâm huyết và niềm đam mê trong ngành vận tải,
                                chúng tôi luôn đặt sự hài lòng của khách hàng lên hàng đầu. Mỗi kiện hàng không chỉ
                                là hàng hóa mà còn là niềm tin của khách hàng gửi gắm.
                            </p>
                            <p>
                                Với đội ngũ hơn 1000 nhân viên tận tâm và hệ thống xe tải hiện đại,
                                Vận Tải 62 Dương Lê tự tin mang đến cho khách hàng trải nghiệm vận chuyển
                                tốt nhất từ Bắc vào Nam, góp phần kết nối mọi miền đất nước.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/15 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
                    >
                        <h4 className="text-2xl font-bold text-white mb-6">Tầm nhìn & Sứ mệnh</h4>
                        <div className="space-y-6">
                            <div>
                                <h5 className="text-lg font-semibold text-blue-300 mb-2">Tầm nhìn</h5>
                                <p className="text-blue-100">
                                    Trở thành công ty vận tải hàng đầu Đông Nam Á,
                                    cung cấp giải pháp logistics toàn diện và bền vững.
                                </p>
                            </div>
                            <div>
                                <h5 className="text-lg font-semibold text-blue-300 mb-2">Sứ mệnh</h5>
                                <p className="text-blue-100">
                                    Kết nối mọi miền đất nước thông qua dịch vụ vận tải chất lượng cao,
                                    góp phần thúc đẩy phát triển kinh tế và cải thiện cuộc sống.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-white mb-12 text-center">
                        Giá trị cốt lõi
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                                    <value.icon className="w-8 h-8 text-blue-300" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                                <p className="text-blue-100">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">
                        Chứng nhận & Giải thưởng
                    </h3>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="p-4">
                            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm mb-4">
                                <Award className="w-12 h-12 text-yellow-400 mx-auto" />
                            </div>
                            <h4 className="font-semibold text-white">ISO 9001:2015</h4>
                            <p className="text-sm text-blue-100">Chứng nhận chất lượng quốc tế</p>
                        </div>
                        <div className="p-4">
                            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm mb-4">
                                <Shield className="w-12 h-12 text-green-400 mx-auto" />
                            </div>
                            <h4 className="font-semibold text-white">Top 10</h4>
                            <p className="text-sm text-blue-100">Doanh nghiệp vận tải uy tín</p>
                        </div>
                        <div className="p-4">
                            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm mb-4">
                                <Users className="w-12 h-12 text-blue-400 mx-auto" />
                            </div>
                            <h4 className="font-semibold text-white">Doanh nghiệp</h4>
                            <p className="text-sm text-blue-100">Xuất sắc năm 2023</p>
                        </div>
                        <div className="p-4">
                            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm mb-4">
                                <Truck className="w-12 h-12 text-purple-400 mx-auto" />
                            </div>
                            <h4 className="font-semibold text-white">Thương hiệu</h4>
                            <p className="text-sm text-blue-100">Vận tải tin cậy 2024</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
