"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/services/clients';
import { useRouter } from 'next/navigation';

import { User } from '@supabase/supabase-js';
import Navbar from '@/components/Navbar';

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
      } else {
        router.push('/login');
      }
    };

    fetchSession();
  }, [router]);
  
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <h1>Welcome to your Dashboard</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default DashboardPage;
