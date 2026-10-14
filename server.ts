import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '25mb' }));

// Helper to initialize Gemini SDK
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback intelligent cookbook generator when offline or no API key
function generateSmartFallback(params: {
  dishTitle: string;
  labId?: string;
  rawNotes: string;
  stylePreset?: string;
}) {
  const title = params.dishTitle?.trim() || 'Cold-Infused Hibiscus Citrus Tart';
  const labId = params.labId?.trim() || `#IG-LAB-${Math.floor(100 + Math.random() * 900)}`;
  const preset = params.stylePreset || 'acai_pop_art';
  const notes = params.rawNotes || '';

  const isAcaiStyle = preset === 'acai_pop_art';
  const isRisoStyle = preset === 'summertime_riso';

  const photoDesc = isAcaiStyle
    ? 'High-energy pop art flat-lay angle at 45-degrees. Clean white dish cutout outlined in bold 3px white sticker border with cast shadow, set over grassy green hill landscape and cyan halftone stipple sky. Floating electric yellow and royal blue 5-point retro star stickers. Floating polaroid-style ingredient callouts with colorful badges.'
    : isRisoStyle
    ? 'Dynamic risograph comic print style with heavy CMYK halftone dot screening. High-noon direct sun lighting creating razor-sharp contrast and wet glistening highlights. Saturated scarlet red and lime green palette framed by an electric yellow comic explosion starburst background with retro script badge.'
    : 'Artisan tabletop photography captured under soft golden-hour natural directional light. Matte ceramic staging on weathered ash wood with botanical garnish micro-details and warm rustic tones.';

  return {
    id: `entry-${Date.now()}`,
    labId,
    title,
    subhead: isAcaiStyle ? 'Bring That Energy!' : isRisoStyle ? 'Sweet Summertime in a Bite' : 'Handcrafted Lab Harvest',
    author: 'Isaiah Gardner',
    stylePreset: preset,
    tickerText: isAcaiStyle
      ? "who is chocking? i don't care who is chocking? i don't care"
      : 'The mood food ★ The ultimate culinary treat ★ Created & Crafted by Isaiah Gardner ★',
    photoDescription: photoDesc,
    labPhotoPlaceholder: '[ 🖼️ LAB PHOTO: Isaiah Gardner: a picture of the final recipe made in the lab ]',
    ingredientStickers: [
      { id: '1', emoji: '🍓', name: 'Fresh Berries', color: '#ef4444' },
      { id: '2', emoji: '🍋', name: 'Zesty Citrus', color: '#eab308' },
      { id: '3', emoji: '🌿', name: 'Spearmint Leaf', color: '#22c55e' },
      { id: '4', emoji: '🍯', name: 'Wild Honey', color: '#f59e0b' },
      { id: '5', emoji: '🧀', name: 'Artisan Curd', color: '#fbbf24' },
    ],
    highlights: [
      `Peak emulsion stability achieved with balanced viscosity, delivering a vibrant mouthfeel without phase separation.`,
      `Optimal flavor layering unlocked through precise temperature control and controlled aeration during the final fold.`
    ],
    concernsAndTweaks: [
      `Ambient room temperature caused minor surface softening during staging; next trial requires pre-chilled plating vessels.`,
      `Acidity-to-sweetness ratio was slightly off-kilter; adjust lemon reduction by 12% to preserve delicate floral undertones.`
    ],
    reflection: `Throughout this kitchen lab trial, we focused on manipulating hydrocolloid gelatinization and natural lipid suspension to achieve maximum sensory impact. By closely monitoring temperature thresholds before introducing reactive acid elements, we successfully stabilized the structural matrix while keeping the volatile aromatics crisp and pronounced. The resulting plate delivered a dynamic contrast of bright tart notes and mellow, grounding richness that resonated across the entire tasting panel. Moving into the next iteration, fine-tuning the resting cycle will further solidify texture retention under studio spotlight conditions.`
  };
}

