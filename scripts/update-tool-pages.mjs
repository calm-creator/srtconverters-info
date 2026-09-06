import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

console.log('--- Starting Legal, Trust, and 404 Upgrade ---');

// ============================================================================
// 1. UPDATE src/i18n/ui.ts WITH NOTFOUND TRANSLATIONS
// ============================================================================
const notFoundTranslations = {
  en: {
    badge: '404 Error',
    title: 'Page Not Found',
    description: 'The page you are looking for might have been moved, renamed, or is temporarily unavailable.',
    backHome: 'Back to Homepage',
    viewTools: 'Browse All Tools',
  },
  pt: {
    badge: 'Erro 404',
    title: 'Página Não Encontrada',
    description: 'A página que você procura pode ter sido movida, renomeada ou está temporariamente indisponível.',
    backHome: 'Voltar à Página Inicial',
    viewTools: 'Ver Todas as Ferramentas',
  },
  es: {
    badge: 'Error 404',
    title: 'Página No Encontrada',
    description: 'La página que estás buscando pudo haber sido movida, renombrada o no estar disponible temporalmente.',
    backHome: 'Volver a la Página Principal',
    viewTools: 'Ver Todas las Herramientas',
  },
  ko: {
    badge: '404 오류',
    title: '페이지를 찾을 수 없습니다',
    description: '요청하신 페이지가 이동되었거나 이름이 변경되었거나 일시적으로 사용할 수 없습니다.',
    backHome: '홈페이지로 돌아가기',
    viewTools: '모든 도구 보기',
  },
  vi: {
    badge: 'Lỗi 404',
    title: 'Không Tìm Thấy Trang',
    description: 'Trang bạn đang tìm kiếm có thể đã bị di chuyển, đổi tên hoặc tạm thời không khả dụng.',
    backHome: 'Quay lại Trang chủ',
    viewTools: 'Xem Tất cả Công cụ',
  },
  id: {
    badge: 'Kesalahan 404',
    title: 'Halaman Tidak Ditemukan',
    description: 'Halaman yang Anda cari mungkin telah dipindahkan, diubah namanya, atau sementara tidak tersedia.',
    backHome: 'Kembali ke Beranda',
    viewTools: 'Lihat Semua Alat',
  },
  ja: {
    badge: '404 エラー',
    title: 'ページが見つかりません',
    description: 'お探しのページは移動、名前の変更、または一時的に利用できない可能性があります。',
    backHome: 'トップページに戻る',
    viewTools: 'すべてのツールを見る',
  },
  fr: {
    badge: 'Erreur 404',
    title: 'Page Non Trouvée',
    description: 'La page que vous recherchez a peut-être été déplacée, renommée ou est temporairement indisponible.',
    backHome: "Retour à l'Accueil",
    viewTools: 'Voir Tous les Outils',
  },
  de: {
    badge: '404-Fehler',
    title: 'Seite nicht gefunden',
    description: 'Die von Ihnen gesuchte Seite wurde möglicherweise verschoben, umbenannt oder ist vorübergehend nicht erreichbar.',
    backHome: 'Zurück zur Startseite',
    viewTools: 'Alle Tools ansehen',
  },
  ar: {
    badge: 'خطأ 404',
    title: 'الصفحة غير موجودة',
    description: 'قد تكون الصفحة التي تبحث عنها قد نُقلت أو تم تغيير اسمها أو أنها غير متاحة مؤقتًا.',
    backHome: 'العودة إلى الصفحة الرئيسية',
    viewTools: 'عرض جميع الأدوات',
  },
};

const uiPath = path.join(rootDir, 'src/i18n/ui.ts');
let uiContent = fs.readFileSync(uiPath, 'utf8');

if (!uiContent.includes('notFound: {')) {
  uiContent = uiContent.replace(
    '  common: {',
    '  notFound: {\n    badge: string;\n    title: string;\n    description: string;\n    backHome: string;\n    viewTools: string;\n  };\n  common: {'
  );

  for (const [locale, data] of Object.entries(notFoundTranslations)) {
    const target = `  ${locale}: {`;
    const notFoundBlock = `    notFound: {\n      badge: ${JSON.stringify(data.badge)},\n      title: ${JSON.stringify(data.title)},\n      description: ${JSON.stringify(data.description)},\n      backHome: ${JSON.stringify(data.backHome)},\n      viewTools: ${JSON.stringify(data.viewTools)},\n    },`;
    uiContent = uiContent.replace(
      `${target}\n`,
      `${target}\n${notFoundBlock}\n`
    );
  }
  fs.writeFileSync(uiPath, uiContent, 'utf8');
  console.log('✓ Updated src/i18n/ui.ts with notFound definitions');
} else {
  console.log('• src/i18n/ui.ts already has notFound definitions');
}

// ============================================================================
// 2. UPDATE src/components/Footer.astro (REMOVE VISIBLE SITEMAP LINK & ENHANCE TOOLS LIST)
// ============================================================================
const footerPath = path.join(rootDir, 'src/components/Footer.astro');
let footerContent = fs.readFileSync(footerPath, 'utf8');

// Remove the sitemap link from legal list
footerContent = footerContent.replace(
  `          <li>\n            <a href="/sitemap-index.xml" class="footer-link">{ui.footer.sitemap}</a>\n          </li>\n`,
  ''
);

// Enhance Tools column in Footer to link to both tools and Tools page
if (!footerContent.includes("getToolPath('txt-to-srt', locale)")) {
  const oldToolsSection = `      <!-- Tools column -->
      <div class="footer-col">
        <p class="footer-heading">{ui.footer.toolsHeading}</p>
        <ul class="footer-links">
          <li>
            <a href={toolUrl} class="footer-link">SRT to TXT</a>
          </li>
        </ul>
      </div>`;

  const newToolsSection = `      <!-- Tools column -->
      <div class="footer-col">
        <p class="footer-heading">{ui.footer.toolsHeading}</p>
        <ul class="footer-links">
          <li>
            <a href={toolUrl} class="footer-link">SRT to TXT</a>
          </li>
          <li>
            <a href={getToolPath('txt-to-srt', locale)} class="footer-link">TXT to SRT</a>
          </li>
          <li>
            <a href={toolsUrl} class="footer-link">{ui.nav.tools}</a>
          </li>
        </ul>
      </div>`;

  footerContent = footerContent.replace(oldToolsSection, newToolsSection);
}

