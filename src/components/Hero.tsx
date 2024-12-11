import { ArrowDownRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import AnimatedShinyText from '@/components/ui/animated-shiny-text';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="container">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="text-left font-normal">
          <AnimatedShinyText>Work In Progress</AnimatedShinyText>
            {/* <AnimatedShinyText>Proudly developed by <span className='text-sky-500'>Jan Leander</span> ✨</AnimatedShinyText> */}
          </div>
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            The Publisher's Web
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            Discover the latest news, articles, and updates from our team. Stay informed and engaged with our expertly curated content.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-md'
              )}
            >
              <span>Get Started</span>
              <ArrowDownRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-md'
              )}
            >
              <span>See How It Works</span>
              <ArrowDownRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <img
          src="/hero.jpg"
          alt="Hero Image"
          className="max-h-96 w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
