import { FloatingDock } from './floating-dock';
import { IconBrandGithub,  IconBrandLinkedin } from '@tabler/icons-react';

export function FloatingDockDemo() {
  const links = [
    
    {
      title: 'GitHub',
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://github.com/ayush-rijal',
    },
    {
      title: 'LinkdIn',
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: 'https://www.linkedin.com/in/ayush-rijal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
  ];
  return (
    <div className="flex items-center justify-center h-[3rem] w-3">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
