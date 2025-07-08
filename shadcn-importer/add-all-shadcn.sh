#!/bin/bash

# Script để add tất cả components shadcn/ui
echo "🚀 Bắt đầu add tất cả components shadcn/ui..."

# Layout & Navigation
echo "📦 Adding Layout & Navigation components..."
npx shadcn@latest add accordion -y
npx shadcn@latest add aspect-ratio -y
npx shadcn@latest add breadcrumb -y
npx shadcn@latest add card -y
npx shadcn@latest add collapsible -y
npx shadcn@latest add command -y
npx shadcn@latest add context-menu -y
npx shadcn@latest add drawer -y
npx shadcn@latest add hover-card -y
npx shadcn@latest add menubar -y
npx shadcn@latest add navigation-menu -y
npx shadcn@latest add popover -y
npx shadcn@latest add resizable -y
npx shadcn@latest add scroll-area -y
npx shadcn@latest add separator -y
npx shadcn@latest add sheet -y
npx shadcn@latest add sidebar -y
npx shadcn@latest add tabs -y

# Forms & Inputs
echo "📝 Adding Forms & Inputs components..."
npx shadcn@latest add button -y
npx shadcn@latest add checkbox -y
npx shadcn@latest add combobox -y
npx shadcn@latest add input -y
npx shadcn@latest add input-otp -y
npx shadcn@latest add label -y
npx shadcn@latest add radio-group -y
npx shadcn@latest add select -y
npx shadcn@latest add slider -y
npx shadcn@latest add switch -y
npx shadcn@latest add textarea -y
npx shadcn@latest add toggle -y
npx shadcn@latest add toggle-group -y

# Data Display
echo "📊 Adding Data Display components..."
npx shadcn@latest add alert -y
npx shadcn@latest add alert-dialog -y
npx shadcn@latest add avatar -y
npx shadcn@latest add badge -y
npx shadcn@latest add calendar -y
npx shadcn@latest add carousel -y
npx shadcn@latest add chart -y
npx shadcn@latest add data-table -y
npx shadcn@latest add date-picker -y
npx shadcn@latest add dialog -y
npx shadcn@latest add dropdown-menu -y
npx shadcn@latest add pagination -y
npx shadcn@latest add progress -y
npx shadcn@latest add skeleton -y
npx shadcn@latest add sonner -y
npx shadcn@latest add table -y
npx shadcn@latest add toast -y
npx shadcn@latest add tooltip -y
npx shadcn@latest add typography -y

# Form Integration
echo "🔗 Adding Form Integration..."
npx shadcn@latest add form -y

echo "✅ Hoàn thành! Tất cả components đã được add thành công."
echo "📁 Components được lưu trong: src/components/ui/" 