fs.writeFileSync(footerPath, footerContent, 'utf8');
console.log('✓ Updated src/components/Footer.astro (removed sitemap link, updated tools links)');

// ============================================================================
// 3. GENERATE PRIVACY POLICY PAGES (EN + LOCALIZED)
// ============================================================================
function getPrivacyPageContent(isLocalizedRoute) {
  const rel = isLocalizedRoute ? '../../' : '../';

  return `---
import BaseLayout from '${rel}layouts/BaseLayout.astro';
import SEOHead from '${rel}components/SEOHead.astro';
import Breadcrumbs from '${rel}components/Breadcrumbs.astro';
${isLocalizedRoute ? "import { LOCALES, DEFAULT_LOCALE, type Locale } from '../../i18n/locales';" : "import { DEFAULT_LOCALE } from '../i18n/locales';"}
import { getPagePath, getHomePath } from '${rel}i18n/routes';
import { getUi } from '${rel}i18n/ui';

${isLocalizedRoute ? `export function getStaticPaths() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({
    params: { locale },
  }));
}

const { locale } = Astro.params as { locale: Locale };` : `const locale = DEFAULT_LOCALE;`}
const ui = getUi(locale);
const canonicalPath = getPagePath('privacy', locale);
const homePath = getHomePath(locale);
const contactPath = getPagePath('contact', locale);

const breadcrumbs = [
  { name: ui.breadcrumbs.home, path: homePath },
  { name: ui.footer.privacyPolicy, path: canonicalPath },
];

const pageTitle = \`\${ui.footer.privacyPolicy} – \${ui.siteName}\`;
const pageDescription = 'Learn how srtconverters.info protects your privacy with 100% in-browser processing, zero server uploads, and transparent cookie practices.';
---

<BaseLayout locale={locale} pageType="page" pageId="privacy">
  <SEOHead
    slot="head"
    title={pageTitle}
    description={pageDescription}
    locale={locale}
    canonicalPath={canonicalPath}
    pageType="page"
    pageId="privacy"
    breadcrumbs={breadcrumbs}
  />

  <div class="content-container page-content-container">
    <Breadcrumbs crumbs={breadcrumbs} />

    <header class="page-header">
      <div class="header-badge-wrap">
        <span class="badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span>Privacy & Security Guarantee</span>
        </span>
      </div>
      <h1 class="page-title">{ui.footer.privacyPolicy}</h1>
      <p class="page-subtitle">Last updated: September 2026</p>
    </header>

    <article class="prose">
      <div class="privacy-highlight-box">
        <div class="highlight-icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        </div>
        <div class="highlight-content">
          <p class="highlight-title">Client-Side File Privacy Summary</p>
          <p class="highlight-text">
            All subtitle conversions on <strong>srtconverters.info</strong> execute locally in your web browser.
            Your files, text, and transcripts are <strong>never uploaded, transferred, or stored</strong> on our servers.
            Your media content remains strictly on your device at all times.
          </p>
        </div>
      </div>

      <section class="prose-section">
        <h2>1. Introduction & Overview</h2>
        <p>
          Welcome to <strong>srtconverters.info</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the website&rdquo;). We provide free, high-performance, browser-based conversion utilities for SubRip (.srt) and text documents.
        </p>
        <p>
          We are committed to operating with complete transparency, maintaining the highest standard of user privacy, and ensuring you understand exactly how our tools function, what data is processed, and how advertising partners operate on our site.
        </p>
      </section>

      <section class="prose-section">
        <h2>2. Browser-Based Processing & File Privacy</h2>
        <p>
          Unlike traditional web converters that require sending your documents over the internet to cloud servers, <strong>srtconverters.info uses client-side JavaScript execution</strong>:
        </p>
        <ul>
          <li><strong>Zero File Uploads:</strong> When you select or drag a <code>.srt</code> or <code>.txt</code> file, or paste text into our editors, the data is read directly into your device&rsquo;s local browser memory using standard HTML5 File APIs and FileReader.</li>
          <li><strong>No Server Access:</strong> File contents, transcripts, audio dialogue, and translated texts never reach our web servers, database systems, or any third-party computing infrastructure.</li>
          <li><strong>No Storage or Logging:</strong> Because we never receive your files, we cannot inspect, analyze, copy, or store your content.</li>
          <li><strong>Offline Functionality:</strong> After the page assets are initially loaded in your browser, the conversion algorithms can execute without an active internet connection.</li>
        </ul>
      </section>

      <section class="prose-section">
        <h2>3. What Information We Collect</h2>
        <h3>A. Information Collected Automatically (Server Logs)</h3>
        <p>
          When you access our website, our hosting web servers automatically log basic technical communication data commonly recorded across the internet. This information may include:
        </p>
        <ul>
          <li>Internet Protocol (IP) address (used for security filtering and network routing)</li>
          <li>Browser type, language, and operating system</li>
          <li>Referring website address and pages visited on our site</li>
          <li>Date, time, and duration of requests</li>
        </ul>
        <p>
          These server logs are used exclusively for diagnosing server issues, maintaining network integrity, preventing automated denial-of-service (DDoS) attacks, and analyzing aggregate website performance. Server logs are not linked to individual identities and are purged periodically.
        </p>

        <h3>B. Information You Provide Voluntarily</h3>
        <p>
          We do not require user accounts, logins, passwords, or payment information to use any part of this website. The only personal information we ever receive is information you choose to provide voluntarily if you contact us via our <a href={contactPath}>Contact page</a> (such as your name, email address, and message).
        </p>
        <p>
          We use this communication information solely to respond to your inquiry and provide assistance. We do not use contact details for marketing lists, nor do we sell or rent them to third parties.
        </p>
      </section>

      <section class="prose-section">
        <h2>4. Cookies & Local Storage</h2>
        <h3>Local Storage (localStorage)</h3>
        <p>
          Our website uses standard browser <code>localStorage</code> solely to remember your UI preference between visits:
        </p>
        <ul>
          <li><strong>Theme Preference:</strong> Storing whether you selected Dark Mode or Light Mode (key: <code>theme</code>).</li>
        </ul>
        <p>
          This preference information is saved only on your local device and is never transmitted to our servers.
        </p>

        <h3>Cookies</h3>
        <p>
          A cookie is a small text file placed on your device by a web server. We may use essential functional cookies for site performance. In addition, third-party partners (such as advertising networks) place cookies on your browser as described in the advertising section below.
        </p>
      </section>

      <section class="prose-section">
        <h2>5. Google AdSense & Third-Party Advertising</h2>
        <p>
          To keep our tools free for everyone without subscriptions or paywalls, we display advertising through <strong>Google AdSense</strong> and authorized third-party ad networks.
        </p>
        <p>
          Google AdSense complies with strict advertising standards. In accordance with Google&rsquo;s policies, please review the following disclosures regarding how advertising partners use data:
        </p>
        <ul>
          <li><strong>Third-Party Vendors:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user&rsquo;s prior visits to this website or other websites on the Internet.</li>
          <li><strong>Advertising Cookies:</strong> Google&rsquo;s use of advertising cookies (such as the DoubleClick cookie) enables it and its partners to serve ads to users based on their visit to our site and/or other sites across the web.</li>
          <li><strong>Ad Personalization:</strong> Depending on your location and consent settings, ads displayed may be personalized based on your interests or non-personalized based on page context.</li>
        </ul>
      </section>

      <section class="prose-section">
        <h2>6. Personalized Advertising Opt-Out & User Choices</h2>
        <p>
          You have full control over your advertising preferences and cookie choices:
        </p>
        <ul>
          <li><strong>Google Ad Settings:</strong> You can opt out of personalized advertising by Google by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
          <li><strong>Network Advertising Initiative (NAI):</strong> You can opt out of a third-party vendor&rsquo;s use of cookies for personalized advertising by visiting the <a href="http://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer">NAI Consumer Opt-Out Page</a>.</li>
          <li><strong>Digital Advertising Alliance (DAA):</strong> You can manage interest-based advertising choices via the <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">DAA WebChoices Tool</a>.</li>
          <li><strong>European Users (EDAA):</strong> Visitors residing in the European Economic Area can manage preferences at <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">Your Online Choices</a>.</li>
          <li><strong>Browser Settings:</strong> You can configure your browser to block third-party cookies, clear existing cookies, or alert you before a cookie is stored. Please note that disabling cookies may affect certain web features.</li>
        </ul>
      </section>

      <section class="prose-section">
        <h2>7. Analytics & Performance Tracking</h2>
        <p>
          We may analyze aggregate, non-personal metrics (such as total page impressions, geographic region, device screen sizes, and browser versions) to optimize our user interface, improve mobile responsiveness, and ensure our client-side tools run smoothly across all platforms. We do not use invasive profiling or tracking techniques that compromise user identity.
        </p>
      </section>

      <section class="prose-section">
        <h2>8. Data Storage & Retention</h2>
        <p>
          Our data retention guidelines are straightforward:
        </p>
        <ul>
          <li><strong>User Files & Content:</strong> Retention period is <strong>zero (0 seconds)</strong>. Content never enters our servers or storage systems.</li>
          <li><strong>Contact Messages:</strong> Retained only for as long as necessary to address your feedback, answer support questions, or satisfy legal records.</li>
          <li><strong>Server Access Logs:</strong> Retained for a limited duration (typically between 30 and 90 days) for security diagnostics before automated deletion.</li>
        </ul>
      </section>

      <section class="prose-section">
        <h2>9. Third-Party Links & External Services</h2>
        <p>
          Our website may occasionally contain links to external websites, documentation, or educational resources (for example, video editing software guides or standard subtitle syntax specifications). We do not control and are not responsible for the privacy practices, cookie policies, or content of third-party websites. We encourage you to inspect the privacy policies of any third-party websites you visit.
        </p>
      </section>

      <section class="prose-section">
        <h2>10. Children&rsquo;s Privacy (COPPA Compliance)</h2>
        <p>
          Protecting the privacy of children is of paramount importance. <strong>srtconverters.info</strong> is intended for general audiences and does not knowingly collect, solicit, or maintain personal information from children under the age of 13 (or under 16 in certain jurisdictions).
        </p>
        <p>
          If you are a parent or guardian and believe your child has submitted personal information through our contact form, please notify us immediately, and we will promptly delete that information from our records.
        </p>
      </section>

      <section class="prose-section">
        <h2>11. Data Security Measures</h2>
        <p>
          We employ industry-standard technical security practices to safeguard data:
        </p>
        <ul>
          <li><strong>Universal HTTPS/TLS Encryption:</strong> All traffic between your browser and our website is strictly encrypted in transit using modern Transport Layer Security (TLS).</li>
          <li><strong>Client-Side Isolation:</strong> Because conversion runs in your browser sandbox, your private files are never exposed to transmission interception or server breach risks.</li>
          <li><strong>Hardened Infrastructure:</strong> Our hosting environment is maintained with regular security updates and continuous monitoring.</li>
        </ul>
      </section>

      <section class="prose-section">
        <h2>12. Your Legal Privacy Rights (GDPR, CCPA / CPRA)</h2>
        <p>
          Depending on your jurisdiction (including the European Economic Area, the United Kingdom, California, and other US states), you may have specific statutory privacy rights:
        </p>
        <ul>
          <li><strong>Right to Know / Access:</strong> The right to request information about the categories of personal data collected, if any.</li>
          <li><strong>Right to Deletion:</strong> The right to request the deletion of personal data we maintain (such as an email you sent us).</li>
          <li><strong>Right to Rectification:</strong> The right to correct inaccurate personal data.</li>
          <li><strong>Right to Opt-Out of Sale / Sharing:</strong> We do not sell personal data, nor do we share personal data for monetary consideration.</li>
          <li><strong>Non-Discrimination:</strong> We will never discriminate against you, deny access, or alter your experience for exercising any privacy right.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us through our <a href={contactPath}>Contact page</a>.
        </p>
      </section>

      <section class="prose-section">
        <h2>13. Policy Updates & Modifications</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our tools, technology, applicable laws, or advertising guidelines. Any modifications will be posted directly on this page with an updated &ldquo;Last updated&rdquo; revision date. Continued use of the website following changes constitutes acceptance of the revised policy.
        </p>
      </section>

      <section class="prose-section">
        <h2>14. Contact Information</h2>
        <p>
          If you have questions, comments, or concerns regarding this Privacy Policy or our client-side processing practices, please reach out to us through our <a href={contactPath}>Contact page</a>. We will respond to all legitimate inquiries in a timely manner.
        </p>
      </section>
    </article>
  </div>
</BaseLayout>

<style>
  .page-content-container {
    padding-block: 2rem 5rem;
    max-width: 820px;
  }

  .page-header {
    margin-block-end: 2rem;
  }

  .header-badge-wrap {
    margin-bottom: 0.75rem;
  }

  .page-title {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 0.35rem;
  }

  .page-subtitle {
    font-size: 0.875rem;
    color: var(--text-muted);
    font-weight: 500;
  }

  .privacy-highlight-box {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 1.25rem 1.5rem;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-md);
    margin-block-end: 2.5rem;
  }

  .highlight-icon {
    color: var(--text-primary);
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  .highlight-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.35rem;
  }

  .highlight-text {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
  }

  .prose-section {
    margin-block-end: 2.5rem;
  }

  .prose-section h2 {
    font-size: 1.375rem;
    font-weight: 700;
    margin-block-end: 0.875rem;
    letter-spacing: -0.01em;
    color: var(--text-primary);
  }

  .prose-section h3 {
    font-size: 1.0625rem;
    font-weight: 600;
    margin-block: 1.25rem 0.5rem;
    color: var(--text-primary);
  }

  .prose-section p {
    font-size: 0.96875rem;
    line-height: 1.7;
    margin-block-end: 0.875rem;
    color: var(--text-secondary);
  }

  .prose-section ul {
    margin-inline-start: 1.5rem;
    margin-block-end: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.96875rem;
    line-height: 1.65;
    color: var(--text-secondary);
  }

  .prose-section li strong {
    color: var(--text-primary);
  }

  .prose-section a {
    color: var(--text-primary);
    font-weight: 500;
  }

  @media (max-width: 640px) {
    .page-content-container {
      padding-block: 1.5rem 3.5rem;
    }

    .privacy-highlight-box {
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem 1.125rem;
    }
  }
</style>
`;
}

