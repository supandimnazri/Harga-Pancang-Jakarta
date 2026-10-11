// Google Drive Project Image Configuration
// Source Drive File: https://drive.google.com/file/d/1TNmWDJeBR15LdNtxWq5sNqjKFdmCAr13

export const GDRIVE_IMAGE_URL = 'https://lh3.googleusercontent.com/d/1TNmWDJeBR15LdNtxWq5sNqjKFdmCAr13';
export const GDRIVE_FILE_ID = '1TNmWDJeBR15LdNtxWq5sNqjKFdmCAr13';
export const LOCAL_PROJECT_IMAGE = '/images/gdrive_pancang_proyek_opt.jpg';

/**
 * Graceful fallback handler if Google Drive URL cannot be loaded by client browser
 */
export const onDriveImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  if (target.src !== window.location.origin + LOCAL_PROJECT_IMAGE && !target.src.endsWith(LOCAL_PROJECT_IMAGE)) {
    target.src = LOCAL_PROJECT_IMAGE;
  }
};
