import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'hiaryAI 사용자 가이드',
  icon: '/toss-logo.png',
  lang: 'ko',
  logo: {
    light: '/toss-logo.png',
    dark: '/toss-logo.png',
  },
  head: [
    ['meta', { property: 'og:type', content: 'website' }],
    [
      'meta',
      { property: 'og:description', content: 'AI 기반 학습 기록 전문 블로그 플랫폼' },
    ],
    ['meta', { property: 'og:url', content: 'https://docs.hiary.ai/' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://static.hiary.ai/og-image.png',
      },
    ],
  ],
  globalStyles: path.join(__dirname, './styles/index.css'),
  themeConfig: {
    darkMode: false,
    searchPlaceholderText: '검색',
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/JoyLabs-space/hiaryAI-wiki',
      },
    ],
    nav: [
      {
        text: '시작하기',
        link: '/getting-started/index',
        position: 'left',
      },
      {
        text: '핵심 기능',
        link: '/features/index',
        position: 'left',
      },
      {
        text: '실용 가이드',
        link: '/guides/index',
        position: 'left',
      },
      {
        text: 'FAQ',
        link: '/faq/index',
        position: 'left',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'hiaryAI 시작하기',
          items: [
            {
              text: 'hiaryAI 소개',
              link: '/getting-started/index',
            },
            {
              text: '빠른 시작 가이드',
              link: '/getting-started/quick-start',
            },
            {
              text: '구독 플랜',
              link: '/getting-started/subscription-plans',
            },
          ],
        },
        {
          text: 'hiaryAI 핵심 기능',
          items: [
            {
              text: '기능 개요',
              link: '/features/index',
            },
            {
              text: '학습 에디터',
              link: '/features/editor',
            },
            {
              text: 'AI 복습 시스템',
              link: '/features/review-system',
            },
            {
              text: '학습 대시보드',
              link: '/features/dashboard',
            },
            {
              text: 'TILs (Today I Learned)',
              link: '/features/tils',
            },
            {
              text: '태그 시스템',
              link: '/features/tags',
            },
            {
              text: '시리즈 관리',
              link: '/features/series',
            },
            {
              text: '뱃지 시스템',
              link: '/features/badges',
            },
            {
              text: '글로벌 커뮤니티',
              link: '/features/community',
            },
            {
              text: '설정 및 계정 관리',
              link: '/features/settings',
            },
          ],
        },
        {
          text: 'hiaryAI 실용 가이드',
          items: [
            {
              text: '가이드 개요',
              link: '/guides/index',
            },
            {
              text: '효과적인 학습 기록 작성법',
              link: '/guides/effective-writing',
            },
            {
              text: '나만의 학습 루틴 만들기',
              link: '/guides/study-routine',
            },
          ],
        },
        {
          text: 'hiaryAI FAQ',
          items: [
            {
              text: '자주 묻는 질문',
              link: '/faq/index',
            },
          ],
        },
      ],
    },
  },
});