fs.writeFileSync(path.join(rootDir, 'src/pages/privacy.astro'), getPrivacyPageContent(false), 'utf8');
console.log('✓ Updated src/pages/privacy.astro');

fs.writeFileSync(path.join(rootDir, 'src/pages/[locale]/privacy.astro'), getPrivacyPageContent(true), 'utf8');
console.log('✓ Updated src/pages/[locale]/privacy.astro');

// ============================================================================
// 4. GENERATE TERMS OF SERVICE PAGES (EN + LOCALIZED)
// ============================================================================
function getTermsPageContent(isLocalizedRoute) {
  const rel = isLocalizedRoute ? '../../' : '../';

  return `---
import BaseLayout from '${rel}layouts/BaseLayout.astro';
import SEOHead from '${rel}components/SEOHead.astro';
import Breadcrumbs from '${rel}components/Breadcrumbs.astro';
${isLocalizedRoute ? "import { LOCALES, DEFAULT_LOCALE, type Locale } from '../../i18n/locales';" : "import { DEFAULT_LOCALE } from '../i18n/locales';"}
import { getPagePath, getHomePath } from '${rel}i18n/routes';
import { getUi } from '${rel}i18n/ui';

${isLocalizedRoute ? `export function getStaticPaths() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({
    params: { locale },
  }));
}

