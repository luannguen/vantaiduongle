'use client'

import { motion } from 'framer-motion'
import {
    Container,
    MoveHorizontal,
    Plus,
    Scale,
    ShieldCheck,
    Thermometer,
    Truck,
    Zap
} from 'lucide-react'
import { useState } from 'react'

const truckCategories = [
    {
        id: 'standard',
        name: 'Đội xe vận tải tiêu chuẩn',
        description: 'Đa dạng tải trọng từ 1.5 tấn đến 15 tấn, phục vụ mọi nhu cầu vận chuyển hàng hóa nội thành và liên tỉnh.',
        icon: Truck,
        color: 'from-blue-600 to-blue-800'
    },
    {
        id: 'special',
        name: 'Vận tải chuyên dụng & Quá khổ',
        description: 'Giải pháp tối ưu cho hàng hóa đặc thù, hàng siêu trường siêu trọng với trang thiết bị hiện đại.',
        icon: Container,
        color: 'from-amber-500 to-amber-700'
    }
]

const standardTrucks = [
    {
        type: 'Xe tải nhẹ',
        specs: '1.5 - 2.5 Tấn',
        size: '4.3m x 1.8m x 1.8m',
        capacity: '14 - 15 cbm',
        features: ['Phù hợp nội thành', 'Giao hàng nhanh', 'Linh hoạt phố nhỏ'],
        icon: Truck
    },
    {
        type: 'Xe tải trung',
        specs: '3.5 - 5 Tấn',
        size: '6.2m x 2.1m x 2.1m',
        capacity: '25 - 28 cbm',
        features: ['Chạy tuyến liên tỉnh', 'Thùng bạt/kín', 'Vận tải linh hoạt'],
        icon: Truck
    },
    {
        type: 'Xe tải nặng',
        specs: '8 - 15 Tấn',
        size: '9.6m x 2.4m x 2.4m',
        capacity: '55 - 60 cbm',
        features: ['Đường dài xuyên việt', 'Sức tải cực lớn', 'Tối ưu chi phí'],
        icon: Truck
    }
]

const specialTrucks = [
    {
        type: 'Đầu kéo Container',
        specs: '20ft - 40ft',
        capacity: '30 - 32 Tấn',
        features: ['Vận tải quốc tế', 'Hàng container', 'Kẹp chì an toàn'],
        icon: Container
    },
    {
        type: 'Xe tải lạnh',
        specs: '1.5 - 15 Tấn',
        temp: '-18°C đến +10°C',
        features: ['Hàng thực phẩm', 'Dược phẩm', 'Cảm biến nhiệt'],
        icon: Thermometer
    },
    {
        type: 'Siêu trường siêu trọng',
        specs: 'Mooc lùn / Rơ mooc',
        capacity: 'Tới 100 Tấn',
        features: ['Máy móc công trình', 'Kết cấu thép', 'Giấy phép đặc biệt'],
        icon: Scale
    }
]

export default function TruckTypes() {
    const [activeTab, setActiveTab] = useState<'standard' | 'special'>('standard')

    return (
        <section id="fleet" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6"
                    >
                        <ShieldCheck className="w-5 h-5 text-blue-400" />
                        <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">Năng lực vận tải</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Đội xe <span className="text-gradient-gold">Hùng hậu & Hiện đại</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Sở hữu mạng lưới xe tải đa dạng chủng loại, sẵn sàng đáp ứng mọi nhu cầu vận chuyển khắt khe nhất của thị trường.
                    </motion.p>
                </div>

                {/* Tabs / Selectors */}
                <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                    {truckCategories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveTab(category.id as 'standard' | 'special')}
                            className={`group flex items-center p-6 rounded-[2rem] border-2 transition-all duration-500 text-left relative overflow-hidden ${activeTab === category.id
                                    ? 'bg-white/5 border-blue-500/50 shadow-2xl shadow-blue-500/10'
                                    : 'bg-transparent border-white/5 hover:border-white/20'
                                }`}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Active glow effect */}
                            {activeTab === category.id && (
                                <div className="absolute inset-0 bg-blue-500/5 blur-2xl animate-pulse" />
                            )}

                            <div className={`p-4 rounded-2xl mr-5 transition-transform duration-500 ${activeTab === category.id ? 'bg-blue-600 scale-110 shadow-lg' : 'bg-slate-800'
                                }`}>
                                <category.icon className={`w-8 h-8 ${activeTab === category.id ? 'text-white' : 'text-slate-500'}`} />
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-1 transition-colors ${activeTab === category.id ? 'text-white' : 'text-slate-400'
                                    }`}>
                                    {category.name}
                                </h3>
                                <p className="text-sm text-slate-500 max-w-[240px] leading-relaxed">
                                    {category.description}
                                </p>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Content Grid */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {(activeTab === 'standard' ? standardTrucks : specialTrucks).map((truck, index) => (
                        <motion.div
                            key={index}
                            className="glass-card bg-slate-800/50 border-white/5 rounded-[2.5rem] p-8 hover:bg-slate-800/80 transition-all duration-500 group relative overflow-hidden"
                            whileHover={{ y: -10 }}
                        >
                            {/* Floating Icon Decoration */}
                            <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                                <truck.icon className="w-40 h-40 text-white" />
                            </div>

                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="bg-blue-600/20 p-4 rounded-3xl border border-blue-500/20">
                                    <truck.icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <div className="bg-slate-900 border border-white/10 px-4 py-2 rounded-2xl">
                                    <span className="text-amber-500 font-bold text-sm tracking-tight">{truck.specs}</span>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                                    {truck.type}
                                </h4>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center text-slate-400 text-sm">
                                        <MoveHorizontal className="w-4 h-4 mr-3 text-slate-600" />
                                        <span>Dữ liệu: </span>
                                        <span className="text-slate-200 font-medium ml-2">
                                            {'size' in truck ? truck.size : ('temp' in truck ? (truck as any).temp : truck.specs)}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-slate-400 text-sm">
                                        <Scale className="w-4 h-4 mr-3 text-slate-600" />
                                        <span>Tải trọng: </span>
                                        <span className="text-slate-200 font-medium ml-2">{truck.capacity || 'Theo yêu cầu'}</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-2 border-t border-white/5 pt-6">
                                    {truck.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-center text-slate-500 group-hover:text-slate-300 transition-colors">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                                            <span className="text-xs font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <motion.button
                                className="w-full mt-8 bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-bold hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 flex items-center justify-center group"
                            >
                                <span>Chi tiết & Báo giá</span>
                                <Plus className="w-4 h-4 ml-2 group-hover:rotate-90 transition-transform" />
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 glass-card bg-gradient-to-r from-blue-900/40 via-blue-950/40 to-slate-900/40 border-blue-500/20 p-12 rounded-[3.5rem] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 text-center md:text-left">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4">Bạn chưa tìm thấy loại xe phù hợp?</h3>
                            <p className="text-blue-200 text-lg opacity-80">
                                Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tùy chỉnh phương án vận tải <br /> tối ưu nhất cho hàng hóa của bạn.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-5 rounded-2xl font-black transition-colors flex items-center shadow-xl shadow-amber-900/20"
                            >
                                <Zap className="w-6 h-6 mr-2" />
                                TƯ VẤN NGAY
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white/10 hover:bg-white/20 text-white px-8 py-5 rounded-2xl font-bold transition-colors border border-white/20"
                            >
                                THAM KHẢO GIÁ
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
