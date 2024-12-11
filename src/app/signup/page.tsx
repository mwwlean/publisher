import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import SignUp from '@/components/auth/Signup';

export default function Signup() {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <div className="flex flex-col items-center">
      <SignUp />
      <Link href="/" className="mt-4 text-primary hover:underline flex items-center text-sm">
        Back to Home
      </Link>
      </div>
    </div>
  );
}