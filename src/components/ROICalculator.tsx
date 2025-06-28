'use client'

import { motion } from 'framer-motion'
import { Calculator, ChevronDown, DollarSign, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface CalculationResult {
    currentCost: number
    proposedCost: number
    savings: number
    savingsPercentage: number
    annualSavings: number
    paybackPeriod: number
    roi: number
}

const serviceTypes = [
    { value: 'domestic', label: 'Vận chuyển nội địa', multiplier: 1 },
    { value: 'express', label: 'Giao hàng nhanh', multiplier: 1.3 },
    { value: 'cold-chain', label: 'Chuỗi lạnh', multiplier: 1.5 },
    { value: 'dangerous', label: 'Hàng nguy hiểm', multiplier: 1.8 }
]

const companyTypes = [
    { value: 'sme', label: 'Doanh nghiệp vừa và nhỏ (SME)', discount: 0.05 },
    { value: 'large', label: 'Doanh nghiệp lớn', discount: 0.15 },
    { value: 'corporation', label: 'Tập đoàn', discount: 0.25 }
]

const regions = [
    { value: 'north', label: 'Miền Bắc', cost: 80000 },
    { value: 'central', label: 'Miền Trung', cost: 90000 },
    { value: 'south', label: 'Miền Nam', cost: 85000 },
    { value: 'nationwide', label: 'Toàn quốc', cost: 95000 }
]

export default function ROICalculator() {
    const [formData, setFormData] = useState({
        monthlyVolume: '',
        averageDistance: '',
        currentProvider: '',
        currentCostPerKm: '',
        serviceType: 'domestic',
        companyType: 'sme',
        region: 'nationwide',
        additionalServices: [] as string[]
    })

    const [result, setResult] = useState<CalculationResult | null>(null)
    const [showResult, setShowResult] = useState(false)

    const calculateROI = () => {
        const volume = parseFloat(formData.monthlyVolume) || 0
        const distance = parseFloat(formData.averageDistance) || 0
        const currentCost = parseFloat(formData.currentCostPerKm) || 0

        // Base calculations
        const serviceMultiplier = serviceTypes.find(s => s.value === formData.serviceType)?.multiplier || 1
        const regionCost = regions.find(r => r.value === formData.region)?.cost || 95000
        const companyDiscount = companyTypes.find(c => c.value === formData.companyType)?.discount || 0.05

        // Our competitive pricing (20% lower base + volume discounts)
        const baseCostPerKm = regionCost * serviceMultiplier
        const volumeDiscount = volume > 100 ? 0.15 : volume > 50 ? 0.10 : volume > 20 ? 0.05 : 0
        const totalDiscount = companyDiscount + volumeDiscount

        const ourCostPerKm = baseCostPerKm * (1 - totalDiscount)

        // Monthly calculations
        const monthlyDistance = volume * distance
        const currentMonthlyCost = monthlyDistance * currentCost
        const proposedMonthlyCost = monthlyDistance * (ourCostPerKm / 1000) // Convert to VND per km

        const monthlySavings = currentMonthlyCost - proposedMonthlyCost
        const savingsPercentage = currentMonthlyCost > 0 ? (monthlySavings / currentMonthlyCost) * 100 : 0
        const annualSavings = monthlySavings * 12

        // ROI calculation (assuming some initial setup costs)
        const setupCost = volume * 50000 // Setup cost based on volume
        const paybackMonths = setupCost > 0 ? setupCost / monthlySavings : 0
        const roi = annualSavings > 0 ? ((annualSavings - setupCost) / setupCost) * 100 : 0

        const calculationResult: CalculationResult = {
            currentCost: currentMonthlyCost,
            proposedCost: proposedMonthlyCost,
            savings: monthlySavings,
            savingsPercentage,
            annualSavings,
            paybackPeriod: paybackMonths,
            roi: roi > 0 ? roi : 0
        }

        setResult(calculationResult)
        setShowResult(true)
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(amount)
    }

    const handleInputChange = (field: string, value: string | string[]) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    return (
        <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-6">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl mr-4">
                            <Calculator className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                            Tính Toán ROI & Tiết Kiệm Chi Phí
                        </h2>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Khám phá mức tiết kiệm chi phí logistics và ROI khi chuyển đổi sang Vận Tải Dương Lê.
                        Công cụ tính toán chính xác dựa trên dữ liệu thực tế từ 1000+ đối tác.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Calculator Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <DollarSign className="w-6 h-6 text-green-600 mr-3" />
                            Thông Tin Hiện Tại
                        </h3>

                        <div className="space-y-6">
                            {/* Monthly Volume */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    📦 Số chuyến vận chuyển/tháng
                                </label>
                                <input
                                    type="number"
                                    value={formData.monthlyVolume}
                                    onChange={(e) => handleInputChange('monthlyVolume', e.target.value)}
                                    placeholder="Ví dụ: 50"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                                />
                            </div>

                            {/* Average Distance */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    📏 Khoảng cách trung bình/chuyến (km)
                                </label>
                                <input
                                    type="number"
                                    value={formData.averageDistance}
                                    onChange={(e) => handleInputChange('averageDistance', e.target.value)}
                                    placeholder="Ví dụ: 150"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                                />
                            </div>

                            {/* Current Provider */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    🚛 Nhà cung cấp hiện tại
                                </label>
                                <input
                                    type="text"
                                    value={formData.currentProvider}
                                    onChange={(e) => handleInputChange('currentProvider', e.target.value)}
                                    placeholder="Ví dụ: Công ty ABC"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                                />
                            </div>

                            {/* Current Cost */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    💰 Chi phí hiện tại (VNĐ/km)
                                </label>
                                <input
                                    type="number"
                                    value={formData.currentCostPerKm}
                                    onChange={(e) => handleInputChange('currentCostPerKm', e.target.value)}
                                    placeholder="Ví dụ: 15000"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                                />
                            </div>

                            {/* Service Type */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    🔧 Loại dịch vụ
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.serviceType}
                                        onChange={(e) => handleInputChange('serviceType', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 appearance-none bg-white"
                                        aria-label="Loại dịch vụ"
                                    >
                                        {serviceTypes.map((service) => (
                                            <option key={service.value} value={service.value}>
                                                {service.label}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Company Type */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    🏢 Quy mô doanh nghiệp
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.companyType}
                                        onChange={(e) => handleInputChange('companyType', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 appearance-none bg-white"
                                        aria-label="Quy mô doanh nghiệp"
                                    >
                                        {companyTypes.map((type) => (
                                            <option key={type.value} value={type.value}>
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Region */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    🗺️ Khu vực hoạt động chính
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.region}
                                        onChange={(e) => handleInputChange('region', e.target.value)}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 appearance-none bg-white"
                                        aria-label="Khu vực hoạt động chính"
                                    >
                                        {regions.map((region) => (
                                            <option key={region.value} value={region.value}>
                                                {region.label}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                </div>
                            </div>

                            {/* Calculate Button */}
                            <motion.button
                                onClick={calculateROI}
                                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Calculator className="w-5 h-5 mr-2" />
                                Tính Toán ROI
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Results Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {showResult && result ? (
                            <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <TrendingUp className="w-6 h-6 mr-3" />
                                    Kết Quả Phân Tích ROI
                                </h3>

                                <div className="space-y-6">
                                    {/* Monthly Savings */}
                                    <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                                        <h4 className="text-lg font-semibold mb-4">💰 Tiết Kiệm Hàng Tháng</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm opacity-80">Chi phí hiện tại</p>
                                                <p className="text-xl font-bold">{formatCurrency(result.currentCost)}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm opacity-80">Chi phí với Dương Lê</p>
                                                <p className="text-xl font-bold text-green-200">{formatCurrency(result.proposedCost)}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                                            <p className="text-sm opacity-80">Tiết kiệm hàng tháng</p>
                                            <p className="text-3xl font-bold text-yellow-300">
                                                {formatCurrency(result.savings)}
                                                <span className="text-lg ml-2">({result.savingsPercentage.toFixed(1)}%)</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Annual Benefits */}
                                    <div className="bg-white bg-opacity-20 rounded-xl p-6 backdrop-blur-sm">
                                        <h4 className="text-lg font-semibold mb-4">📈 Lợi Ích Hàng Năm</h4>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm opacity-80">Tiết kiệm hàng năm</p>
                                                <p className="text-2xl font-bold text-green-200">{formatCurrency(result.annualSavings)}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm opacity-80">ROI (%)</p>
                                                <p className="text-2xl font-bold text-yellow-300">{result.roi.toFixed(0)}%</p>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-sm opacity-80">Thời gian hoàn vốn</p>
                                            <p className="text-xl font-bold">
                                                {result.paybackPeriod > 0 ? `${result.paybackPeriod.toFixed(1)} tháng` : 'Ngay lập tức'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-3">
                                        <motion.button
                                            className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            📊 Tải Báo Cáo Chi Tiết (PDF)
                                        </motion.button>
                                        <motion.button
                                            className="w-full border-2 border-white text-white py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            📞 Tư Vấn Với Chuyên Gia
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Calculator className="w-12 h-12 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Nhập Thông Tin Để Tính Toán
                                </h3>
                                <p className="text-gray-600">
                                    Điền đầy đủ thông tin bên trái và nhấn &ldquo;Tính Toán ROI&rdquo; để xem kết quả phân tích chi tiết
                                </p>
                            </div>
                        )}

                        {/* Benefits Overview */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <Users className="w-6 h-6 text-blue-600 mr-3" />
                                Lợi Ích Khi Chuyển Đổi
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-gray-900">Tiết kiệm chi phí 15-30%</p>
                                        <p className="text-sm text-gray-600">So với các nhà cung cấp khác trên thị trường</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-gray-900">Tăng hiệu quả vận hành</p>
                                        <p className="text-sm text-gray-600">Hệ thống tracking và báo cáo real-time</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-gray-900">Đội ngũ chuyên nghiệp 24/7</p>
                                        <p className="text-sm text-gray-600">Account manager riêng và hỗ trợ kỹ thuật</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <div>
                                        <p className="font-medium text-gray-900">Mạng lưới toàn quốc</p>
                                        <p className="text-sm text-gray-600">Phủ sóng 63 tỉnh thành với 1000+ đối tác</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Success Stories */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        🎯 Câu Chuyện Thành Công Thực Tế
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                company: 'ABC Distribution',
                                saving: '₫2.1 tỷ/năm',
                                percentage: '28%',
                                description: 'Tiết kiệm chi phí logistics cho chuỗi phân phối toàn quốc',
                                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop'
                            },
                            {
                                company: 'XYZ Electronics',
                                saving: '₫850 triệu/năm',
                                percentage: '22%',
                                description: 'Tối ưu vận chuyển linh kiện điện tử nhạy cảm',
                                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop'
                            },
                            {
                                company: 'DEF Manufacturing',
                                saving: '₫3.5 tỷ/năm',
                                percentage: '35%',
                                description: 'Giảm chi phí vận chuyển nguyên liệu và thành phẩm',
                                image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=250&fit=crop'
                            }
                        ].map((story, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl overflow-hidden border border-green-100"
                            >
                                {/* Company Image */}
                                <div className="h-32 overflow-hidden">
                                    <Image
                                        src={story.image}
                                        alt={story.company}
                                        width={400}
                                        height={128}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6">
                                    <div className="text-center mb-4">
                                        <div className="text-3xl font-bold text-green-600 mb-1">{story.saving}</div>
                                        <div className="text-lg font-semibold text-gray-900">Tiết kiệm {story.percentage}</div>
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2">{story.company}</h4>
                                    <p className="text-sm text-gray-600">{story.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
