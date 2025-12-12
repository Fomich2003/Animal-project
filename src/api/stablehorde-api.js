export default async function handler(req, res) {
    console.log('=== Handler started ===');
    console.log('Method:', req.method);
    console.log('Headers:', JSON.stringify(req.headers, null, 2));
    console.log('Body:', JSON.stringify(req.body, null, 2));
    console.log('Environment check - API Key exists:', !!process.env.STABLEHORDE_SECRET_KEY);
    console.log('Environment check - API Key length:', process.env.STABLEHORDE_SECRET_KEY?.length || 0);

    // Дозволяємо CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    console.log('CORS headers set');

    // Обробка preflight запиту
    if (req.method === 'OPTIONS') {
        console.log('OPTIONS request - returning 200');
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        console.log('Invalid method:', req.method);
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { prompt, params, models, nsfw } = req.body;

        console.log('=== Parsed request data ===');
        console.log('Prompt:', prompt);
        console.log('Params:', JSON.stringify(params, null, 2));
        console.log('Models:', models);
        console.log('NSFW:', nsfw);

        const requestBody = {
            prompt,
            params,
            models,
            nsfw
        };

        console.log('=== Preparing Stablehorde API request ===');
        console.log('URL:', 'https://stablehorde.net/api/v2/generate/async');
        console.log('Request body:', JSON.stringify(requestBody, null, 2));

        const response = await fetch('https://stablehorde.net/api/v2/generate/async', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': process.env.STABLEHORDE_SECRET_KEY
            },
            body: JSON.stringify(requestBody)
        });

        console.log('=== Stablehorde API response ===');
        console.log('Status:', response.status);
        console.log('Status text:', response.statusText);
        console.log('Response headers:', JSON.stringify(Object.fromEntries(response.headers.entries()), null, 2));

        if (!response.ok) {
            const errorText = await response.text();
            console.error('=== Stablehorde API ERROR ===');
            console.error('Status:', response.status);
            console.error('Error text:', errorText);

            return res.status(response.status).json({
                error: `Stablehorde API error: ${errorText}`,
                status: response.status,
                statusText: response.statusText
            });
        }

        const data = await response.json();
        console.log('=== Stablehorde API SUCCESS ===');
        console.log('Response data:', JSON.stringify(data, null, 2));
        console.log('Generated ID:', data.id);

        res.status(200).json(data);
        console.log('=== Handler completed successfully ===');

    } catch (error) {
        console.error('=== CATCH BLOCK ERROR ===');
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);

        res.status(500).json({
            error: error.message,
            errorName: error.name,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}