const { locale } = Astro.params as { locale: Locale };` : `const locale = DEFAULT_LOCALE;`}
const ui = getUi(locale);
const canonicalPath = getPagePath('terms', locale);
const homePath = getHomePath(locale);
const contactPath = getPagePath('contact', locale);

const breadcrumbs = [
  { name: ui.breadcrumbs.home, path: homePath },
  { name: ui.footer.termsOfService, path: canonicalPath },
];

const pageTitle = \`\${ui.footer.termsOfService} – \${ui.siteName}\`;
const pageDescription = 'Review the Terms of Service for using srtconverters.info and our browser-based subtitle and file conversion utilities.';
---

<BaseLayout locale={locale} pageType="page" pageId="terms">
  <SEOHead
    slot="head"
    title={pageTitle}
    description={pageDescription}
    locale={locale}
    canonicalPath={canonicalPath}
    pageType="page"
    pageId="terms"
    breadcrumbs={breadcrumbs}
  />

  <div class="content-container page-content-container">
    <Breadcrumbs crumbs={breadcrumbs} />

    <header class="page-header">
      <div class="header-badge-wrap">
        <span class="badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
          <span>User Agreement</span>
        </span>
      </div>
      <h1 class="page-title">{ui.footer.termsOfService}</h1>
      <p class="page-subtitle">Last updated: September 2026</p>
    </header>

    <article class="prose">
      <section class="prose-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of <strong>srtconverters.info</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the website&rdquo;), including all tools, software algorithms, features, content, and related services offered on this site.
        </p>
        <p>
          By visiting, accessing, or using srtconverters.info, you acknowledge that you have read, understood, and agreed to be bound by these Terms and our <a href={getPagePath('privacy', locale)}>Privacy Policy</a>. If you do not agree with any part of these Terms, you must discontinue using our website and tools immediately.
        </p>
      </section>

      <section class="prose-section">
        <h2>2. Description of Services & Online Tools</h2>
        <p>
          <strong>srtconverters.info</strong> provides specialized, browser-based utilities for subtitle creators, video editors, translators, transcribers, and general audiences. Our core tools include:
        </p>
        <ul>
          <li><strong>SRT to TXT Converter:</strong> Stripping sequence indexes and timestamps to extract clean, readable plain text from SubRip files.</li>
          <li><strong>TXT to SRT Converter:</strong> Formatting raw text, scripts, or transcripts into standard numbered SubRip subtitles with automated timecodes.</li>
          <li>Additional subtitle and transcription utilities as added to the platform.</li>
        </ul>
        <p>
          All tool processing is designed to execute client-side directly within your web browser.
        </p>
      </section>

      <section class="prose-section">
        <h2>3. Permitted Use</h2>
        <p>
          You are granted a non-exclusive, revocable, non-transferable, worldwide right to access and use srtconverters.info for:
        </p>
        <ul>
          <li>Lawful personal, academic, educational, non-profit, or commercial conversion of subtitle files and transcripts.</li>
          <li>Formatting dialogue tracks and captions for personal or commercial video production (e.g., YouTube, TikTok, streaming platforms, film, television, educational courses).</li>
        </ul>
      </section>

      <section class="prose-section">
        <h2>4. User Responsibilities & Prohibited Uses</h2>
        <p>
          You agree to use srtconverters.info responsibly and in full compliance with all applicable local, national, and international laws. Specifically, you agree NOT to:
        </p>
        <ul>
          <li>Use the website or its tools for any illegal, fraudulent, harmful, or defamatory purpose.</li>
          <li>Process any content that infringes upon third-party copyrights, trademarks, publicity rights, or intellectual property rights.</li>
          <li>Attempt to interfere with, disrupt, damage, or impair the normal functioning, security, or network infrastructure of the website.</li>
          <li>Deploy automated scripts, bots, spiders, or scrapers in an abusive manner that degrades website speed, server stability, or availability for other users.</li>
          <li>Reverse-engineer, decompile, or copy the website&rsquo;s design system, layout, or proprietary codebase for competitive cloning or malicious purposes.</li>
        </ul>
      </section>

      <section class="prose-section">
        <h2>5. Content Ownership & File Responsibility</h2>
        <p>
          <strong>You retain 100% full ownership, intellectual property rights, and copyright</strong> over any subtitle files, transcripts, text scripts, or audio dialogue that you input, process, or convert through our tools.
        </p>
        <ul>
          <li>We do not claim any ownership, license, or copyright interest in your files or converted output.</li>
          <li>Because file processing occurs locally in your device&rsquo;s browser, your content is never stored on our servers.</li>
          <li>You are solely responsible for ensuring that you possess the necessary legal rights, permissions, or licenses to convert, format, or distribute the media and text you submit to our tools.</li>
        </ul>
      </section>

      <section class="prose-section">
        <h2>6. Accuracy & Limitations of Generated Results</h2>
        <p>
          While we rigorously test our parsing algorithms across diverse encodings, character sets, and subtitle standards, you acknowledge that:
        </p>
        <ul>
          <li><strong>Automated Timing Estimation:</strong> When using tools such as TXT to SRT, timestamp calculations are generated progressively using mathematical pacing based on your specified duration settings. Because automated pacing cannot predict natural speech pauses or vocal cadence, converted subtitles typically require minor manual adjustment in your video editor or subtitle timeline to achieve exact synchronization.</li>
          <li><strong>Malformed Files:</strong> If an uploaded input file contains corrupt headers, non-standard timestamp structures, or unreadable encoding, the converter may produce partial results or display an error notice.</li>
          <li><strong>User Verification:</strong> You are responsible for inspecting and verifying the accuracy, timing, and formatting of converted subtitle files prior to publication, broadcasting, or client delivery.</li>
        </ul>
      </section>

      <section class="prose-section">
        <h2>7. Intellectual Property of srtconverters.info</h2>
        <p>
          The website design, layout, logo, graphical assets, CSS styling, user interface, domain name, and original software code comprising srtconverters.info are the exclusive intellectual property of srtconverters.info and are protected by international copyright, trademark, and unfair competition laws.
        </p>
        <p>
          Nothing in these Terms grants you ownership of our platform, branding, or website code, except for the limited right to use the website as provided herein.
        </p>
      </section>

      <section class="prose-section">
        <h2>8. Third-Party Services, Ads, & External Links</h2>
        <p>
          Our website displays third-party advertisements (such as Google AdSense) to support our free operations. We may also provide links to third-party websites or external documentation for informational convenience.
        </p>
        <p>
          We do not endorse, guarantee, or assume responsibility for any third-party products, services, advertisements, or external content. Your interactions with third-party advertisers or websites are governed solely by their respective terms and privacy policies.
        </p>
      </section>

      <section class="prose-section">
        <h2>9. Disclaimer of Warranties</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE WEBSITE, ITS TOOLS, AND ALL CONTENT ARE PROVIDED ON AN <strong>&ldquo;AS IS&rdquo;</strong> AND <strong>&ldquo;AS AVAILABLE&rdquo;</strong> BASIS, WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
        </p>
        <p>
          WE EXPRESSLY DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE EFFORT, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, ERROR-FREE, TIMELY, SECURE, OR FREE FROM HARMFUL COMPONENTS, OR THAT ANY DEFECTS WILL BE CORRECTED.
        </p>
      </section>

      <section class="prose-section">
        <h2>10. Limitation of Liability</h2>
        <p>
          TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, IN NO EVENT SHALL SRTCONVERTERS.INFO, ITS OPERATORS, AFFILIATES, OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR EXEMPLARY DAMAGES WHATSOEVER (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, DATA LOSS, CORRUPTION OF SUBTITLE FILES, AUDIO-VIDEO SYNCHRONIZATION ERRORS, BUSINESS INTERRUPTION, OR REPUTATIONAL HARM), ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE WEBSITE OR TOOLS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
        <p>
          IF YOU ARE DISSATISFIED WITH ANY PORTION OF THIS WEBSITE OR THESE TERMS, YOUR SOLE AND EXCLUSIVE REMEDY IS TO CEASE USING THE WEBSITE.
        </p>
      </section>

      <section class="prose-section">
        <h2>11. Service Modifications & Availability</h2>
        <p>
          We reserve the right to modify, enhance, update, suspend, or discontinue any tool, feature, or part of srtconverters.info at any time, with or without notice, and without liability to you or any third party. While we endeavor to maintain 24/7 availability, we do not guarantee continuous, uninterrupted access.
        </p>
      </section>

      <section class="prose-section">
        <h2>12. Termination of Access</h2>
        <p>
          We reserve the right, without prior notice or liability, to suspend, block, or terminate access to the website for any user who violates these Terms, engages in malicious activities, or abuses website resources.
        </p>
      </section>

      <section class="prose-section">
        <h2>13. Governing Law & General Provisions</h2>
        <p>
          These Terms constitute the complete and exclusive agreement between you and srtconverters.info regarding your use of the website.
        </p>
        <ul>
          <li><strong>Severability:</strong> If any provision of these Terms is determined by a court of competent jurisdiction to be invalid, unlawful, or unenforceable, that provision shall be severed or modified to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.</li>
          <li><strong>No Waiver:</strong> Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.</li>
        </ul>
      </section>

      <section class="prose-section">
        <h2>14. Changes to Terms</h2>
        <p>
          We may revise these Terms of Service periodically to reflect changes in our tools, legal requirements, or platform features. When changes are made, the updated version will be published on this page with an updated &ldquo;Last updated&rdquo; date. Your continued use of the website following the posting of revised Terms signifies your acceptance of those modifications.
        </p>
      </section>

      <section class="prose-section">
        <h2>15. Contact Information</h2>
        <p>
          If you have questions, comments, or legal inquiries regarding these Terms of Service, please reach out to us through our <a href={contactPath}>Contact page</a>.
        </p>
      </section>
    </article>
  </div>
</BaseLayout>

<style>
  .page-content-container {
    padding-block: 2rem 5rem;
    max-width: 820px;
  }

  .page-header {
    margin-block-end: 2rem;
  }

  .header-badge-wrap {
    margin-bottom: 0.75rem;
  }

  .page-title {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 0.35rem;
  }

  .page-subtitle {
    font-size: 0.875rem;
    color: var(--text-muted);
    font-weight: 500;
  }

  .prose-section {
    margin-block-end: 2.5rem;
  }

  .prose-section h2 {
    font-size: 1.375rem;
    font-weight: 700;
    margin-block-end: 0.875rem;
    letter-spacing: -0.01em;
    color: var(--text-primary);
  }

  .prose-section p {
    font-size: 0.96875rem;
    line-height: 1.7;
    margin-block-end: 0.875rem;
    color: var(--text-secondary);
  }

  .prose-section ul {
    margin-inline-start: 1.5rem;
    margin-block-end: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.96875rem;
    line-height: 1.65;
    color: var(--text-secondary);
  }

  .prose-section li strong {
    color: var(--text-primary);
  }

  .prose-section a {
    color: var(--text-primary);
    font-weight: 500;
  }

  @media (max-width: 640px) {
    .page-content-container {
      padding-block: 1.5rem 3.5rem;
    }
  }
</style>
`;
}

