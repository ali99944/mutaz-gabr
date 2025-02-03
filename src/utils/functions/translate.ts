export const fillTranslate = (translation: string, blocks: Record<string, string>) => 
    Object.entries(blocks).reduce(
        (temp, [key, value]) => temp.replace(`{${key}}`, value),
        translation
    );

