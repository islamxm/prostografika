import { createContext, useContext } from 'react';

interface TTextEditorContext {
  canvasTextObject: fabric.IText
  requestRenderAll: () => void
}

export const TextEditorContext = createContext<TTextEditorContext | null>(null);

export const useTextEditorContext = () => {
  const context = useContext(TextEditorContext);

  if (context === null) {
    throw new Error(
      'useTextEditorContext has to be used within <TextEditorContextProvider />'
    );
  }

  return context;
};