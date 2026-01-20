export type CheckResult = {
    isCorrect: boolean;
    message?: string;
};

export function checkAnswer(userInput: string, expected: string): CheckResult {
    if (!userInput) return { isCorrect: false };

    // Normalize both strings
    const normalize = (str: string) => {
        return str
            .toLowerCase()
            .trim()
            // Replace German characters with English equivalents for lenient checking
            .replace(/ä/g, 'ae')
            .replace(/ö/g, 'oe')
            .replace(/ü/g, 'ue')
            .replace(/ß/g, 'ss')
            // Also allow simple vowel replacements (u for ü, a for ä, o for ö) often used by English speakers
            .replace(/ae/g, 'a') // normalize back to single if user typed 'a' instead of 'ä' or 'ae'
            .replace(/oe/g, 'o')
            .replace(/ue/g, 'u') // This might be too aggressive (e.g. 'fuer' -> 'fur'), but good for lenient A1. 
            // Actually, let's just create multiple acceptable variations.
            .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '') // remove punctuation
            .replace(/\s{2,}/g, ' '); // remove extra spaces
    };

    const normUser = normalize(userInput);
    const normExpected = normalize(expected);

    // Special handling for common alternate spellings
    // This is a simple implementation. For production robust app, we might want a library.

    if (normUser === normExpected) {
        return { isCorrect: true };
    }

    // Handle specific cases mentioned (Tschus vs Tschüss)
    // If the user input is "tschus" and expected is "tschüs", strict normalize might fail if we don't map u->ue->u carefully.
    // My normalize above maps ü->ue, then ue->u. So ü becomes u.
    // So 'Tschüs' -> 'tschues' -> 'tschus'.
    // 'Tschus' -> 'tschus'.
    // Matches!

    // Test case: "Grüß Gott" -> "gruess gott" -> "gruss gott"
    // User types: "Gruss Gott" -> "gruss gott" (Matches)

    return { isCorrect: false };
}