// Transform raw notes API
app.post('/api/transform-recipe', async (req, res) => {
  try {
    const { dishTitle, labId, rawNotes, stylePreset, imageBase64 } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      console.log('No GEMINI_API_KEY found, using intelligent culinary studio fallback.');
      const fallback = generateSmartFallback({ dishTitle, labId, rawNotes, stylePreset });
      return res.json({ success: true, entry: fallback, source: 'fallback' });
    }

    const systemPrompt = `You are an energetic, visually creative Cookbook Designer and Food Journalist. Your job is to take raw recipe notes and photos from Isaiah Gardner and transform them into aesthetic digital cookbook entries with an animated, lively, and reactive vibe.

CRITICAL REQUIREMENTS:
1. Header Bar:
   - title: Punchy, aesthetic recipe title
   - labId: Unique Lab ID (e.g. "#IG-LAB-042" or use "${labId || '#IG-LAB-099'}")
   - author: Must be "Isaiah Gardner" (Always formatted as "Created & Crafted by **Isaiah Gardner**")
2. Visual Spotlight (Based on Sent Photos & Reference Style):
   - photoDescription: Detailed breakdown replicating the exact aesthetic of the photos provided (lighting, color mood, background textures, photo angles, graphic stickers, halftone effects, starbursts, etc.)
   - labPhotoPlaceholder: MUST BE EXACTLY "[ 🖼️ LAB PHOTO: Isaiah Gardner: a picture of the final recipe made in the lab ]"
   - ingredientStickers: Array of exactly 4 to 6 objects: { id, emoji, name, color }
3. Lab Highlights:
   - Exactly 2 Points:
     - highlight1: Key success, texture, or flavor peak
     - highlight2: Technical milestone or win in the lab
4. Lab Concerns & Tweaks:
   - Exactly 2 Points:
     - concern1: Execution challenge or timing issue
     - concern2: Ingredient ratio or temperature fix
5. Lab Reflection:
   - A full, proper paragraph (3–5 complete, well-crafted sentences) reflecting on the cooking process, scientific principles, sensory outcome, and overall lab experience.
6. Additional:
   - tickerText: Fun marquee ribbon text (e.g., "who is chocking? i don't care who is chocking? i don't care" or retro hype text)
   - subhead: Catchy retro tagline (e.g., "The mood food", "Power Fuel", "Summer in a Slice")
   - stylePreset: one of "${stylePreset || 'acai_pop_art'}"

Respond ONLY with valid JSON with keys:
{
  "title": string,
  "labId": string,
  "author": "Isaiah Gardner",
  "subhead": string,
  "tickerText": string,
  "stylePreset": string,
  "photoDescription": string,
  "labPhotoPlaceholder": "[ 🖼️ LAB PHOTO: Isaiah Gardner: a picture of the final recipe made in the lab ]",
  "ingredientStickers": [ { "id": "1", "emoji": "🍓", "name": "...", "color": "#..." }, ... ],
  "highlights": [ "Point 1", "Point 2" ],
  "concernsAndTweaks": [ "Concern 1", "Concern 2" ],
  "reflection": "3 to 5 sentences paragraph..."
}`;

    let contents: any[] = [
      { text: `Raw recipe notes from Isaiah Gardner:\nDish: ${dishTitle || 'Untitled Lab Recipe'}\nLab ID: ${labId || '#IG-LAB-099'}\nSelected Style Preset: ${stylePreset || 'acai_pop_art'}\nNotes: ${rawNotes || 'Made a fresh vibrant dish with high texture and bold colors.'}` }
    ];

    if (imageBase64) {
      // If photo was uploaded by user
      const cleanData = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      contents.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: cleanData
        }
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
        temperature: 0.7,
      }
    });

    const text = response.text?.trim() || '{}';
    let parsed: any;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = generateSmartFallback({ dishTitle, labId, rawNotes, stylePreset });
    }

    // Enforce mandatory placeholder
    parsed.labPhotoPlaceholder = '[ 🖼️ LAB PHOTO: Isaiah Gardner: a picture of the final recipe made in the lab ]';
    parsed.author = 'Isaiah Gardner';
    if (!parsed.highlights || parsed.highlights.length < 2) {
      parsed.highlights = [
        'Exceptional emulsification and vibrant balance achieved.',
        'Texture consistency held firm across the full testing session.'
      ];
    }
    if (!parsed.concernsAndTweaks || parsed.concernsAndTweaks.length < 2) {
      parsed.concernsAndTweaks = [
        'Rapid ambient heat softened delicate garnish elements.',
        'Adjust acid-to-sugar balance by 10% in subsequent run.'
      ];
    }
    if (!parsed.id) {
      parsed.id = `entry-${Date.now()}`;
    }

    res.json({ success: true, entry: parsed, source: 'gemini' });
  } catch (err: any) {
    console.error('Error in /api/transform-recipe:', err);
    const fallback = generateSmartFallback({
      dishTitle: req.body?.dishTitle,
      labId: req.body?.labId,
      rawNotes: req.body?.rawNotes,
      stylePreset: req.body?.stylePreset
    });
    res.json({ success: true, entry: fallback, source: 'fallback_error', error: err?.message });
  }
});

// Start Express server and connect Vite in development
async function start() {
  const isProduction = process.env.NODE_ENV === 'production';

  // Serve user uploaded images directly
  app.use('/images', express.static(path.resolve(__dirname, 'images')));

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Isaiah Gardner Cookbook Lab server running on http://0.0.0.0:${port}`);
  });
}

start();
