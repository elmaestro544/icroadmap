import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const model = 'gemini-2.5-flash';

export const generateSocialPost = async () => {
    const prompt = `
        You are a social media marketing expert. Generate a compelling and concise social media post for LinkedIn and Facebook. The tone should be professional yet enthusiastic.

        The company is called "I am Certified" (أنا معتمد). It is an educational agency that partners with organizations to build world-class certification programs.

        Core Services:
        - Designing, delivering, and supporting comprehensive training programs.
        - Competency matrix development and employee skills assessment.
        - Data-driven training needs analysis.
        - Flexible delivery: virtual, in-person, hybrid, and international training trips.
        - Post-program consulting to ensure real-world application of skills.

        Value Proposition:
        - We don't just train; we certify.
        - We are a strategic partner, not just a vendor.
        - We translate training investment into a demonstrably skilled and credentialed workforce.
        - We build a future-ready workforce for our clients.

        The post must:
        1. Have an engaging opening hook.
        2. Clearly articulate the value proposition in 2-3 short paragraphs.
        3. Conclude with a strong call to action to visit our website to learn more.
        4. Include relevant hashtags like #CorporateTraining, #Certification, #ProfessionalDevelopment, #EmployeeSkills, #FutureOfWork, #TalentDevelopment.
    `;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error("Error generating social post:", error);
        throw new Error("Failed to generate social media post. Please try again.");
    }
};
