import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Cta = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-accent p-6 md:flex-row lg:px-20 lg:py-16">
          <div className="w-full">
            <h4 className="mb-1 text-2xl font-bold md:text-3xl">
                Become a Publisher
            </h4>
            <p className="text-muted-foreground">
                Join our platform and transform your ideas into published works. Connect with a community of readers and fellow creators while showcasing your unique voice.
            </p>
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ variant: 'link' }),
                'mt-8 px-0 hover:underline transition-all ease-in'
              )}
            >
              Get Started <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
          <div className="w-full">
            <ul className="space-y-2 text-sm font-medium sm:text-base lg:text-lg">
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Publish Easily
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Connect with a global audience
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Engage with supportive creators and readers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
