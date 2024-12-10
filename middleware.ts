import { NextResponse } from 'next/server';
import { supabase } from '@/services/clients';  

export async function middleware(req: Request) {
  // Get session from Supabase
  const { data: { session } } = await supabase.auth.getSession();

  // If there's no session, redirect to login page
  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If session exists, allow request to continue
  return NextResponse.next();
}

// Apply middleware to specific routes (e.g., dashboard)
export const config = {
  matcher: ['/dashboard/*'],  // Protect any routes under /dashboard
};
