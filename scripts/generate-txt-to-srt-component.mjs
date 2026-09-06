import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetFile = path.resolve(__dirname, '../src/components/converter/TxtToSrtTool.astro');

const content = `---
import type { TxtToSrtDetailContent } from '../../data/tools/txt-to-srt';

interface Props {
  content: TxtToSrtDetailContent;
  locale: string;
}

const { content, locale } = Astro.props;
const ui = content.ui;
---

<div class="converter-card" id="converter-root" data-locale={locale}>
  <!-- Timing Notice Banner -->
  <div class="timing-notice-banner" role="note">
    <div class="timing-badge">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      <span>{ui.timingNoticeBadge}</span>
    </div>
    <p class="timing-notice-text">{content.timingNotice}</p>
  </div>

  <!-- Input Section -->
  <div class="input-section" id="input-section">
    <!-- Top 2-Column Editor Grid (Desktop: 2 Columns / Mobile: Stacked) -->
    <div class="editor-grid">
      <!-- Left: Plain Text Input (.txt) -->
      <div class="editor-pane txt-input-pane">
        <div class="pane-header">
          <div class="pane-title-group">
            <svg class="pane-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <line x1="10" y1="9" x2="8" y2="9"/>
            </svg>
            <label for="txt-paste-input" class="pane-title">{ui.pasteTitle}</label>
          </div>
          <div class="pane-actions">
            <button
              type="button"
              class="btn-pane-action"
              id="btn-sample"
              aria-label={ui.trySampleButton}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <span>{ui.trySampleButton}</span>
            </button>
            <button
              type="button"
              class="btn-pane-action"
              id="btn-clear-paste"
              aria-label={ui.clearButton}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span>{ui.clearButton}</span>
            </button>
          </div>
        </div>

        <div class="pane-body">
          <textarea
            id="txt-paste-input"
            class="editor-textarea"
            placeholder={ui.pastePlaceholder}
            aria-label={ui.pasteTitle}
            rows="10"
            spellcheck="false"
          ></textarea>
        </div>
      </div>

      <!-- Right: Formatted SRT Subtitles Live Preview (.srt) -->
      <div class="editor-pane srt-preview-pane">
        <div class="pane-header">
          <div class="pane-title-group">
            <svg class="pane-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span class="pane-title">{ui.livePreviewTitle}</span>
          </div>
          <div class="pane-actions">
            <button
              type="button"
              class="btn-pane-action"
              id="btn-copy-live"
              aria-label={ui.copyAction}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              <span id="copy-live-text">{ui.copyAction}</span>
            </button>
            <button
              type="button"
              class="btn-pane-action btn-pane-primary"
              id="btn-download-live"
              aria-label={ui.downloadAction}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>{ui.downloadAction}</span>
            </button>
          </div>
        </div>

        <div class="pane-body">
          <textarea
            id="srt-live-preview"
            class="editor-textarea preview-textarea"
            readonly
            placeholder={ui.previewEmpty}
            aria-label={ui.livePreviewTitle}
            rows="10"
            spellcheck="false"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- Timing & Split Method Options Grid -->
    <div class="timing-settings-panel">
      <div class="settings-header">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
        <span class="settings-title">{ui.timingOptionsTitle}</span>
      </div>

      <div class="settings-grid">
        <!-- Start Time -->
        <div class="setting-item">
          <label for="opt-start-time" class="setting-label">{ui.optStartTime}</label>
          <input
            type="number"
            id="opt-start-time"
            class="setting-input"
            value="1.0"
            min="0"
            step="0.5"
          />
        </div>

        <!-- Duration -->
        <div class="setting-item">
          <label for="opt-duration" class="setting-label">{ui.optDuration}</label>
          <input
            type="number"
            id="opt-duration"
            class="setting-input"
            value="3.0"
            min="1.0"
            max="15.0"
            step="0.5"
          />
        </div>

        <!-- Gap -->
        <div class="setting-item">
          <label for="opt-gap" class="setting-label">{ui.optGap}</label>
          <input
            type="number"
            id="opt-gap"
            class="setting-input"
            value="0.5"
            min="0.0"
            max="5.0"
            step="0.1"
          />
        </div>

        <!-- Split Method -->
        <div class="setting-item">
          <label for="opt-split-method" class="setting-label">{ui.optSplitMethod}</label>
          <select id="opt-split-method" class="setting-select">
            <option value="lines" selected>{ui.optSplitLines}</option>
            <option value="paragraphs">{ui.optSplitParagraphs}</option>
            <option value="sentences">{ui.optSplitSentences}</option>
          </select>
        </div>
      </div>
    </div>

    <!-- OR Divider -->
    <div class="or-divider" aria-hidden="true">
      <span class="or-line"></span>
      <span class="or-badge">{ui.orDivider}</span>
      <span class="or-line"></span>
    </div>

    <!-- Option 2: Upload TXT File -->
    <div class="option-block option-upload">
      <div class="option-header">
        <div class="option-title-group">
          <span class="option-badge">2</span>
          <span class="option-title">{ui.uploadTitle}</span>
        </div>
      </div>

      <div
        class="dropzone"
        id="dropzone"
        role="region"
        aria-label={ui.dropzoneTitle}
        tabindex="0"
      >
        <!-- Default Dropzone View -->
        <div class="dropzone-inner" id="dropzone-default-view">
          <div class="dropzone-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </div>

          <p class="dropzone-title" id="dropzone-text">{ui.dropzoneTitle}</p>
          <p class="dropzone-sub">{ui.dropzoneSubtitle}</p>

          <button type="button" class="btn btn-secondary btn-browse" id="btn-browse">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
            </svg>
            <span>{ui.browseButton}</span>
          </button>
        </div>

        <!-- File Attached View -->
        <div class="file-attached-view" id="file-attached-view" style="display: none;">
          <div class="attached-file-info">
            <div class="attached-file-icon" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <div class="attached-file-meta">
              <span class="attached-file-name" id="attached-filename">-</span>
              <span class="attached-file-size" id="attached-filesize">-</span>
            </div>
          </div>
          <button type="button" class="btn-remove-file" id="btn-remove-file" aria-label="Remove attached file">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <input
          type="file"
          id="file-input"
          accept=".txt,text/plain"
          class="sr-only"
          aria-label={ui.browseButton}
        />
      </div>
    </div>

    <!-- Convert Action Button -->
    <div class="convert-action-wrap">
      <button type="button" class="btn btn-primary btn-lg btn-convert" id="btn-convert">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6"/>
        </svg>
        <span>{ui.convertButton}</span>
      </button>
    </div>
  </div>

  <!-- Error Alert -->
  <div class="alert-error" id="error-box" role="alert" style="display: none;">
    <svg class="alert-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
    <span id="error-message"></span>
  </div>

  <!-- Results View (Shown after full conversion) -->
  <div class="processing-panel" id="processing-panel" style="display: none;">
    <div class="file-summary">
      <div class="summary-item">
        <span class="summary-label">{ui.fileNameLabel}</span>
        <span class="summary-value" id="summary-filename">-</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">{ui.fileSizeLabel}</span>
        <span class="summary-value" id="summary-filesize">-</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">{ui.cueCountLabel}</span>
        <span class="summary-value" id="summary-cues">-</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">{ui.characterCountLabel}</span>
        <span class="summary-value" id="summary-chars">-</span>
      </div>
    </div>

    <!-- Actions Bar -->
    <div class="actions-bar">
      <div class="actions-primary">
        <button type="button" class="btn btn-primary btn-lg action-btn" id="btn-download">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>{ui.downloadAction}</span>
        </button>

        <button type="button" class="btn btn-secondary btn-lg action-btn" id="btn-copy">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
          <span id="copy-btn-text">{ui.copyAction}</span>
        </button>
      </div>

      <button type="button" class="btn btn-secondary action-btn-reset" id="btn-reset">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
          <path d="M8 16H3v5" />
        </svg>
        <span>{ui.resetAction}</span>
      </button>
    </div>

    <!-- Full Preview Box -->
    <div class="preview-card">
      <div class="preview-header">
        <span class="preview-title">{ui.previewTitle}</span>
      </div>
      <textarea
        id="preview-text"
        class="preview-content"
        readonly
        rows="10"
        aria-label={ui.previewTitle}
      ></textarea>
    </div>
  </div>
</div>

<style>
  .converter-card {
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-lg);
    padding: 1.75rem;
    margin-block-end: 3rem;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  /* Timing Notice Banner */
  .timing-notice-banner {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 1.25rem;
    background-color: var(--bg-surface-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
    margin-bottom: 1.5rem;
  }

  .timing-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .timing-notice-text {
    font-size: 0.875rem;
    line-height: 1.55;
    color: var(--text-secondary);
    margin: 0;
  }

  .input-section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  /* 2-Column Editor Grid */
  .editor-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    width: 100%;
  }

  .editor-pane {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
  }

  .pane-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.625rem;
    min-height: 32px;
  }

  .pane-title-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
  }

  .pane-icon {
    color: var(--text-primary);
    flex-shrink: 0;
  }

  .pane-title {
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.01em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .pane-actions {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    flex-shrink: 0;
  }

  .btn-pane-action {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.25rem 0.625rem;
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--text-primary);
    background-color: var(--bg-surface-elevated);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
    white-space: nowrap;
    user-select: none;
  }

  .btn-pane-action:hover {
    background-color: var(--bg-surface-hover);
    border-color: var(--border-strong);
  }

  .btn-pane-primary {
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-text);
    border-color: var(--btn-primary-bg);
  }

  .btn-pane-primary:hover {
    background-color: var(--btn-primary-hover);
    border-color: var(--btn-primary-hover);
    color: var(--btn-primary-text);
  }

  .pane-body {
    width: 100%;
  }

  .editor-textarea {
    width: 100%;
    height: 260px;
    min-height: 200px;
    max-height: 480px;
    padding: 0.875rem 1rem;
    font-family: var(--font-mono);
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-input);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
    box-sizing: border-box;
    resize: vertical;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
    -webkit-overflow-scrolling: touch;
  }

  .editor-textarea:focus {
    border-color: var(--border-focus);
    box-shadow: var(--focus-ring);
  }

  .editor-textarea::placeholder {
    color: var(--text-muted);
    opacity: 0.8;
  }

  .preview-textarea {
    background-color: var(--bg-surface-elevated);
  }

  /* Timing Settings Panel */
  .timing-settings-panel {
    margin-top: 1.5rem;
    padding: 1.25rem;
    background-color: var(--bg-surface-elevated);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
  }

  .settings-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
    font-size: 0.9375rem;
    font-weight: 700;
  }

  .settings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
  }

  .setting-item {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .setting-label {
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--text-secondary);
  }

  .setting-input,
  .setting-select {
    padding: 0.5rem 0.75rem;
    background-color: var(--bg-surface);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-sm);
    color: var(--text-primary);
    font-size: 0.875rem;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .setting-input:focus,
  .setting-select:focus {
    border-color: var(--border-focus);
    box-shadow: var(--focus-ring);
  }

  /* OR Divider */
  .or-divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1.75rem 0;
    user-select: none;
  }

  .or-line {
    flex: 1;
    height: 1px;
    background-color: var(--border-subtle);
  }

  .or-badge {
    padding: 0.2rem 0.75rem;
    border-radius: var(--radius-full);
    border: 1px solid var(--border-default);
    background-color: var(--bg-surface-elevated);
    color: var(--text-muted);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  /* Option 2: Upload Block */
  .option-block {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .option-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.625rem;
  }

  .option-title-group {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .option-badge {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: var(--text-primary);
    color: var(--bg-app);
    font-size: 0.75rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .option-title {
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.01em;
  }

  /* Dropzone */
  .dropzone {
    border: 2px dashed var(--border-strong);
    border-radius: var(--radius-md);
    padding: 1.75rem 1.25rem;
    text-align: center;
    background-color: var(--bg-surface-elevated);
    transition: border-color 0.15s ease, background-color 0.15s ease;
    cursor: pointer;
    touch-action: manipulation;
  }

  .dropzone:hover,
  .dropzone.dragover {
    border-color: var(--border-focus);
    background-color: var(--bg-surface-hover);
  }

  .dropzone-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .dropzone-icon {
    color: var(--text-primary);
  }

  .dropzone-title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
  }

  .dropzone-sub {
    font-size: 0.8125rem;
    color: var(--text-muted);
    margin: 0;
  }

  .btn-browse {
    margin-top: 0.35rem;
    font-size: 0.84rem;
    padding: 0.4rem 0.875rem;
  }

  /* File Attached View */
  .file-attached-view {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem;
    background-color: var(--bg-surface-hover);
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
    gap: 0.75rem;
  }

  .attached-file-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 0;
    text-align: start;
  }

  .attached-file-icon {
    color: var(--text-primary);
    flex-shrink: 0;
  }

  .attached-file-meta {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .attached-file-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .attached-file-size {
    font-size: 0.75rem;
    color: var(--text-muted);
  }

  .btn-remove-file {
    padding: 0.375rem;
    color: var(--text-muted);
    border-radius: var(--radius-sm);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    flex-shrink: 0;
  }

  .btn-remove-file:hover {
    color: var(--text-primary);
    background-color: var(--bg-surface);
  }

  .convert-action-wrap {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
  }

  .btn-convert {
    width: 100%;
    max-width: 320px;
    justify-content: center;
    padding-block: 0.875rem;
  }

  /* Alert Error */
  .alert-error {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1rem;
    background-color: var(--bg-surface-elevated);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-size: 0.875rem;
    margin-top: 1.25rem;
  }

  .alert-icon {
    flex-shrink: 0;
  }

  /* Processing Panel */
  .processing-panel {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
  }

  .file-summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 0.75rem;
    padding: 1rem;
    background-color: var(--bg-surface-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: var(--radius-md);
  }

  .summary-item {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    min-width: 0;
  }

  .summary-label {
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .summary-value {
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--text-primary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .actions-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .actions-primary {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .action-btn {
    min-width: 160px;
    justify-content: center;
  }

  .preview-card {
    border: 1px solid var(--border-default);
    border-radius: var(--radius-md);
    overflow: hidden;
    background-color: var(--bg-surface);
  }

  .preview-header {
    padding: 0.625rem 1rem;
    background-color: var(--bg-surface-elevated);
    border-bottom: 1px solid var(--border-subtle);
  }

  .preview-title {
    font-size: 0.8125rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--text-muted);
  }

  .preview-content {
    width: 100%;
    padding: 1rem;
    font-family: var(--font-mono);
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-input);
    border: none;
    outline: none;
    box-sizing: border-box;
    resize: vertical;
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .editor-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .converter-card {
      padding: 1.25rem;
    }

    .actions-bar {
      flex-direction: column;
      align-items: stretch;
    }

    .actions-primary {
      flex-direction: column;
    }

    .action-btn,
    .btn-convert {
      width: 100%;
      max-width: none;
    }
  }
</style>

<script>
  (function () {
    const root = document.getElementById('converter-root');
    if (!root) return;

    // Elements
    const pasteInput = document.getElementById('txt-paste-input');
    const livePreview = document.getElementById('srt-live-preview');
    const btnSample = document.getElementById('btn-sample');
    const btnClearPaste = document.getElementById('btn-clear-paste');
    const btnCopyLive = document.getElementById('btn-copy-live');
    const copyLiveText = document.getElementById('copy-live-text');
    const btnDownloadLive = document.getElementById('btn-download-live');

    // Timing Settings Elements
    const optStartTime = document.getElementById('opt-start-time');
    const optDuration = document.getElementById('opt-duration');
    const optGap = document.getElementById('opt-gap');
    const optSplitMethod = document.getElementById('opt-split-method');

    // Dropzone Elements
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('file-input');
    const btnBrowse = document.getElementById('btn-browse');
    const defaultView = document.getElementById('dropzone-default-view');
    const attachedView = document.getElementById('file-attached-view');
    const attachedFilename = document.getElementById('attached-filename');
    const attachedFilesize = document.getElementById('attached-filesize');
    const btnRemoveFile = document.getElementById('btn-remove-file');

    // Action and Results Elements
    const btnConvert = document.getElementById('btn-convert');
    const errorBox = document.getElementById('error-box');
    const errorMessage = document.getElementById('error-message');
    const inputSection = document.getElementById('input-section');
    const processingPanel = document.getElementById('processing-panel');
    const summaryFilename = document.getElementById('summary-filename');
    const summaryFilesize = document.getElementById('summary-filesize');
    const summaryCues = document.getElementById('summary-cues');
    const summaryChars = document.getElementById('summary-chars');
    const previewText = document.getElementById('preview-text');
    const btnDownload = document.getElementById('btn-download');
    const btnCopy = document.getElementById('btn-copy');
    const copyBtnText = document.getElementById('copy-btn-text');
    const btnReset = document.getElementById('btn-reset');

    let selectedFile = null;
    let currentFileName = 'subtitles.srt';
    let rawFileContent = '';

    // Sample Text
    const sampleText =
      'Welcome to our comprehensive video guide.\\n' +
      'In this tutorial, we will learn how to convert plain text into standard SRT subtitles.\\n' +
      'Plain text contains dialogue, while SRT includes sequential numbers and timecodes.\\n' +
      'Our tool automatically generates millisecond-accurate timestamps.\\n' +
      'You can easily download and import the resulting subtitle file into any video editor.';

    // Helper: Milliseconds to HH:MM:SS,mmm
    function formatTimecode(ms) {
      const totalSecs = Math.floor(ms / 1000);
      const msec = Math.floor(ms % 1000);
      const hours = Math.floor(totalSecs / 3600);
      const minutes = Math.floor((totalSecs % 3600) / 60);
      const seconds = totalSecs % 60;

      const pad = (n, width = 2) => String(n).padStart(width, '0');
      return \`\${pad(hours)}:\${pad(minutes)}:\${pad(seconds)},\${pad(msec, 3)}\`;
    }

    // Helper: Parse already formatted or un-formatted lines to SRT
    function convertTextToSrt(rawText, options) {
      if (!rawText || !rawText.trim()) {
        return { success: false, error: 'Empty' };
      }

      const normalized = rawText
        .replace(/^\\uFEFF/, '')
        .replace(/\\r\\n/g, '\\n')
        .replace(/\\r/g, '\\n');

      let rawCues = [];

      if (options.splitMethod === 'paragraphs') {
        rawCues = normalized.split(/\\n\\s*\\n+/).map(s => s.trim()).filter(Boolean);
      } else if (options.splitMethod === 'sentences') {
        // Sentence boundary matching across international characters
        const sentences = normalized.match(/[^.!?\\n]+[.!?]+|[^.!?\\n]+$/g) || [];
        rawCues = sentences.map(s => s.trim()).filter(Boolean);
      } else {
        // By line
        rawCues = normalized.split('\\n').map(s => s.trim()).filter(Boolean);
      }

      if (rawCues.length === 0) {
        return { success: false, error: 'No cues' };
      }

      // Check if text already contains recognizable SRT timecodes
      const srtTimeRegex = /^\\d{1,2}:\\d{2}:\\d{2}[,\\.]\\d{1,3}\\s*-->\\s*\\d{1,2}:\\d{2}:\\d{2}[,\\.]\\d{1,3}/;
      const firstLines = normalized.split('\\n').slice(0, 5);
      const isAlreadySrt = firstLines.some(l => srtTimeRegex.test(l.trim()));

      if (isAlreadySrt) {
        // Return already formatted SRT cleanly
        return {
          success: true,
          srt: normalized.trim(),
          cueCount: (normalized.match(/-->/g) || []).length || rawCues.length,
          charCount: normalized.length
        };
      }

      // Generate sequential timecodes
      let currentTimeMs = Math.max(0, Math.floor(options.startTime * 1000));
      const durationMs = Math.max(500, Math.floor(options.duration * 1000));
      const gapMs = Math.max(0, Math.floor(options.gap * 1000));

      const srtBlocks = [];

      for (let i = 0; i < rawCues.length; i++) {
        const index = i + 1;
        const startMs = currentTimeMs;
        const endMs = startMs + durationMs;

        const startTimecode = formatTimecode(startMs);
        const endTimecode = formatTimecode(endMs);
        const dialogue = rawCues[i];

        srtBlocks.push(\`\${index}\\n\${startTimecode} --> \${endTimecode}\\n\${dialogue}\`);

        currentTimeMs = endMs + gapMs;
      }

      const generatedSrt = srtBlocks.join('\\n\\n');

      return {
        success: true,
        srt: generatedSrt,
        cueCount: rawCues.length,
        charCount: normalized.length
      };
    }

    function getOptions() {
      return {
        startTime: parseFloat(optStartTime?.value) || 1.0,
        duration: parseFloat(optDuration?.value) || 3.0,
        gap: parseFloat(optGap?.value) || 0.5,
        splitMethod: optSplitMethod?.value || 'lines'
      };
    }

    function updateLivePreview() {
      const text = pasteInput ? pasteInput.value : '';
      if (!text.trim()) {
        if (livePreview) livePreview.value = '';
        return;
      }

      const options = getOptions();
      const result = convertTextToSrt(text, options);
      if (result.success && livePreview) {
        livePreview.value = result.srt;
      }
    }

    // Input Events
    if (pasteInput) {
      pasteInput.addEventListener('input', updateLivePreview);
    }
    [optStartTime, optDuration, optGap, optSplitMethod].forEach(el => {
      if (el) el.addEventListener('change', updateLivePreview);
    });

    if (btnSample && pasteInput) {
      btnSample.addEventListener('click', function () {
        pasteInput.value = sampleText;
        updateLivePreview();
        clearError();
      });
    }

    if (btnClearPaste && pasteInput) {
      btnClearPaste.addEventListener('click', function () {
        pasteInput.value = '';
        if (livePreview) livePreview.value = '';
        clearError();
      });
    }

    // Live Copy
    if (btnCopyLive && livePreview) {
      btnCopyLive.addEventListener('click', function () {
        const text = livePreview.value;
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => {
          const original = copyLiveText ? copyLiveText.textContent : 'Copy';
          if (copyLiveText) copyLiveText.textContent = 'Copied!';
          setTimeout(() => {
            if (copyLiveText) copyLiveText.textContent = original;
          }, 2000);
        });
      });
    }

    // Live Download
    if (btnDownloadLive && livePreview) {
      btnDownloadLive.addEventListener('click', function () {
        const text = livePreview.value;
        if (!text) return;
        downloadBlob(text, currentFileName || 'subtitles.srt');
      });
    }

    function downloadBlob(content, filename) {
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    // File Browse / Dropzone handling
    if (btnBrowse && fileInput) {
      btnBrowse.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
      });
    }

    if (dropzone) {
      dropzone.addEventListener('click', (e) => {
        if (e.target.closest('#btn-remove-file')) return;
        if (!selectedFile && fileInput) fileInput.click();
      });

      ['dragenter', 'dragover'].forEach(ev => {
        dropzone.addEventListener(ev, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.add('dragover');
        });
      });

      ['dragleave', 'drop'].forEach(ev => {
        dropzone.addEventListener(ev, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropzone.classList.remove('dragover');
        });
      });

      dropzone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        if (dt && dt.files && dt.files[0]) {
          attachFile(dt.files[0]);
        }
      });
    }

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          attachFile(e.target.files[0]);
        }
      });
    }

    if (btnRemoveFile) {
      btnRemoveFile.addEventListener('click', (e) => {
        e.stopPropagation();
        detachFile();
      });
    }

    function attachFile(file) {
      selectedFile = file;
      currentFileName = file.name.replace(/\\.[^/.]+$/, '') + '.srt';

      if (attachedFilename) attachedFilename.textContent = file.name;
      if (attachedFilesize) attachedFilesize.textContent = formatBytes(file.size);

      if (defaultView) defaultView.style.display = 'none';
      if (attachedView) attachedView.style.display = 'flex';

      const reader = new FileReader();
      reader.onload = function (e) {
        rawFileContent = e.target.result || '';
        if (pasteInput && !pasteInput.value.trim()) {
          pasteInput.value = rawFileContent;
          updateLivePreview();
        }
      };
      reader.readAsText(file, 'utf-8');
      clearError();
    }

    function detachFile() {
      selectedFile = null;
      rawFileContent = '';
      currentFileName = 'subtitles.srt';
      if (fileInput) fileInput.value = '';
      if (defaultView) defaultView.style.display = 'flex';
      if (attachedView) attachedView.style.display = 'none';
    }

    function formatBytes(bytes) {
      if (bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    }

    function showError(msg) {
      if (errorMessage) errorMessage.textContent = msg;
      if (errorBox) errorBox.style.display = 'flex';
    }

    function clearError() {
      if (errorBox) errorBox.style.display = 'none';
    }

    // Convert Button Action
    if (btnConvert) {
      btnConvert.addEventListener('click', function () {
        const textToConvert = (pasteInput && pasteInput.value.trim()) || rawFileContent.trim();
        if (!textToConvert) {
          showError('Please paste plain text or upload a .txt file to convert.');
          return;
        }

        const options = getOptions();
        const res = convertTextToSrt(textToConvert, options);

        if (!res.success) {
          showError('Could not extract valid text lines from the input.');
          return;
        }

        clearError();

        // Populate Summary
        if (summaryFilename) summaryFilename.textContent = currentFileName;
        if (summaryFilesize) summaryFilesize.textContent = formatBytes(new Blob([res.srt]).size);
        if (summaryCues) summaryCues.textContent = String(res.cueCount);
        if (summaryChars) summaryChars.textContent = String(res.charCount);

        if (previewText) previewText.value = res.srt;

        if (inputSection) inputSection.style.display = 'none';
        if (processingPanel) processingPanel.style.display = 'flex';

        if (processingPanel) {
          processingPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }

    // Download in Results
    if (btnDownload && previewText) {
      btnDownload.addEventListener('click', () => {
        const srt = previewText.value;
        if (!srt) return;
        downloadBlob(srt, currentFileName);
      });
    }

    // Copy in Results
    if (btnCopy && previewText) {
      btnCopy.addEventListener('click', () => {
        const srt = previewText.value;
        if (!srt) return;
        navigator.clipboard.writeText(srt).then(() => {
          const orig = copyBtnText ? copyBtnText.textContent : 'Copy';
          if (copyBtnText) copyBtnText.textContent = 'Copied!';
          setTimeout(() => {
            if (copyBtnText) copyBtnText.textContent = orig;
          }, 2000);
        });
      });
    }

    // Reset Action
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        detachFile();
        if (pasteInput) pasteInput.value = '';
        if (livePreview) livePreview.value = '';
        if (previewText) previewText.value = '';
        clearError();
        if (processingPanel) processingPanel.style.display = 'none';
        if (inputSection) inputSection.style.display = 'flex';
        root.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }
  })();
</script>
`;

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully written TxtToSrtTool.astro');
