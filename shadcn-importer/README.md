# Shadcn/UI Components Importer

Bộ công cụ để import tất cả components của shadcn/ui vào dự án một cách nhanh chóng và có tổ chức.

## 📋 Mục lục

- [Tổng quan](#tổng-quan)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Cách sử dụng](#cách-sử-dụng)
- [Danh sách components](#danh-sách-components)
- [Lưu ý quan trọng](#lưu-ý-quan-trọng)
- [Troubleshooting](#troubleshooting)

## 🎯 Tổng quan

Bộ script này giúp bạn import các components shadcn/ui một cách có hệ thống, được chia thành các nhóm chức năng để dễ quản lý và sử dụng.

## 📁 Cấu trúc thư mục

```
shadcn-importer/
├── README.md                    # Tài liệu này
├── add-all-shadcn.sh           # Script add tất cả components
├── add-layout-components.sh     # Script add Layout & Navigation
├── add-form-components.sh       # Script add Forms & Inputs
└── add-data-components.sh       # Script add Data Display
```

## 🚀 Cách sử dụng

### 1. Cấp quyền thực thi cho scripts

```bash
# Cấp quyền cho tất cả scripts
chmod +x shadcn-importer/*.sh

# Hoặc cấp quyền từng file
chmod +x shadcn-importer/add-all-shadcn.sh
chmod +x shadcn-importer/add-layout-components.sh
chmod +x shadcn-importer/add-form-components.sh
chmod +x shadcn-importer/add-data-components.sh
```

### 2. Chạy scripts

#### Option A: Add tất cả components một lần
```bash
./shadcn-importer/add-all-shadcn.sh
```

#### Option B: Add từng nhóm riêng biệt
```bash
# Layout & Navigation components
./shadcn-importer/add-layout-components.sh

# Forms & Inputs components  
./shadcn-importer/add-form-components.sh

# Data Display components
./shadcn-importer/add-data-components.sh
```

#### Option C: Add từng component riêng lẻ
```bash
# Ví dụ
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## 📦 Danh sách components

### Layout & Navigation (18 components)
- **Accordion** - Collapsible content sections
- **Aspect Ratio** - Maintain aspect ratio for media
- **Breadcrumb** - Navigation breadcrumbs
- **Card** - Container with header, content, footer
- **Collapsible** - Expandable/collapsible content
- **Command** - Command palette interface
- **Context Menu** - Right-click context menus
- **Drawer** - Slide-out side panels
- **Hover Card** - Hover-triggered cards
- **Menubar** - Horizontal menu bar
- **Navigation Menu** - Multi-level navigation
- **Popover** - Floating content containers
- **Resizable** - Resizable panels
- **Scroll Area** - Custom scrollable areas
- **Separator** - Visual dividers
- **Sheet** - Slide-out panels
- **Sidebar** - Side navigation
- **Tabs** - Tabbed content interface

### Forms & Inputs (14 components)
- **Button** - Interactive buttons
- **Checkbox** - Checkbox inputs
- **Combobox** - Searchable select dropdowns
- **Input** - Text input fields
- **Input OTP** - One-time password inputs
- **Label** - Form field labels
- **Radio Group** - Radio button groups
- **Select** - Dropdown select menus
- **Slider** - Range sliders
- **Switch** - Toggle switches
- **Textarea** - Multi-line text inputs
- **Toggle** - Toggle buttons
- **Toggle Group** - Grouped toggle buttons
- **Form** - React Hook Form integration

### Data Display (19 components)
- **Alert** - Status and information alerts
- **Alert Dialog** - Confirmation dialogs
- **Avatar** - User profile images
- **Badge** - Status and count badges
- **Calendar** - Date picker calendar
- **Carousel** - Image/content carousels
- **Chart** - Data visualization charts
- **Data Table** - Sortable data tables
- **Date Picker** - Date selection interface
- **Dialog** - Modal dialogs
- **Dropdown Menu** - Context menus
- **Pagination** - Page navigation
- **Progress** - Progress indicators
- **Skeleton** - Loading placeholders
- **Sonner** - Toast notifications
- **Table** - Data tables
- **Toast** - Notification toasts
- **Tooltip** - Hover information
- **Typography** - Text styling components

## ⚠️ Lưu ý quan trọng

### 1. Cấu hình trước khi chạy
Đảm bảo file `components.json` đã được cấu hình đúng:
```json
{
  "tailwind": {
    "css": "src/assets/styles/globals.css",
    "cssVariables": true
  }
}
```

### 2. CSS Variables
- Components sẽ tự động sử dụng CSS variables từ `globals.css`
- Không cần cấu hình thêm trong Tailwind config
- Tất cả semantic colors sẽ được map tự động

### 3. Dependencies
- Các dependencies cần thiết sẽ được cài đặt tự động
- Radix UI primitives sẽ được add vào `package.json`
- TypeScript types sẽ được cập nhật

### 4. File locations
- Components được tạo tại: `src/components/ui/`
- Utilities được tạo tại: `src/lib/utils.ts`
- CSS variables được sử dụng từ: `src/assets/styles/globals.css`

## 🔧 Troubleshooting

### Lỗi thường gặp

#### 1. Permission denied
```bash
# Giải pháp: Cấp quyền thực thi
chmod +x shadcn-importer/*.sh
```

#### 2. Component đã tồn tại
```bash
# Script sẽ bỏ qua và tiếp tục với component tiếp theo
# Không ảnh hưởng đến quá trình import
```

#### 3. Network timeout
```bash
# Thử lại lệnh bị lỗi
npx shadcn@latest add [component-name]
```

#### 4. CSS variables không hoạt động
```bash
# Kiểm tra file globals.css có import đúng không
# Đảm bảo "cssVariables": true trong components.json
```

### Kiểm tra sau khi import

1. **Kiểm tra components được tạo:**
```bash
ls src/components/ui/
```

2. **Kiểm tra dependencies:**
```bash
cat package.json | grep "@radix-ui"
```

3. **Kiểm tra TypeScript:**
```bash
npx tsc --noEmit
```

## 📚 Tài liệu tham khảo

- [Shadcn/UI Documentation](https://ui.shadcn.com/docs)
- [Components Gallery](https://ui.shadcn.com/docs/components)
- [Theming Guide](https://ui.shadcn.com/docs/theming)
- [CLI Commands](https://ui.shadcn.com/docs/cli)

## 🤝 Đóng góp

Nếu bạn muốn thêm components mới hoặc cải thiện scripts:

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

---

**Lưu ý**: Scripts này được thiết kế để hoạt động với cấu hình shadcn/ui chuẩn. Nếu bạn có cấu hình tùy chỉnh, có thể cần điều chỉnh scripts cho phù hợp. 