# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# TAPS Web

Throat and Acoustic Paired Speech Dataset 웹사이트

## 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 빌드 미리보기
npm run preview
```

## GitHub Pages 배포

이 프로젝트는 GitHub Pages를 통해 자동으로 배포됩니다. `main` 브랜치에 푸시하면 자동으로 배포 프로세스가 시작됩니다.

배포된 웹사이트는 다음 URL에서 확인할 수 있습니다:
https://[your-username].github.io/taps_web

## 기술 스택

- SvelteKit
- TypeScript
- TailwindCSS
- GitHub Pages