fs.writeFileSync(path.join(rootDir, 'src/pages/terms.astro'), getTermsPageContent(false), 'utf8');
console.log('✓ Updated src/pages/terms.astro');

fs.writeFileSync(path.join(rootDir, 'src/pages/[locale]/terms.astro'), getTermsPageContent(true), 'utf8');
console.log('✓ Updated src/pages/[locale]/terms.astro');

// ============================================================================
// 5. GENERATE ABOUT US PAGES (EN + LOCALIZED)
// ============================================================================
function getAboutPageContent(isLocalizedRoute) {
  const rel = isLocalizedRoute ? '../../' : '../';

  return `---
import BaseLayout from '${rel}layouts/BaseLayout.astro';
import SEOHead from '${rel}components/SEOHead.astro';
import Breadcrumbs from '${rel}components/Breadcrumbs.astro';
${isLocalizedRoute ? "import { LOCALES, DEFAULT_LOCALE, type Locale } from '../../i18n/locales';" : "import { DEFAULT_LOCALE } from '../i18n/locales';"}
import { getPagePath, getHomePath } from '${rel}i18n/routes';
import { getUi } from '${rel}i18n/ui';

${isLocalizedRoute ? `export function getStaticPaths() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({
    params: { locale },
  }));
}

const { locale } = Astro.params as { locale: Locale };` : `const locale = DEFAULT_LOCALE;`}
const ui = getUi(locale);
const canonicalPath = getPagePath('about', locale);
const homePath = getHomePath(locale);
const toolsPath = getPagePath('tools', locale);
const contactPath = getPagePath('contact', locale);

const breadcrumbs = [
  { name: ui.breadcrumbs.home, path: homePath },
  { name: ui.nav.about, path: canonicalPath },
];

const pageTitle = \`\${ui.nav.about} – \${ui.siteName}\`;
const pageDescription = 'Learn about srtconverters.info, our mission to provide fast, 100% private in-browser subtitle tools, and our engineering principles.';
---

<BaseLayout locale={locale} pageType="page" pageId="about">
  <SEOHead
    slot="head"
    title={pageTitle}
    description={pageDescription}
    locale={locale}
    canonicalPath={canonicalPath}
    pageType="page"
    pageId="about"
    breadcrumbs={breadcrumbs}
  />

  <div class="content-container page-content-container">
    <Breadcrumbs crumbs={breadcrumbs} />

    <header class="page-header">
      <div class="header-badge-wrap">
        <span class="badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <span>Genuine, Browser-First Utility</span>
        </span>
      </div>
      <h1 class="page-title">{ui.nav.about}</h1>
      <p class="page-subtitle">The mission, purpose, and technology behind srtconverters.info.</p>
    </header>

    <article class="prose">
      <section class="prose-section">
        <h2>What is srtconverters.info?</h2>
        <p>
          <strong>srtconverters.info</strong> is an independent web platform created specifically to make subtitle and caption conversion simple, fast, and private.
        </p>
        <p>
          Whether you are a video editor synchronizing dialogue tracks, a content creator formatting captions for social media, a translator working with multilingual scripts, an educator publishing course materials, or a developer dealing with SubRip formats, our tools are built to handle file conversions cleanly and instantly.
        </p>
      </section>

      <section class="prose-section">
        <h2>The Problem We Set Out to Solve</h2>
        <p>
          Anyone who has regularly dealt with video subtitles has likely encountered common frustrations with existing online file converters:
        </p>
        <ul>
          <li><strong>Forced File Uploads:</strong> Many converters require uploading your unpublished scripts, sensitive corporate interviews, or personal audio transcripts to remote third-party servers.</li>
          <li><strong>Artificial Barriers:</strong> Countless conversion websites hide basic features behind account registrations, email submissions, paywalls, or strict file size limitations.</li>
          <li><strong>Bloated Software:</strong> Downloading and configuring bulky desktop applications just to strip subtitle timecodes or convert text into SRT format is often cumbersome and unnecessary.</li>
          <li><strong>Cluttered Interfaces:</strong> Slow-loading pages filled with misleading download buttons, intrusive popups, and complex settings detract from getting the job done.</li>
        </ul>
        <p>
          We created <strong>srtconverters.info</strong> as a clean, reliable alternative: dedicated single-purpose subtitle utilities that perform format conversions immediately right inside your browser, with zero friction.
        </p>
      </section>

      <section class="prose-section">
        <h2>Our Tooling & Purpose</h2>
        <p>
          Rather than building a complex, bloated suite, we focus on perfecting essential subtitle utilities:
        </p>
        <div class="tools-feature-grid">
          <div class="tool-feature-card">
            <div class="card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <h3 class="card-title">SRT to TXT Converter</h3>
            <p class="card-desc">
              Strips subtitle cue numbers and millisecond timestamp markers to deliver clean, readable text ready for study notes, blog posts, translations, or video descriptions.
            </p>
          </div>

          <div class="tool-feature-card">
            <div class="card-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 class="card-title">TXT to SRT Converter</h3>
            <p class="card-desc">
              Transforms raw dialogue, transcripts, or video scripts into standard, numbered SubRip (.srt) files with progressive timestamps and configurable cue durations.
            </p>
          </div>
        </div>
        <p>
          Explore all currently available utilities on our dedicated <a href={toolsPath}>Tools page</a>.
        </p>
      </section>

      <section class="prose-section">
        <h2>Why Browser-Based Processing Matters</h2>
        <p>
          The defining technical principle of srtconverters.info is <strong>100% client-side execution</strong>:
        </p>
        <ul>
          <li><strong>True Data Privacy:</strong> When you open a file or paste text into our converters, the data is processed directly inside your browser memory using HTML5 Web APIs. Your content is never transmitted across the internet to our servers or any cloud database.</li>
          <li><strong>Instant Execution:</strong> Without network upload or download latency, conversions occur instantaneously in milliseconds, even for files containing thousands of subtitle cues.</li>
          <li><strong>Offline Usability:</strong> Once the page is loaded, the conversion logic can run without an active internet connection.</li>
        </ul>
      </section>

      <section class="prose-section">
        <h2>Our Core Commitments</h2>
        <h3>1. Privacy by Design</h3>
        <p>
          We believe user privacy should not depend on vague promises. By designing our architecture so that files never touch our servers, privacy is mathematically guaranteed by the client-side code itself.
        </p>

        <h3>2. Thoughtful, Accessible Design</h3>
        <p>
          We follow a focused, high-contrast monochrome design system (Black & White) with complete Dark Mode and Light Mode support. Every page and component is engineered to be fully responsive, lightweight, and accessible on smartphones, tablets, and desktop displays.
        </p>

        <h3>3. Universal Multilingual Support</h3>
        <p>
          Subtitles are global by nature. Our parsing algorithms provide full UTF-8 Unicode decoding, preserving accented Latin scripts, right-to-left Arabic, Hindi Devanagari, Japanese, Korean, Vietnamese, and other international character sets without text corruption.
        </p>

        <h3>4. Ongoing Quality & Standards Compliance</h3>
        <p>
          We continuously test our tools against official SubRip syntax standards to ensure generated subtitle files load reliably in major media players (such as VLC) and video editing platforms (including YouTube Studio, Premiere Pro, DaVinci Resolve, and Final Cut Pro).
        </p>
      </section>

      <section class="prose-section">
        <h2>Get in Touch</h2>
        <p>
          We are committed to continually improving srtconverters.info. If you have questions, encounter an edge-case subtitle format that doesn&rsquo;t convert as expected, or would like to suggest a new tool, please visit our <a href={contactPath}>Contact page</a>. We value user feedback and actively incorporate community suggestions.
        </p>
      </section>
    </article>
  </div>
</BaseLayout>

<style>
  .page-content-container {
    padding-block: 2rem 5rem;
    max-width: 820px;
  }

  .page-header {
    margin-block-end: 2rem;
  }

  .header-badge-wrap {
    margin-bottom: 0.75rem;
  }

  .page-title {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 0.35rem;
  }

  .page-subtitle {
    font-size: 0.875rem;
    color: var(--text-muted);
    font-weight: 500;
  }

  .prose-section {
    margin-block-end: 2.5rem;
  }

  .prose-section h2 {
    font-size: 1.375rem;
    font-weight: 700;
    margin-block-end: 0.875rem;
    letter-spacing: -0.01em;
    color: var(--text-primary);
  }

  .prose-section h3 {
    font-size: 1.0625rem;
    font-weight: 600;
    margin-block: 1.25rem 0.5rem;
    color: var(--text-primary);
  }

  .prose-section p {
    font-size: 0.96875rem;
    line-height: 1.7;
    margin-block-end: 0.875rem;
    color: var(--text-secondary);
  }

  .prose-section ul {
    margin-inline-start: 1.5rem;
    margin-block-end: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.96875rem;
    line-height: 1.65;
    color: var(--text-secondary);
  }

  .prose-section li strong {
    color: var(--text-primary);
  }

  .prose-section a {
    color: var(--text-primary);
    font-weight: 500;
  }

  .tools-feature-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    margin-block: 1.25rem 1.5rem;
  }

  .tool-feature-card {
    padding: 1.25rem;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .card-icon {
    color: var(--text-primary);
    display: flex;
  }

  .card-title {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    color: var(--text-primary);
  }

  .card-desc {
    font-size: 0.875rem;
    line-height: 1.55;
    color: var(--text-secondary);
    margin: 0;
  }

  @media (max-width: 640px) {
    .page-content-container {
      padding-block: 1.5rem 3.5rem;
    }

    .tools-feature-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
</style>
`;
}

