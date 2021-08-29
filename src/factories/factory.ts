export interface Factory {
  generate: () => Promise<void>;
  upload: () => Promise<void>;
}
