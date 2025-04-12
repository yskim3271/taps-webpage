# TAPS Web

Svelte 및 TypeScript로 구축된 웹 애플리케이션 프로젝트입니다.

## 개요

이 프로젝트는 SvelteKit을 기반으로 한 웹 애플리케이션입니다. 정적 웹사이트로 빌드되어 GitHub Pages에 자동으로 배포됩니다.

## 로컬 개발

### 필수 조건

- Node.js 20 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로젝트 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

## 배포

이 프로젝트는 GitHub Actions를 통해 GitHub Pages에 자동으로 배포됩니다.

### 배포 워크플로우

1. `main` 브랜치에 변경사항이 푸시되면 GitHub Actions 워크플로우가 실행됩니다.
2. 워크플로우는 다음 단계를 수행합니다:
   - 코드 체크아웃
   - Node.js 환경 설정
   - 의존성 설치
   - 프로젝트 빌드
   - GitHub Pages에 배포

### 수동 배포

GitHub 저장소의 Actions 탭에서 "Deploy to GitHub Pages" 워크플로우를 수동으로 실행할 수도 있습니다.

## GitHub Pages 설정 방법

1. 저장소 설정(Settings)으로 이동
2. Pages 섹션 선택
3. Source에서 "GitHub Actions"를 선택
4. 저장소 설정에서 워크플로우 권한 설정:
   - Settings > Actions > General > Workflow permissions
   - "Read and write permissions" 선택 