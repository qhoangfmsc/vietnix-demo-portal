import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { notify } from "@/components/notifications/CustomNoti";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

interface RegisterFormInputs {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone?: string;
  agree: boolean;
}

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormInputs>({ defaultValues: { agree: false } });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password");

  const handleRegisterSuccess = (data: RegisterFormInputs) => {
    notify.success(
      `Tạo tài khoản thành công!\nHọ tên: ${data.fullName}\nEmail: ${data.email}\nSĐT: ${data.phone || "-"}`
    );
  };

  return (
    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-8 text-center text-foreground">ĐĂNG KÝ</h1>
      <form onSubmit={handleSubmit(handleRegisterSuccess)} className="flex flex-col gap-7">
        {/* Họ tên */}
        <div>
          <input
            type="text"
            placeholder="Họ tên"
            className="w-full border border-border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            {...register("fullName", { required: "Vui lòng nhập họ tên." })}
          />
          {errors.fullName && <div className="text-destructive text-sm mt-1">{errors.fullName.message}</div>}
        </div>
        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            {...register("email", {
              required: "Vui lòng nhập email.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email không hợp lệ."
              }
            })}
          />
          {errors.email && <div className="text-destructive text-sm mt-1">{errors.email.message}</div>}
        </div>
        {/* Mật khẩu */}
        <div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              className="w-full border border-border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground pr-12"
              {...register("password", {
                required: "Vui lòng nhập mật khẩu.",
                minLength: { value: 6, message: "Mật khẩu tối thiểu 6 ký tự." }
              })}
            />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" onClick={() => setShowPassword(v => !v)} tabIndex={-1}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && <div className="text-destructive text-sm mt-1">{errors.password.message}</div>}
        </div>
        {/* Xác nhận mật khẩu */}
        <div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Xác nhận mật khẩu"
              className="w-full border border-border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground pr-12"
              {...register("confirmPassword", {
                required: "Vui lòng xác nhận mật khẩu.",
                validate: (value: string) => value === password || "Mật khẩu xác nhận không khớp."
              })}
            />
            <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" onClick={() => setShowConfirmPassword(v => !v)} tabIndex={-1}>
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.confirmPassword && <div className="text-destructive text-sm mt-1">{errors.confirmPassword.message}</div>}
          {/* Số điện thoại (tùy chọn) */}
        </div>
        <div>
          <input
            type="tel"
            placeholder="+84 Số điện thoại (Tùy chọn)"
            className="w-full border border-border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
            {...register("phone")}
          />
        </div>
        {/* Đồng ý điều khoản */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="agree"
            className="w-5 h-5 accent-primary"
            {...register("agree", { required: "Bạn phải đồng ý với điều khoản dịch vụ." })}
          />
          <label htmlFor="agree" className="text-base select-none text-foreground">
            Tôi đồng ý với <Link href="#" className="text-primary underline">Điều khoản dịch vụ</Link>
          </label>
        </div>
        {errors.agree && <div className="text-destructive text-sm -mt-2 mb-2">{errors.agree.message}</div>}
        {/* Nút đăng ký */}
        <Button type="submit" variant="default" size="lg" className="w-full mt-2">Đăng Ký</Button>
        {/* Đăng ký bằng Google */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-border" />
            <span className="mx-3 text-muted-foreground text-sm">Hoặc</span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <Button type="button" variant="outline" className="w-full flex items-center justify-center gap-2 border-border">
            <Image src="/images/google-icon.svg" alt="Google" width={22} height={22} />
            <span>Đăng ký bằng Google</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(RegisterForm); 