fs.writeFileSync(path.join(rootDir, 'src/pages/about.astro'), getAboutPageContent(false), 'utf8');
console.log('✓ Updated src/pages/about.astro');

fs.writeFileSync(path.join(rootDir, 'src/pages/[locale]/about.astro'), getAboutPageContent(true), 'utf8');
console.log('✓ Updated src/pages/[locale]/about.astro');

// ============================================================================
// 6. GENERATE 404 NOT FOUND PAGES (EN + LOCALIZED)
// ============================================================================
function get404PageContent(isLocalizedRoute) {
  const rel = isLocalizedRoute ? '../../' : '../';

  return `---
import BaseLayout from '${rel}layouts/BaseLayout.astro';
import SEOHead from '${rel}components/SEOHead.astro';
import Breadcrumbs from '${rel}components/Breadcrumbs.astro';
${isLocalizedRoute ? "import { LOCALES, DEFAULT_LOCALE, type Locale } from '../../i18n/locales';" : "import { DEFAULT_LOCALE } from '../i18n/locales';"}
import { getPagePath, getHomePath } from '${rel}i18n/routes';
import { getUi } from '${rel}i18n/ui';

${isLocalizedRoute ? `export function getStaticPaths() {
  return LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((locale) => ({
    params: { locale },
  }));
}

const { locale } = Astro.params as { locale: Locale };` : `const locale = DEFAULT_LOCALE;`}
const ui = getUi(locale);
const homePath = getHomePath(locale);
const toolsPath = getPagePath('tools', locale);

const breadcrumbs = [
  { name: ui.breadcrumbs.home, path: homePath },
  { name: ui.notFound.badge, path: '#' },
];

const pageTitle = \`\${ui.notFound.title} (404) – \${ui.siteName}\`;
const pageDescription = ui.notFound.description;
---

<BaseLayout locale={locale} pageType="page" pageId="home">
  <SEOHead
    slot="head"
    title={pageTitle}
    description={pageDescription}
    locale={locale}
    canonicalPath={homePath}
    pageType="page"
    pageId="home"
    breadcrumbs={breadcrumbs}
  />
  <meta slot="head" name="robots" content="noindex, nofollow" />

  <div class="container not-found-container">
    <Breadcrumbs crumbs={breadcrumbs} />

    <div class="not-found-card">
      <div class="not-found-badge-wrap">
        <span class="badge badge-404">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>{ui.notFound.badge}</span>
        </span>
      </div>

      <h1 class="not-found-title">{ui.notFound.title}</h1>
      <p class="not-found-desc">{ui.notFound.description}</p>

      <div class="not-found-actions">
        <a href={homePath} class="btn btn-primary btn-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span>{ui.notFound.backHome}</span>
        </a>

        <a href={toolsPath} class="btn btn-secondary btn-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          <span>{ui.notFound.viewTools}</span>
        </a>
      </div>

      <div class="not-found-suggestions">
        <p class="suggestions-heading">Available Subtitle Converters:</p>
        <ul class="suggestions-list">
          <li>
            <a href={getPagePath('tools', locale)} class="suggestion-link">
              <strong>SRT to TXT:</strong> Strip timestamps and extract plain text
            </a>
          </li>
          <li>
            <a href={getPagePath('tools', locale)} class="suggestion-link">
              <strong>TXT to SRT:</strong> Convert text and transcripts to timed subtitles
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</BaseLayout>

<style>
  .not-found-container {
    padding-block: 2rem 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .not-found-card {
    width: 100%;
    max-width: 640px;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-lg);
    padding: 3rem 2rem;
    text-align: center;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .not-found-badge-wrap {
    margin-bottom: 1.25rem;
  }

  .badge-404 {
    font-size: 0.8125rem;
    padding: 0.35rem 0.875rem;
    gap: 0.4rem;
  }

  .not-found-title {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin: 0 0 1rem;
    line-height: 1.2;
  }

  .not-found-desc {
    font-size: 1.0625rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0 0 2rem;
    max-width: 480px;
  }

  .not-found-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    width: 100%;
    margin-bottom: 2.5rem;
  }

  .not-found-suggestions {
    width: 100%;
    padding-top: 2rem;
    border-top: 1px solid var(--border-subtle);
    text-align: start;
  }

  .suggestions-heading {
    font-size: 0.8125rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
    margin: 0 0 0.75rem;
  }

  .suggestions-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .suggestion-link {
    display: block;
    padding: 0.625rem 0.875rem;
    background-color: var(--bg-surface-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    color: var(--text-secondary);
    text-decoration: none;
    transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  }

  .suggestion-link strong {
    color: var(--text-primary);
  }

  .suggestion-link:hover {
    background-color: var(--bg-surface-hover);
    border-color: var(--border-default);
    color: var(--text-primary);
  }

  @media (max-width: 640px) {
    .not-found-container {
      padding-block: 1.5rem 3.5rem;
    }

    .not-found-card {
      padding: 2rem 1.25rem;
    }

    .not-found-actions {
      flex-direction: column;
      gap: 0.75rem;
    }

    .not-found-actions .btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>
`;
}

fs.writeFileSync(path.join(rootDir, 'src/pages/404.astro'), get404PageContent(false), 'utf8');
console.log('✓ Created src/pages/404.astro');

fs.writeFileSync(path.join(rootDir, 'src/pages/[locale]/404.astro'), get404PageContent(true), 'utf8');
console.log('✓ Created src/pages/[locale]/404.astro');

console.log('--- Upgrade Script Completed Successfully! ---');
