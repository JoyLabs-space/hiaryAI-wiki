// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hiary.ai',
  
  integrations: [
    starlight({
      title: 'hiaryAI 사용자 가이드',
      components: {
        SiteTitle: './src/components/Title.astro',
        PageTitle: './src/components/PageTitle.astro',
        SocialIcons: './src/components/SocialIcons.astro',
        Sidebar: './src/components/Sidebar.astro',
        MobileMenuFooter: './src/components/MobileFooter.astro',
      },
      defaultLocale: 'root',
      locales: {
        root: {
          label: '한국어',
          lang: 'ko',
        },
      },
      social: [
        {
          icon: 'seti:html',
          href: 'https://hiary.ai',
          label: 'hiaryAI',
        },
      ],
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: '시작하기',
          collapsed: false,
          items: [
            { label: 'hiaryAI 시작하기', link: '/getting-started/' },
            { label: '빠른 시작', link: '/getting-started/quick-start/' },
            { label: '구독 플랜 안내', link: '/getting-started/subscription-plans/' },
          ],
        },
        {
          label: '핵심 기능',
          collapsed: false,
          items: [
            { label: '핵심 기능 개요', link: '/features/' },
            { label: '학습 에디터', link: '/features/editor/' },
            { label: 'AI 복습 시스템', link: '/features/review-system/' },
            { label: '게시물', link: '/features/posts/' },
            { label: '탐색 기능', link: '/features/explore/' },
            { label: '설정 및 계정 관리', link: '/features/settings/' },
          ],
        },
        {
          label: '실용 가이드',
          collapsed: false,
          items: [
            { label: '실용 가이드', link: '/guides/' },
            { label: '효과적인 학습 기록 작성법', link: '/guides/effective-writing/' },
            { label: '나만의 학습 루틴 만들기', link: '/guides/study-routine/' },
          ],
        },
        {
          label: '자주 묻는 질문',
          link: '/faq/',
        },
      ],
    }),
  ],

  vite: {
    // @ts-ignore - TailwindCSS v4 플러그인 타입 호환성 문제 우회
    plugins: [tailwindcss()],
  },
});