/**
 * # AI CODING RULES
 * 
 * > **BẮT BUỘC**: AI phải đọc file này trước khi generate code.
 * > Mọi code vi phạm RULE phải được sửa lại trước khi hoàn tất.
 * 
 * ---
 * 
 * ## 🎭 0. Quy Tắc UI/UX Interaction (Modal, Toast, Notification)
 * 
 * ### 0.1. KHÔNG Dùng Native Popups
 * ```javascript
 * // ❌ TUYỆT ĐỐI KHÔNG dùng
 * window.confirm("Bạn có chắc?");
 * window.alert("Thành công!");
 * window.prompt("Nhập tên:");
 * 
 * // ✅ ĐÚNG - Dùng hệ thống có sẵn
 * import { useConfirmDialog } from '@/components/hooks/useConfirmDialog';
 * import { useToast } from '@/components/NotificationToast';
 * 
 * const { showConfirm } = useConfirmDialog();
 * const { addToast } = useToast();
 * 
 * // Confirm action
 * const confirmed = await showConfirm({
 *   title: 'Xác nhận xóa',
 *   message: 'Bạn có chắc chắn muốn xóa?',
 *   type: 'danger', // danger, success, warning, info
 *   confirmText: 'Xóa',
 *   cancelText: 'Hủy'
 * });
 * 
 * if (confirmed) {
 *   // Do action
 *   addToast('Đã xóa thành công', 'success');
 * }
 * ```
 * 
 * ### 0.2. Khi Nào Dùng Gì?
 * 
 * | Use Case | Component/Hook | Example |
 * |----------|---------------|---------|
 * | Xác nhận hành động (confirm) | `useConfirmDialog()` | Xóa, duyệt, hủy đơn |
 * | Thông báo ngắn (toast) | `useToast()` / `addToast()` | "Lưu thành công", "Có lỗi" |
 * | Hiển thị chi tiết | `Dialog` from shadcn/ui | Chi tiết đơn hàng, form edit |
 * | Thông báo quan trọng | `AdminNotificationBell` | Đơn mới, cần duyệt |
 * | Form nhập liệu phức tạp | `Dialog` with form | Tạo sản phẩm, edit user |
 * 
 * ### 0.3. Toast Message Guidelines
 * ```javascript
 * // ✅ ĐÚNG - Message rõ ràng, hữu ích
 * addToast('Đã duyệt thành viên Nguyễn Văn A', 'success');
 * addToast('Không thể xóa vì sản phẩm đang có đơn hàng', 'error');
 * addToast('Email đã tồn tại, vui lòng dùng email khác', 'warning');
 * 
 * // ❌ SAI - Message chung chung, không hữu ích
 * addToast('Thành công', 'success');
 * addToast('Lỗi', 'error');
 * addToast('Có gì đó không đúng', 'warning');
 * ```
 * 
 * ### 0.4. AnimatedIcon - Icon System Chuẩn
 * 
 * **QUAN TRỌNG**: Hệ thống icon CHÍNH THỨC của dự án này.
 * 
 * #### Workflow Bắt Buộc:
 * ```
 * 1. ĐỌC AnimatedIcon.jsx TRƯỚC (check Icon.* exports, dòng 278-443)
 * 2. Icon CẦN DÙNG đã có trong Icon.* chưa?
 * 3. CHƯA CÓ → Thêm vào AnimatedIcon.jsx + SAVE → Sau đó mới dùng
 * 4. Dùng: <Icon.TênIcon />
 * ```
 * 
 * #### Cách Dùng:
 * ```javascript
 * // ✅ ĐÚNG - Dùng AnimatedIcon có animation
 * import { Icon } from '@/components/ui/AnimatedIcon.jsx';
 * 
 * <Icon.Spinner />        // Loading spinner quay
 * <Icon.CheckCircle />    // Success với scale-in
 * <Icon.AlertCircle />    // Alert với pulse (DÙNG thay XCircle nếu cần)
 * <Icon.Ban />            // Ban/Cancel với shake
 * <Icon.Package />        // Package icon
 * <Icon.Bell />           // Bell với wiggle
 * 
 * // ❌ SAI - Import trực tiếp từ lucide-react
 * import { CheckCircle } from 'lucide-react'; // Gây lỗi
 * 
 * // ❌ SAI - Dùng icon chưa export trong Icon.*
 * <Icon.XCircle /> // Có thể chưa được export
 * ```
 * 
 * #### Icons Có Sẵn:
 * - Status: Spinner, Loading, CheckCircle, Check, AlertCircle, AlertTriangle, Info, Ban
 * - Actions: Bell, Send, Plus, Minus, Trash, Edit, Save, X, Copy, Download, Upload
 * - Business: DollarSign, Wallet, TrendingUp, Award, Trophy, Star, Crown, BarChart
 * - Users: User, Users, UserPlus, Heart, ThumbsUp, MessageCircle, Mail, Phone
 * - UI: Search, Filter, Menu, Grid, List, Settings, Bookmark
 * - Xem đầy đủ tại AnimatedIcon.jsx dòng 278-443
 * 
 * ### 0.5. Xử Lý Lỗi Trong Mutations
 * ```javascript
 * // ✅ ĐÚNG - Có try-catch, toast thông báo rõ ràng
 * const handleDelete = async (item) => {
 *   const confirmed = await showConfirm({
 *     title: 'Xóa sản phẩm',
 *     message: `Xóa "${item.name}"? Hành động này không thể hoàn tác.`,
 *     type: 'danger',
 *     confirmText: 'Xóa',
 *   });
 *   
 *   if (confirmed) {
 *     try {
 *       await deleteMutation.mutateAsync(item.id);
 *       addToast(`Đã xóa ${item.name}`, 'success');
 *     } catch (error) {
 *       addToast('Không thể xóa. Vui lòng thử lại.', 'error');
 *     }
 *   }
 * };
 * 
 * // ❌ SAI - Dùng confirm native, không xử lý lỗi
 * const handleDelete = async (item) => {
 *   if (confirm('Xóa?')) {
 *     await deleteMutation.mutateAsync(item.id);
 *   }
 * };
 * ```
 * 
 * ---
 * 
 * ## 📐 1. Kiến trúc Tổng Quan (3 Lớp)
 * 
 * ```
 * ┌─────────────────────────────────────────────────────────────┐
 * │                         UI LAYER                            │
 * │   (Components - Chỉ render, nhận props, emit events)        │
 * └─────────────────────────────────────────────────────────────┘
 *                               ▼
 * ┌─────────────────────────────────────────────────────────────┐
 * │                    FEATURE LOGIC LAYER                      │
 * │   (Hooks - State, business logic, orchestration)            │
 * └─────────────────────────────────────────────────────────────┘
 *                               ▼
 * ┌─────────────────────────────────────────────────────────────┐
 * │                    DATA/SERVICE LAYER                       │
 * │   (Services - API calls, DTO mapping, Result<T>)            │
 * └─────────────────────────────────────────────────────────────┘
 * ```
 * 
 * ### Nguyên tắc:
 * - **UI** → Chỉ render, KHÔNG gọi API trực tiếp
 * - **Feature Logic** → State, validate, xử lý nghiệp vụ, gọi service
 * - **Data/Service** → Gọi API, map dữ liệu, trả về `Result<T>`
 * 
 * ### ❌ KHÔNG ĐƯỢC:
 * ```javascript
 * // Trong component UI
 * const ProductList = () => {
 *   const [products, setProducts] = useState([]);
 *   useEffect(() => {
 *     base44.entities.Product.list().then(setProducts); // ❌ SAI
 *   }, []);
 * }
 * ```
 * 
 * ### ✅ ĐÚNG:
 * ```javascript
 * // UI Component
 * const ProductList = () => {
 *   const { products, isLoading } = useProductList(); // ✅ Dùng hook
 *   return <ProductGrid products={products} />;
 * }
 * 
 * // Hook
 * const useProductList = () => {
 *   return useQuery({
 *     queryKey: ['products'],
 *     queryFn: () => productAPI.list(), // ✅ Gọi service
 *   });
 * }
 * 
 * // Service
 * const productAPI = {
 *   list: async () => base44.entities.Product.list(), // ✅ API call
 * }
 * ```
 * 
 * ---
 * 
 * ## 🎨 2. Quy Tắc UI Layer
 * 
 * ### 2.1. UI là Presentation Only
 * - ❌ KHÔNG dùng `fetch`, `axios`, `base44.entities.*` trong component
 * - ❌ KHÔNG chứa business logic phức tạp
 * - ❌ KHÔNG tự xử lý validation phức tạp
 * - ✅ Chỉ render props, emit events qua callbacks
 * 
 * ### 2.2. Sử dụng Component Chuẩn
 * ```javascript
 * // ✅ ĐÚNG - Dùng component từ UI System
 * import { Button } from "@/components/ui/button";
 * import { BaseModal } from "@/components/shared/modal";
 * import { LoadingState, EmptyState } from "@/components/shared/ui";
 * 
 * // ❌ SAI - Tự viết lại
 * const MyButton = ({ children }) => <button className="...">{children}</button>;
 * ```
 * 
 * ### 2.3. Giới Hạn Kích Thước
 * - Component > 300 dòng → **PHẢI TÁCH NHỎ**
 * - Component làm > 1 nhiệm vụ → **PHẢI TÁCH NHỎ**
 * 
 * ### 2.4. Đặt Tên Rõ Ràng
 * ```javascript
 * // ✅ ĐÚNG
 * ProductListTable, OrderFormDialog, UserFilterBar, ReviewCard
 * 
 * // ❌ SAI
 * List, Form, Card, Item, Component1
 * ```
 * 
 * ---
 * 
 * ## 🧠 3. Quy Tắc Feature Logic (Hooks)
 * 
 * ### 3.1. Vị Trí Code
 * - Mọi state, business logic, orchestration → **hooks/features**
 * - Mỗi hook chỉ có **1 mục tiêu chính (Single Goal)**
 * 
 * ```javascript
 * // ✅ ĐÚNG - Single goal
 * useProductList()    // Chỉ lo list
 * useProductForm()    // Chỉ lo form create/edit
 * useProductDetail()  // Chỉ lo detail view
 * 
 * // ❌ SAI - Làm quá nhiều việc
 * useProductEverything() // List + Detail + Form + Filter + Export
 * ```
 * 
 * ### 3.2. Tách Hook Khi Cần
 * Nếu hook đang xử lý quá nhiều:
 * ```javascript
 * // ❌ SAI - Hook quá lớn
 * useProducts() {
 *   // 200 dòng: list + filter + pagination + CRUD + detail + export
 * }
 * 
 * // ✅ ĐÚNG - Tách nhỏ
 * useProductList()   // List + filter + pagination
 * useProductCRUD()   // Create/Update/Delete
 * useProductExport() // Export logic
 * ```
 * 
 * ### 3.3. Reuse Base Hooks
 * Trước khi tạo hook mới, kiểm tra:
 * 1. `useCaseRegistry` có use case tương tự?
 * 2. Có base hook có thể extend?
 * 
 * ```javascript
 * // ✅ ĐÚNG - Reuse base hook
 * import { useItemListBase } from "@/components/shared/hooks";
 * 
 * export function useProductList() {
 *   return useItemListBase({
 *     entityName: 'Product',
 *     queryKey: 'products',
 *     // Chỉ config khác biệt
 *   });
 * }
 * ```
 * 
 * ### 3.4. Không Duplicate Logic Client/Admin
 * ```javascript
 * // ✅ ĐÚNG - Base hook dùng chung
 * // shared/hooks/useItemListBase.js
 * export function useItemListBase(options) { /* logic chung */ }
 * 
 * // admin/hooks/useProducts.js
 * export function useProducts() {
 *   const base = useItemListBase({ activeOnly: false });
 *   // Thêm CRUD cho admin
 * }
 * 
 * // client/hooks/useProducts.js  
 * export function useProducts() {
 *   const base = useItemListBase({ activeOnly: true });
 *   // Thêm ratings cho client
 * }
 * ```
 * 
 * ---
 * 
 * ## 📡 4. Quy Tắc Data/Service Layer
 * 
 * ### 4.1. Vị Trí API Calls
 * - **TẤT CẢ** API calls phải nằm trong service layer
 * - Không hardcode URL trong UI/hook
 * 
 * ```javascript
 * // ✅ ĐÚNG - Service layer
 * // services/productService.js
 * export const productAPI = {
 *   list: () => base44.entities.Product.list(),
 *   create: (data) => base44.entities.Product.create(data),
 * };
 * 
 * // ❌ SAI - Trong component/hook
 * base44.entities.Product.list(); // Không được gọi trực tiếp
 * ```
 * 
 * ### 4.2. Trả Về Result<T>
 * ```javascript
 * // ✅ ĐÚNG - Dùng Result wrapper
 * import { success, failure, ErrorCodes } from "@/components/data/types";
 * 
 * export const productAPI = {
 *   create: async (data) => {
 *     try {
 *       if (!data.name) {
 *         return failure('Tên không được trống', ErrorCodes.VALIDATION_ERROR);
 *       }
 *       const product = await base44.entities.Product.create(data);
 *       return success(product);
 *     } catch (err) {
 *       return failure(err.message, ErrorCodes.SERVER_ERROR);
 *     }
 *   }
 * };
 * 
 * // ❌ SAI - Trả dữ liệu raw
 * create: async (data) => {
 *   return await base44.entities.Product.create(data);
 * }
 * ```
 * 
 * ### 4.3. Mapping DTO Tại Service
 * ```javascript
 * // ✅ ĐÚNG - Map tại service
 * const productAPI = {
 *   list: async () => {
 *     const raw = await base44.entities.Product.list();
 *     return raw.map(mapToProductDTO); // Map ở đây
 *   }
 * };
 * 
 * // ❌ SAI - Map rải rác trong component
 * products.map(p => ({ ...p, displayPrice: formatPrice(p.price) }));
 * ```
 * 
 * ### 4.4. Khi Thêm Service Mới
 * 1. Tạo DTO input/output trong `types.js`
 * 2. Xử lý lỗi bằng `ErrorCodes`
 * 3. Export qua `components/data/index.js`
 * 
 * ---
 * 
 * ## ⚠️ 5. Quy Tắc Error & Result
 * 
 * ### 5.1. Luôn Dùng Result<T>
 * ```javascript
 * import { success, failure, ErrorCodes } from "@/components/data/types";
 * 
 * // ✅ ĐÚNG
 * return success(data);
 * return failure('Lỗi validation', ErrorCodes.VALIDATION_ERROR);
 * 
 * // ❌ SAI
 * throw new Error("Lỗi gì đó");
 * return { error: "random message" };
 * ```
 * 
 * ### 5.2. Error Codes Chuẩn
 * ```javascript
 * // Dùng ErrorCodes đã định nghĩa
 * ErrorCodes.VALIDATION_ERROR  // Lỗi validate input
 * ErrorCodes.NOT_FOUND         // Không tìm thấy
 * ErrorCodes.UNAUTHORIZED      // Chưa đăng nhập
 * ErrorCodes.FORBIDDEN         // Không có quyền
 * ErrorCodes.NETWORK_ERROR     // Lỗi mạng
 * ErrorCodes.SERVER_ERROR      // Lỗi server
 * ```
 * 
 * ### 5.3. UI Không Tự Bịa Message
 * ```javascript
 * // ✅ ĐÚNG - Dùng error mapping
 * import { mapError } from "@/components/shared/errors";
 * 
 * const { userMessage, displayType } = mapError(result.code, { domain: 'product' });
 * toast.error(userMessage);
 * 
 * // ❌ SAI - Hardcode message
 * toast.error("Có lỗi xảy ra khi tạo sản phẩm");
 * alert("Lỗi không xác định");
 * ```
 * 
 * ---
 * 
 * ## 🆕 6. Quy Tắc Thêm Feature Mới
 * 
 * Khi tạo tính năng mới (vd: `review`, `category`), làm theo thứ tự:
 * 
 * ### Bước 1: DTO & Types
 * ```javascript
 * // components/data/types.js
 * /**
 *  * @typedef {Object} ReviewCreateDTO
 *  * @property {string} item_id
 *  * @property {number} rating
 *  * @property {string} comment
 *  */
 * ```
 * 
 * ### Bước 2: Service
 * ```javascript
 * // services/reviewService.js
 * export const reviewAPI = {
 *   create: async (data) => {
 *     // Validate
 *     if (!data.rating) return failure('...', ErrorCodes.VALIDATION_ERROR);
 *     // Call API
 *     const review = await base44.entities.Review.create(data);
 *     return success(review);
 *   }
 * };
 * ```
 * 
 * ### Bước 3: Hook
 * ```javascript
 * // hooks/useReviewForm.js
 * export function useReviewForm() {
 *   const mutation = useMutation({
 *     mutationFn: reviewAPI.create,
 *   });
 *   // Return state + handlers
 * }
 * ```
 * 
 * ### Bước 4: UI
 * ```javascript
 * // components/ReviewForm.jsx
 * export function ReviewForm() {
 *   const { submit, isLoading, error } = useReviewForm();
 *   return <form onSubmit={submit}>...</form>;
 * }
 * ```
 * 
 * ### Bước 5: Update UseCaseRegistry (BẮT BUỘC)
 * ```javascript
 * // components/data/useCaseRegistry.js
 * {
 *   id: 'review.create',
 *   domain: 'review',
 *   description: 'Tạo đánh giá mới',
 *   input: 'ReviewCreateDTO',
 *   output: 'Result<Review>',
 *   service: 'reviewAPI.create',
 *   hook: 'useReviewForm',
 * }
 * ```
 * 
 * ---
 * 
 * ## ⚡ 7. Quy Tắc Performance
 * 
 * ### 7.1. Debounce Search/Filter
 * ```javascript
 * // ✅ ĐÚNG
 * import { useDebouncedValue } from "@/components/shared/utils";
 * 
 * const debouncedSearch = useDebouncedValue(searchTerm, 300);
 * 
 * // ❌ SAI - Gọi API mỗi keystroke
 * useEffect(() => {
 *   fetchProducts(searchTerm);
 * }, [searchTerm]);
 * ```
 * 
 * ### 7.2. Pagination
 * ```javascript
 * // ✅ ĐÚNG - Có pagination
 * const { data, page, setPage } = usePaginatedList();
 * 
 * // ❌ SAI - Load all
 * const allProducts = await productAPI.list(10000);
 * ```
 * 
 * ### 7.3. Cache & Stale Time
 * ```javascript
 * // ✅ ĐÚNG
 * useQuery({
 *   queryKey: ['products'],
 *   queryFn: productAPI.list,
 *   staleTime: 30 * 1000, // 30s cache
 * });
 * ```
 * 
 * ### 7.4. Loading States
 * ```javascript
 * // ✅ ĐÚNG - Dùng component chuẩn
 * import { LoadingState, EmptyState, ErrorState } from "@/components/shared/ui";
 * 
 * if (isLoading) return <LoadingState />;
 * if (error) return <ErrorState error={error} />;
 * if (!data.length) return <EmptyState message="Chưa có dữ liệu" />;
 * ```
 * 
 * ---
 * 
 * ## 🔄 8. Tránh Circular Dependency Giữa Service/Module
 * 
 * ### 8.1. Nguyên Tắc Phụ Thuộc
 * 
 * **Service chỉ được phép phụ thuộc XUỐNG:**
 * - Repository / data-access layer
 * - Helper / util / core domain function
 * - Shared types / constants
 * 
 * **KHÔNG ĐƯỢC import trực tiếp chéo giữa các service cùng tầng:**
 * ```javascript
 * // ❌ SAI - Circular dependency
 * // CheckoutService.js
 * import ReferralService from './ReferralService';
 * 
 * // ReferralService.js  
 * import CheckoutService from './CheckoutService'; // ← Circular!
 * ```
 * 
 * ### 8.2. Giải Pháp Khi Cần Logic Chung
 * 
 * **Nếu 2 service cần dùng chung logic → PHẢI tách ra module riêng:**
 * 
 * ```javascript
 * // ✅ ĐÚNG - Tách logic chung
 * // services/referralCore.js
 * export const referralCore = {
 *   validateCode: (code) => { /* ... */ },
 *   calculateCommission: (amount, rate) => { /* ... */ }
 * };
 * 
 * // services/CheckoutService.js
 * import { referralCore } from './referralCore';
 * const validation = referralCore.validateCode(code); // ✅ OK
 * 
 * // services/ReferralService.js
 * import { referralCore } from './referralCore';
 * const commission = referralCore.calculateCommission(...); // ✅ OK
 * ```
 * 
 * **Pattern: Bridge Module**
 * ```javascript
 * // ✅ ĐÚNG - Tạo bridge cho logic cross-domain
 * // services/CheckoutReferralBridge.js
 * export const checkoutReferralBridge = {
 *   applyReferralToOrder: async (order, referralCode) => {
 *     // Logic kết nối Checkout ↔ Referral
 *     // KHÔNG import CheckoutService hay ReferralService
 *     // Chỉ import repository/core
 *   }
 * };
 * ```
 * 
 * ### 8.3. KHÔNG Dùng Dynamic Import Để Né
 * 
 * ```javascript
 * // ❌ SAI - Dùng await import() để né circular
 * // ReferralService.js
 * export async function processOrder(order) {
 *   const CheckoutService = await import('./CheckoutService');
 *   return CheckoutService.createOrder(order); // ← Code smell!
 * }
 * 
 * // ✅ ĐÚNG - Refactor kiến trúc
 * // Tách logic ra referralCore hoặc dùng dependency injection
 * ```
 * 
 * ### 8.4. Dependency Injection Pattern
 * 
 * **Khi service cần gọi service khác → truyền qua param thay vì import:**
 * 
 * ```javascript
 * // ✅ ĐÚNG - DI pattern
 * // services/ReferralService.js
 * export const referralService = {
 *   processOrderReferral: async (order, { lockCustomer, notifyUser }) => {
 *     // lockCustomer và notifyUser được inject từ ngoài
 *     if (order.referral_code) {
 *       await lockCustomer(order.customer_id);
 *       await notifyUser(order.customer_email);
 *     }
 *   }
 * };
 * 
 * // hooks/useOrderCheckout.js
 * import { referralService } from '@/services/ReferralService';
 * import { customerService } from '@/services/CustomerService';
 * 
 * const handleCheckout = async (order) => {
 *   await referralService.processOrderReferral(order, {
 *     lockCustomer: customerService.lockReferral,
 *     notifyUser: notificationService.send
 *   }); // ✅ Inject dependencies
 * };
 * ```
 * 
 * ### 8.5. Dấu Hiệu Cần Refactor Ngay
 * 
 * **Khi refactor hoặc tạo code mới, nếu gặp:**
 * 
 * 1. **Service A import service B, và service B (trực tiếp hoặc gián tiếp) import lại service A**
 *    - → DỪNG, tách logic chung ra module core
 * 
 * 2. **Service và hook/component cùng import nhau**
 *    - → DỪNG, review kiến trúc (service không được import hook)
 * 
 * 3. **Cần dùng `import("./XService")` trong chính service layer**
 *    - → DỪNG, refactor sang bridge module hoặc DI pattern
 * 
 * 4. **Thấy comment `// TODO: Fix circular dependency later`**
 *    - → DỪNG, sửa ngay, không để sau
 * 
 * ### 8.6. Workflow Khi Phát Hiện Circular
 * 
 * ```
 * ┌───────────────────────────────────────┐
 * │ 1. Xác định logic chung cần extract  │
 * ├───────────────────────────────────────┤
 * │ 2. Tạo module core/bridge riêng      │
 * ├───────────────────────────────────────┤
 * │ 3. Move logic chung vào core         │
 * ├───────────────────────────────────────┤
 * │ 4. Service A, B đều import core      │
 * │    (KHÔNG import lẫn nhau)            │
 * ├───────────────────────────────────────┤
 * │ 5. Test lại, đảm bảo không circular  │
 * └───────────────────────────────────────┘
 * ```
 * 
 * ### 8.7. Ví Dụ Thực Tế
 * 
 * **❌ TRƯỚC (Circular):**
 * ```javascript
 * // CheckoutService.js
 * import ReferralService from './ReferralService';
 * export const processCheckout = (order) => {
 *   ReferralService.processOrderReferral(order); // ← Import ReferralService
 * };
 * 
 * // ReferralService.js
 * import CheckoutService from './CheckoutService';
 * export const updateMemberRank = (member) => {
 *   CheckoutService.recalculateStats(member); // ← Import CheckoutService (Circular!)
 * };
 * ```
 * 
 * **✅ SAU (Fixed):**
 * ```javascript
 * // services/orderReferralCore.js - Logic chung
 * export const orderReferralCore = {
 *   linkOrderToReferrer: (order, referrer) => { /* ... */ },
 *   calculateStats: (orders) => { /* ... */ }
 * };
 * 
 * // CheckoutService.js
 * import { orderReferralCore } from './orderReferralCore';
 * export const processCheckout = (order) => {
 *   orderReferralCore.linkOrderToReferrer(order, referrer); // ✅ OK
 * };
 * 
 * // ReferralService.js
 * import { orderReferralCore } from './orderReferralCore';
 * export const updateMemberRank = (member) => {
 *   const stats = orderReferralCore.calculateStats(orders); // ✅ OK
 * };
 * ```
 * 
 * ---
 * 
 * ## 📁 9. Quy Tắc Kích Thước File
 * 
 * ### 9.1. Single Goal Per File
 * - Mỗi file chỉ giải quyết **1 nhiệm vụ rõ ràng**
 * - 1 component chính / 1 hook chính / 1 service logic
 * 
 * ### 9.2. Giới Hạn Dòng
 * | Loại File | Giới Hạn | Hành Động |
 * |-----------|----------|-----------|
 * | Component | 300 dòng | Tách component con |
 * | Hook | 200 dòng | Tách logic riêng |
 * | Service | 250 dòng | Tách theo domain |
 * 
 * ### 9.3. Tự Động Tách
 * Khi file vượt giới hạn, AI **PHẢI**:
 * 1. Xác định các phần có thể tách
 * 2. Tạo file mới với tên rõ ràng
 * 3. Import/export đúng cách
 * 
 * ```javascript
 * // ❌ SAI - File quá lớn
 * // ProductPage.jsx (500 dòng)
 * // Chứa: List + Form + Detail + Filters + Export
 * 
 * // ✅ ĐÚNG - Tách nhỏ
 * // ProductPage.jsx (100 dòng) - Orchestrator
 * // ProductList.jsx (150 dòng)
 * // ProductForm.jsx (120 dòng)
 * // ProductFilters.jsx (80 dòng)
 * ```
 * 
 * ### 9.4. Tên File Rõ Nghĩa
 * ```javascript
 * // ✅ ĐÚNG
 * ProductListTable.jsx
 * OrderFormDialog.jsx
 * useProductCRUD.js
 * 
 * // ❌ SAI
 * index.js (trong mọi folder)
 * utils.js (quá chung chung)
 * helpers.js
 * ```
 * 
 * ---
 * 
 * ## ♻️ 10. Quy Tắc Coding Style & Reuse
 * 
 * ### 10.1. Ưu Tiên Reuse
 * Trước khi tạo mới, kiểm tra:
 * 1. `useCaseRegistry` có use case tương tự?
 * 2. `components/shared/` có component dùng được?
 * 3. `services/` có API method sẵn?
 * 
 * ### 10.2. Không Copy-Paste
 * ```javascript
 * // ❌ SAI - Copy logic
 * // useProductList.js
 * const filteredProducts = products.filter(p => p.name.includes(search));
 * 
 * // useServiceList.js
 * const filteredServices = services.filter(s => s.name.includes(search)); // Copy
 * 
 * // ✅ ĐÚNG - Tách thành helper
 * // utils/filterBySearch.js
 * export const filterBySearch = (items, search, field = 'name') => 
 *   items.filter(item => item[field]?.toLowerCase().includes(search.toLowerCase()));
 * ```
 * 
 * ### 10.3. Không Hardcode
 * ```javascript
 * // ❌ SAI
 * if (status === 'pending') // Magic string
 * const PAGE_SIZE = 20; // Trong component
 * 
 * // ✅ ĐÚNG
 * // constants/orderStatus.js
 * export const ORDER_STATUS = { PENDING: 'pending', ... };
 * 
 * // config/pagination.js
 * export const DEFAULT_PAGE_SIZE = 20;
 * ```
 * 
 * ### 10.4. Hạn Chế `any`
 * ```javascript
 * // ❌ SAI
 * const handleData = (data: any) => { ... }
 * 
 * // ✅ ĐÚNG
 * /** @param {Product[]} products */
 * const handleData = (products) => { ... }
 * ```
 * 
 * ---
 * 
 * ## 🧪 11. Quy Tắc Testing
 * 
 * ### 11.1. Khi Thêm Use Case Mới
 * Thêm ít nhất 1-2 test:
 * - Case thành công
 * - Case lỗi validate / lỗi nghiệp vụ
 * 
 * ### 11.2. Tập Trung Test
 * - ✅ Service methods
 * - ✅ Use case logic
 * - ✅ Business rules
 * - ❌ Không test UI phức tạp
 * 
 * ### 11.3. Cấu Trúc Test
 * ```javascript
 * // __tests__/productService.test.js
 * export const testProductCreateValidation = async () => {
 *   const result = await productAPI.create({ price: 0 });
 *   assertFalse(result.success);
 *   assertEqual(result.code, ErrorCodes.VALIDATION_ERROR);
 * };
 * ```
 * 
 * ---
 * 
 * ## 📖 12. Quy Tắc Đọc RULE Trước Khi Code
 * 
 * ### Workflow Bắt Buộc:
 * 
 * ```
 * ┌─────────────────────────────────────────┐
 * │ 1. Đọc AI-CODING-RULES.jsx              │
 * ├─────────────────────────────────────────┤
 * │ 2. Nếu làm việc với module:            │
 * │    → Đọc README.md trong module đó      │
 * │    (features/<module>/README.md)        │
 * ├─────────────────────────────────────────┤
 * │ 3. Đọc useCaseRegistry                  │
 * ├─────────────────────────────────────────┤
 * │ 4. Đọc SAASPlanUpdate.md (nếu làm task │
 * │    SaaS/multi-tenant/billing/commission)│
 * ├─────────────────────────────────────────┤
 * │ 5. Tìm use case/service/hook có thể    │
 * │    reuse trong codebase                 │
 * │    "Scan project rules and detect       │
 * │    reusable logic instead of recreating"│
 * ├─────────────────────────────────────────┤
 * │ 6. Chỉ tạo code mới khi:               │
 * │    - Không có node phù hợp, HOẶC       │
 * │    - Reuse làm code phức tạp hơn       │
 * ├─────────────────────────────────────────┤
 * │ 7. Tự kiểm tra code theo RULE          │
 * │    - Sửa nếu vi phạm                   │
 * └─────────────────────────────────────────┘
 * ```
 * 
 * ### 12.1. SaaS Upgrade Tracking (BẮT BUỘC)
 * 
 * **Khi làm task liên quan SaaS/Multi-tenant:**
 * 
 * ```
 * ┌─────────────────────────────────────────┐
 * │ 1. ĐỌC docs/SAASPlanUpdate.md TRƯỚC    │
 * ├─────────────────────────────────────────┤
 * │ 2. Xác định task đang làm thuộc phase  │
 * │    nào, task ID là gì                   │
 * ├─────────────────────────────────────────┤
 * │ 3. Update status task: ⬜ → 🔄         │
 * ├─────────────────────────────────────────┤
 * │ 4. Hoàn thành code                     │
 * ├─────────────────────────────────────────┤
 * │ 5. Update status task: 🔄 → ✅         │
 * ├─────────────────────────────────────────┤
 * │ 6. Nếu hoàn thành phase: update phase  │
 * │    status + viết summary CHANGELOG     │
 * └─────────────────────────────────────────┘
 * ```
 * 
 * **Các task SaaS bao gồm:**
 * - Commission processing
 * - Billing/Invoice automation
 * - Tenant data isolation
 * - Usage metering & enforcement
 * - Marketplace/Shop features
 * - Subscription management
 * 
 * ### Checklist Trước Khi Hoàn Tất:
 * 
 * - [ ] Code theo đúng 3 lớp (UI → Hook → Service)?
 * - [ ] UI không gọi API trực tiếp?
 * - [ ] Dùng `Result<T>` và `ErrorCodes`?
 * - [ ] File không quá dài?
 * - [ ] Đã update `useCaseRegistry` (nếu thêm use case)?
 * - [ ] Có reuse được gì từ codebase không?
 * - [ ] Error messages dùng `mapError()`?
 * 
 * ---
 * 
 * ## 📂 Cấu Trúc Folder Chuẩn
 * 
 * ```
 * components/
 * ├── admin/
 * │   ├── hooks/          # Admin-specific hooks
 * │   ├── services/       # Admin services
 * │   └── pages/          # Admin page components
 * ├── client/
 * │   ├── hooks/          # Client-specific hooks
 * │   └── products/       # Client product components
 * ├── shared/
 * │   ├── hooks/          # Base hooks (useItemListBase, useAdminCRUD)
 * │   ├── errors/         # Error mapping
 * │   ├── ui/             # Shared UI components
 * │   └── utils/          # Utilities (debounce, formatters)
 * ├── data/
 * │   ├── types.js        # DTOs, Result types
 * │   ├── useCaseRegistry.js
 * │   ├── services/       # Data services
 * │   └── index.js        # Central exports
 * └── ui/                 # Shadcn components
 * ```
 * 
 * ---
 * 
 * ## 🔗 13. Quy Tắc Routing (React Router DOM)
 * 
 * ### 13.1. LUÔN Dùng react-router-dom
 * Để đảm bảo SPA navigation reactive và hoạt động đúng:
 * 
 * ```javascript
 * // ❌ SAI - Không reactive, gây bug khi navigate
 * const urlParams = new URLSearchParams(window.location.search);
 * const id = urlParams.get('id');
 * const path = window.location.pathname;
 * 
 * // ✅ ĐÚNG - Reactive với URL changes
 * import { useSearchParams, useLocation, useParams } from 'react-router-dom';
 * 
 * const [searchParams] = useSearchParams();
 * const id = searchParams.get('id');
 * const location = useLocation();
 * const { slug } = useParams();
 * ```
 * 
 * ### 13.2. Hooks Routing Chuẩn
 * | Mục đích | Hook |
 * |----------|------|
 * | Query params (?id=123) | `useSearchParams()` |
 * | Route params (/post/:id) | `useParams()` |
 * | Current location | `useLocation()` |
 * | Programmatic navigate | `useNavigate()` |
 * 
 * ### 13.3. Lý Do
 * - `window.location.*` **KHÔNG reactive** - component không re-render khi URL thay đổi trong SPA
 * - `useSearchParams`, `useParams` là reactive - tự động trigger re-render khi URL thay đổi
 * - Đảm bảo navigation trong SPA hoạt động mượt mà
 * 
 * ---
 * 
 * ## 📦 14. Module Architecture Rules (Kiến trúc Module)
 * 
 * ### 14.1. Quy Tắc Tổ Chức Module
 * 
 * **Mọi tính năng mới PHẢI được triển khai theo module (feature folder):**
 * 
 * ```
 * features/
 * ├── ecard/
 * │   ├── ui/              # UI Layer - Components, Pages
 * │   │   ├── EcardProfile.jsx
 * │   │   ├── ConnectionsTab.jsx
 * │   │   └── GiftCard.jsx
 * │   ├── domain/          # Business Logic - Rules, Validation, Policies
 * │   │   ├── connectionRules.js
 * │   │   ├── giftPolicies.js
 * │   │   └── validators.js
 * │   ├── data/            # Data Layer - API calls, Repositories
 * │   │   ├── ecardRepository.js
 * │   │   ├── connectionRepository.js
 * │   │   └── api.js
 * │   ├── types/           # DTOs, Schemas, Interfaces
 * │   │   ├── EcardDTO.ts
 * │   │   └── ConnectionDTO.ts
 * │   ├── hooks/           # Custom Hooks (orchestration)
 * │   │   ├── useEcardProfile.js
 * │   │   └── useConnections.js
 * │   └── index.js         # Public API - Module exports
 * └── referral/
 *     ├── ui/
 *     ├── domain/
 *     ├── data/
 *     ├── types/
 *     ├── hooks/
 *     └── index.js
 * ```
 * 
 * ### 14.2. Bắt Buộc Tách Lớp Rõ Ràng
 * 
 * **Mỗi module PHẢI có cấu trúc:**
 * 
 * | Folder | Chức năng | Import được gì |
 * |--------|-----------|----------------|
 * | `ui/` | Components, Pages, UI only | hooks/, types/, shared/ui |
 * | `domain/` | Business rules, validation | types/, shared/types |
 * | `data/` | API calls, repositories | types/, base44 SDK |
 * | `types/` | DTOs, schemas | Không import gì |
 * | `hooks/` | Orchestration, state | domain/, data/, types/ |
 * | `index.js` | Public exports | Tất cả nội bộ |
 * 
 * **Nguyên tắc:**
 * - ❌ UI KHÔNG được gọi trực tiếp data/
 * - ❌ domain/ KHÔNG được import UI
 * - ✅ UI → hooks → domain + data
 * - ✅ index.js export public surface của module
 * 
 * ### 14.3. Module Public API (index.js)
 * 
 * ```javascript
 * // ✅ ĐÚNG - Module chỉ export public API
 * // features/ecard/index.js
 * export { useEcardProfile, useConnections } from './hooks';
 * export { EcardProfile, ConnectionsTab } from './ui';
 * export type { EcardDTO, ConnectionDTO } from './types';
 * 
 * // ❌ SAI - Export tất cả chi tiết nội bộ
 * export * from './data/ecardRepository'; // KHÔNG được export repository ra ngoài
 * export * from './domain/connectionRules'; // KHÔNG được export rules ra ngoài
 * ```
 * 
 * ### 14.4. Single Responsibility Per File
 * 
 * ```javascript
 * // ✅ ĐÚNG - Mỗi file 1 nhiệm vụ rõ ràng
 * // domain/connectionRules.js - Chỉ chứa business rules
 * export const canConnect = (user1, user2) => { /* validation */ };
 * export const isValidCareLevel = (level) => { /* validation */ };
 * 
 * // data/connectionRepository.js - Chỉ chứa data access
 * export const saveConnection = async (data) => { /* DB call */ };
 * export const listConnections = async (userId) => { /* DB call */ };
 * 
 * // ❌ SAI - 1 file làm nhiều việc
 * // connectionService.js - Lẫn lộn UI, domain, data
 * export const ConnectionService = {
 *   renderCard: () => { /* UI */ },      // ← SAI
 *   validate: () => { /* domain */ },    // ← OK
 *   saveToDb: () => { /* data */ }       // ← OK
 * };
 * ```
 * 
 * ---
 * 
 * ## 🔗 15. Loose Coupling Rules (Liên kết lỏng)
 * 
 * ### 15.1. Module Chỉ Giao Tiếp Qua Contract
 * 
 * **Module KHÔNG được biết chi tiết nội bộ của module khác:**
 * 
 * ```javascript
 * // ✅ ĐÚNG - Import qua public API
 * import { useEcardProfile } from '@/features/ecard';
 * import { useReferral } from '@/features/referral';
 * 
 * // ❌ SAI - Import sâu vào nội bộ module
 * import { ecardRepository } from '@/features/ecard/data/ecardRepository';
 * import { connectionRules } from '@/features/ecard/domain/connectionRules';
 * ```
 * 
 * ### 15.2. Cấm Import Chéo Tùy Tiện
 * 
 * **Module A và Module B phải giao tiếp qua:**
 * 1. Public API của module (exports từ index.js)
 * 2. Shared contracts (types/events/utils từ shared/)
 * 3. Event bus / mediator pattern
 * 
 * ```javascript
 * // ✅ ĐÚNG - Giao tiếp qua public API
 * // features/referral/hooks/useReferralCheckout.js
 * import { useEcardProfile } from '@/features/ecard'; // Public API
 * import type { EcardDTO } from '@/features/ecard'; // Public type
 * 
 * // ❌ SAI - Import trực tiếp vào nội bộ
 * import { ecardRepository } from '@/features/ecard/data/ecardRepository';
 * ```
 * 
 * ### 15.3. Shared Contracts
 * 
 * **Khi nhiều module cần dùng chung:**
 * 
 * ```
 * shared/
 * ├── types/
 * │   ├── UserDTO.ts       # Shared DTOs
 * │   ├── ResultType.ts    # Shared Result<T>
 * │   └── ErrorCodes.ts    # Shared error codes
 * ├── events/
 * │   ├── EventBus.js      # Event system
 * │   └── DomainEvents.js  # Domain events
 * └── utils/
 *     ├── validators.js    # Common validators
 *     └── formatters.js    # Common formatters
 * ```
 * 
 * ```javascript
 * // ✅ ĐÚNG - Dùng shared contracts
 * import type { UserDTO } from '@/shared/types';
 * import { EventBus } from '@/shared/events';
 * 
 * // features/ecard/domain/connectionRules.js
 * export const validateConnection = (user: UserDTO) => {
 *   // Business logic using shared type
 * };
 * ```
 * 
 * ### 15.4. Bridge Pattern Cho Cross-Module Logic
 * 
 * **Khi 2 module cần kết hợp logic:**
 * 
 * ```javascript
 * // ✅ ĐÚNG - Tạo bridge module
 * // features/bridges/ecardReferralBridge.js
 * import { useEcardProfile } from '@/features/ecard';
 * import { useReferral } from '@/features/referral';
 * 
 * export const useEcardReferralBridge = () => {
 *   const ecard = useEcardProfile();
 *   const referral = useReferral();
 *   
 *   return {
 *     connectWithReferral: async (slug, referralCode) => {
 *       // Bridge logic kết nối 2 module
 *     }
 *   };
 * };
 * 
 * // ❌ SAI - Module A import trực tiếp logic của module B
 * // features/ecard/hooks/useConnections.js
 * import { referralRepository } from '@/features/referral/data/referralRepository';
 * ```
 * 
 * ---
 * 
 * ## ♻️ 16. Refactor Rules for Modules
 * 
 * ### 16.1. Quy Tắc Refactor Ưu Tiên
 * 
 * **Khi sửa/thêm tính năng, PHẢI:**
 * 1. Gom logic về đúng module
 * 2. Tách file theo single-responsibility
 * 3. Loại bỏ duplicate bằng cách đưa về domain/ hoặc shared/
 * 4. Sửa code "lẫn lớp" về đúng vị trí
 * 
 * ```javascript
 * // ❌ TRƯỚC - Code lẫn lộn
 * // components/EcardProfile.jsx (300 dòng)
 * export default function EcardProfile() {
 *   const [profile, setProfile] = useState(null);
 *   
 *   // ❌ UI gọi trực tiếp API
 *   useEffect(() => {
 *     base44.entities.EcardProfile.list().then(setProfile);
 *   }, []);
 *   
 *   // ❌ Business logic trong UI
 *   const validateProfile = (data) => {
 *     if (!data.name) return 'Name required';
 *     if (data.name.length < 3) return 'Name too short';
 *     // ... 50 dòng validation
 *   };
 *   
 *   return <div>...</div>;
 * }
 * 
 * // ✅ SAU - Refactor theo module
 * // features/ecard/ui/EcardProfile.jsx (50 dòng)
 * import { useEcardProfile } from '../hooks';
 * 
 * export default function EcardProfile() {
 *   const { profile, isLoading, updateProfile } = useEcardProfile();
 *   return <div>...</div>;
 * }
 * 
 * // features/ecard/hooks/useEcardProfile.js
 * import { profileValidation } from '../domain/validators';
 * import { ecardRepository } from '../data';
 * 
 * export function useEcardProfile() {
 *   // Orchestration logic
 * }
 * 
 * // features/ecard/domain/validators.js
 * export const profileValidation = {
 *   validateName: (name) => { /* validation */ }
 * };
 * 
 * // features/ecard/data/ecardRepository.js
 * export const ecardRepository = {
 *   getProfile: async (userId) => { /* API call */ }
 * };
 * ```
 * 
 * ### 16.2. Phát Hiện Code Cần Refactor
 * 
 * **Dấu hiệu cần refactor ngay:**
 * 
 * | Vấn đề | Giải pháp |
 * |--------|-----------|
 * | UI gọi trực tiếp base44.entities.* | Tạo repository trong data/ |
 * | Component > 300 dòng | Tách thành module với ui/ nhỏ hơn |
 * | Business logic trong component | Di chuyển sang domain/ |
 * | Duplicate validation logic | Gom vào shared/validators hoặc domain/ |
 * | Service import service khác | Tạo core module hoặc bridge |
 * | File tên "utils.js" chứa nhiều thứ | Tách theo domain cụ thể |
 * 
 * ### 16.3. Workflow Refactor Module
 * 
 * ```
 * ┌─────────────────────────────────────────┐
 * │ 1. Xác định module boundaries           │
 * │    (feature nào thuộc module nào)       │
 * ├─────────────────────────────────────────┤
 * │ 2. Tạo cấu trúc folder module           │
 * │    ui/, domain/, data/, types/, hooks/  │
 * ├─────────────────────────────────────────┤
 * │ 3. Di chuyển code về đúng lớp           │
 * │    - UI → ui/                            │
 * │    - Logic → domain/                     │
 * │    - API → data/                         │
 * ├─────────────────────────────────────────┤
 * │ 4. Tạo index.js export public API       │
 * ├─────────────────────────────────────────┤
 * │ 5. Update imports trong code khác       │
 * │    import từ module public API           │
 * ├─────────────────────────────────────────┤
 * │ 6. Test lại, đảm bảo không break        │
 * └─────────────────────────────────────────┘
 * ```
 * 
 * ---
 * 
 * ## 📖 17. Module Spec Reference
 * 
 * ### 17.1. Quy Định Đọc Module README (BẮT BUỘC)
 * 
 * **Before coding, scan project rules and detect reusable logic instead of recreating.**
 * 
 * **Trước khi code/refactor module, AI PHẢI đọc:**
 * 
 * 1. **README.md trong module** (ưu tiên cao nhất):
 * ```
 * components/features/<module>/README.md
 * ```
 * Ví dụ:
 * - `components/features/preorder/README.md`
 * - `components/features/referral/README.md`
 * - `components/features/checkout/README.md`
 * 
 * 2. **Module spec trong docs (nếu có)**:
 * ```
 * docs/modules/
 * ├── README.md              # Tổng quan module architecture
 * ├── ecard.md               # Spec module E-Card
 * ├── referral.md            # Spec module Referral
 * ├── loyalty.md             # Spec module Loyalty
 * └── templates/
 *     └── module-template.md # Template tạo module mới
 * ```
 * 
 * ### 17.2. Nội Dung Module README (Chuẩn)
 * 
 * **Mỗi module README.md PHẢI có:**
 * 1. **Mục đích (Purpose)**: Module này làm gì, scope của nó
 * 2. **Cấu trúc (Structure)**: Thư mục ui/, domain/, data/, hooks/, types/
 * 3. **Cách sử dụng (Usage)**: Import từ đâu, ví dụ code
 * 4. **Luật riêng module (Module Rules)**: Quy tắc đặc thù của module
 * 5. **Dependencies**: Module phụ thuộc gì
 * 6. **Lưu ý quan trọng (Important Notes)**: Các điểm cần chú ý
 * 
 * ### 17.3. Nội Dung Module Spec (docs/)
 * 
 * **Mỗi module spec phải có:**
 * 1. **Module Overview**: Mục đích, boundaries
 * 2. **Public API**: Exports (hooks, components, types)
 * 3. **Dependencies**: Module nào phụ thuộc module này
 * 4. **Contracts**: DTOs, events, interfaces
 * 5. **Business Rules**: Domain logic quan trọng
 * 6. **Integration Points**: Cách module khác tích hợp
 * 
 * ### 17.4. Ví Dụ Module Spec
 * 
 * ```markdown
 * # E-Card Module Spec
 * 
 * ## Overview
 * E-Card system quản lý business card điện tử, connections, gifts.
 * 
 * ## Public API
 * ```typescript
 * // Hooks
 * export { useEcardProfile, useConnections, useGifts }
 * 
 * // Components
 * export { EcardProfile, ConnectionsTab, GiftCard }
 * 
 * // Types
 * export type { EcardDTO, ConnectionDTO, GiftDTO }
 * ```
 * 
 * ## Dependencies
 * - `@/shared/types` - UserDTO, Result<T>
 * - `@/shared/utils` - validators, formatters
 * 
 * ## Contracts
 * ```typescript
 * interface EcardDTO {
 *   user_id: string;
 *   display_name: string;
 *   profile_image_url?: string;
 * }
 * ```
 * 
 * ## Business Rules
 * 1. QR scan tạo connection 2 chiều tự động
 * 2. Care level chỉ initiator được set
 * 3. Gift expiry sau 90 ngày
 * 
 * ## Integration
 * ```typescript
 * // Other modules integrate via public API
 * import { useEcardProfile } from '@/features/ecard';
 * ```
 * ```
 * 
 * ---
 * 
 * ## 🎯 18. Ưu Tiên Module Cho Code Mới
 * 
 * ### 18.1. Nguyên Tắc Code Mới
 * 
 * **Mọi code mới PHẢI theo module architecture:**
 * - ✅ Tạo module mới nếu là feature mới hoàn toàn
 * - ✅ Extend module hiện có nếu liên quan
 * - ❌ KHÔNG tạo file rời rạc ngoài module
 * - ❌ KHÔNG tạo "mega file" chứa nhiều concerns
 * 
 * ### 18.2. Chạm Code Legacy Khi Cần
 * 
 * **Khi tích hợp với code legacy:**
 * ```javascript
 * // ✅ ĐÚNG - Tạo adapter
 * // features/ecard/adapters/legacyAdapter.js
 * import { oldUserService } from '@/components/services/userService'; // Legacy
 * 
 * export const ecardLegacyAdapter = {
 *   getUserProfile: async (userId) => {
 *     const oldData = await oldUserService.getUser(userId);
 *     return convertToEcardDTO(oldData); // Convert to module DTO
 *   }
 * };
 * 
 * // ❌ SAI - Import trực tiếp legacy vào module
 * import { oldUserService } from '@/components/services/userService';
 * ```
 * 
 * ### 18.3. Không Tạo Mega File
 * 
 * ```javascript
 * // ❌ SAI - One-page feature
 * pages/EcardPage.jsx (1000 dòng)
 * export default function EcardPage() {
 *   // 200 dòng state
 *   // 300 dòng business logic
 *   // 500 dòng JSX
 * }
 * 
 * // ✅ ĐÚNG - Module hóa
 * // features/ecard/ui/EcardPage.jsx (100 dòng)
 * import { EcardProfile } from './EcardProfile';
 * import { ConnectionsTab } from './ConnectionsTab';
 * import { GiftsTab } from './GiftsTab';
 * import { useEcardOrchestrator } from '../hooks';
 * 
 * export default function EcardPage() {
 *   const { activeTab, setActiveTab } = useEcardOrchestrator();
 *   
 *   return (
 *     <div>
 *       <TabSwitch active={activeTab} onChange={setActiveTab} />
 *       {activeTab === 'profile' && <EcardProfile />}
 *       {activeTab === 'connections' && <ConnectionsTab />}
 *       {activeTab === 'gifts' && <GiftsTab />}
 *     </div>
 *   );
 * }
 * ```
 * 
 * ---
 * 
 * ## 🚫 Những Điều TUYỆT ĐỐI KHÔNG LÀM
 * 
 * 1. ❌ Gọi API trong component UI
 * 2. ❌ Hardcode error messages
 * 3. ❌ Copy-paste logic giữa các file
 * 4. ❌ Tạo file > 300 dòng
 * 5. ❌ Bỏ qua `useCaseRegistry` khi thêm feature
 * 6. ❌ Dùng `throw new Error("random text")`
 * 7. ❌ Tạo component/hook mới khi đã có sẵn
 * 8. ❌ Load all data không pagination
 * 9. ❌ Không dùng debounce cho search
 * 10. ❌ Dùng `window.location.search` hoặc `window.location.pathname` - Dùng react-router-dom thay thế
 * 11. ❌ **Dùng `window.confirm()`, `window.alert()`, `window.prompt()`** - Dùng `useConfirmDialog()`, `useToast()` thay thế
 * 12. ❌ **Import icon trực tiếp từ `lucide-react`** - PHẢI dùng `Icon` từ `@/components/ui/AnimatedIcon.jsx`
 * 13. ❌ **Dùng icon chưa export trong Icon.*** - ĐỌC AnimatedIcon.jsx (dòng 278-443), check trước, thêm nếu thiếu
 * 14. ❌ **Render icon undefined/chưa có** - Gây lỗi "XCircle is not defined", phải check Icon.XCircle có sẵn chưa
 * 15. ❌ **Tạo circular dependency giữa service** - Service chỉ import repository/core, KHÔNG import service cùng tầng
 * 16. ❌ **Dùng `await import()` để né circular** - Phải refactor sang core module hoặc DI pattern
 * 17. ❌ **Tạo code mới không theo module architecture** - Mọi feature mới PHẢI theo cấu trúc module
 * 18. ❌ **Import sâu vào nội bộ module khác** - Chỉ import qua public API (index.js)
 * 19. ❌ **Tạo mega file / one-page feature** - PHẢI module hóa với ui/, domain/, data/ rõ ràng
 * 20. ❌ **UI gọi trực tiếp data layer** - UI chỉ gọi hooks, hooks orchestrate domain + data
 * 
 * ---
 * 
 * ## ✅ Checklist Nhanh
 * 
 * Khi tạo feature mới:
 * ```
 * □ ĐỌC module README.md nếu có (features/<module>/README.md)
 * □ Module structure created (ui/, domain/, data/, types/, hooks/)
 * □ Types/DTO defined trong module types/
 * □ Service với Result<T> trong module data/
 * □ Business logic trong module domain/
 * □ Hook orchestration trong module hooks/
 * □ UI components trong module ui/
 * □ index.js export public API
 * □ README.md cho module (mục đích, cấu trúc, cách dùng, luật riêng)
 * □ useCaseRegistry updated
 * □ Error dùng ErrorCodes
 * □ File size OK (<300 lines, prefer <200)
 * □ Reuse checked (shared/, existing modules)
 * □ KHÔNG dùng window.confirm/alert - dùng useConfirmDialog/useToast
 * □ ĐỌC AnimatedIcon.jsx TRƯỚC khi dùng icon
 * □ Icon CHƯA CÓ → thêm vào AnimatedIcon.jsx, save, sau đó mới dùng
 * □ KHÔNG import icon từ lucide-react (gây lỗi "Element type is invalid")
 * □ Toast messages rõ ràng, có ích (không chỉ "Thành công" / "Lỗi")
 * □ KHÔNG có circular dependency giữa service/module
 * □ Service chỉ import repository/core, KHÔNG import service khác cùng tầng
 * □ Module chỉ import public API của module khác (qua index.js)
 * □ KHÔNG import sâu vào nội bộ module khác
 * □ UI KHÔNG gọi trực tiếp data layer
 * □ ĐỌC module spec (docs/modules/*.md) nếu refactor module
 * ```
 * 
 * ---
 * 
 * > **Ghi nhớ**: Code sạch, tách biệt, dễ maintain. 
 * > Reuse trước, tạo mới sau.
 * > Mọi lỗi phải có ErrorCode, mọi kết quả phải là Result<T>.
 * > Service KHÔNG import service khác - dùng core module hoặc DI pattern.
 * > **Mọi feature mới PHẢI theo module architecture** - không tạo file rời rạc.
 */

// This file serves as documentation only
// No executable code - just rules for AI to follow when generating code

export const AI_CODING_RULES_VERSION = '3.2.0';
export const LAST_UPDATED = '2025-01-19';
export const ANIMATED_ICON_VERSION = '2.0.0';
export const MODULE_ARCHITECTURE_VERSION = '1.1.0';
export const SAAS_PLAN_VERSION = '1.0.0';