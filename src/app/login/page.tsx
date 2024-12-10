import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <div className="flex flex-col items-center">
      <LoginForm />
      <Link href="/" className="mt-4 text-primary hover:underline flex items-center text-sm">
        Back to Home
      </Link>
      </div>
    </div>
  );
};
